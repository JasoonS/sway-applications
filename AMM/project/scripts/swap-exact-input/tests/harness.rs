use fuels::prelude::*;
use test_utils::{
    abi::{exchange::preview_swap_exact_input, SwapExactInputScript},
    data_structures::{AMMContract, TransactionParameters, WalletAssetConfiguration},
    paths::SWAP_EXACT_INPUT_SCRIPT_BINARY_PATH,
    setup::{
        common::{deploy_and_initialize_amm, setup_wallet_and_provider},
        scripts::{setup_exchange_contracts, transaction_inputs_outputs},
    },
};

async fn expected_swap_amounts(
    amm: &AMMContract,
    input_amount: u64,
    route: &Vec<AssetId>,
) -> Vec<u64> {
    assert!(route.len() >= 2);
    let (mut i, mut amounts) = (0, vec![input_amount]);

    while i < route.len() - 1 {
        let pair = (*route.get(i).unwrap(), *route.get(i + 1).unwrap());
        let exchange = &amm.pools.get(&pair).unwrap().instance;
        let amount = preview_swap_exact_input(&exchange, amounts[i], pair.0)
            .await
            .value
            .amount;
        amounts.push(amount);
        i += 1;
    }
    amounts
}

async fn setup() -> (
    WalletUnlocked,
    AMMContract,
    Vec<AssetId>,
    TransactionParameters,
) {
    let (wallet, asset_ids, provider) =
        setup_wallet_and_provider(&WalletAssetConfiguration::default()).await;

    let mut amm = deploy_and_initialize_amm(&wallet).await;

    setup_exchange_contracts(&wallet, &mut amm, &asset_ids).await;

    let mut contracts = vec![amm.id];
    contracts.extend(amm.pools.values().into_iter().map(|exchange| exchange.id));

    let transaction_parameters =
        transaction_inputs_outputs(&wallet, &provider, &contracts, &asset_ids, None).await;

    (wallet, amm, asset_ids, transaction_parameters)
}

mod success {
    use super::*;

    #[tokio::test]
    async fn can_swap_exact_input_along_route() {
        let (wallet, amm, asset_ids, transaction_parameters) = setup().await;

        let route = asset_ids;
        let script_instance =
            SwapExactInputScript::new(wallet, SWAP_EXACT_INPUT_SCRIPT_BINARY_PATH);
        let input_amount: u64 = 60;

        let amounts = expected_swap_amounts(&amm, input_amount, &route).await;
        let expected_result = amounts[route.len() - 1];

        let result = script_instance
            .main(
                amm.id,
                route
                    .into_iter()
                    .map(|asset_id| ContractId::new(*asset_id))
                    .collect(),
                amounts,
            )
            .with_inputs(transaction_parameters.inputs)
            .with_outputs(transaction_parameters.outputs)
            .tx_params(TxParameters::new(None, Some(100_000_000), None))
            .call()
            .await
            .unwrap()
            .value;

        assert_eq!(expected_result, result);
    }

    #[tokio::test]
    async fn can_swap_exact_input_two_assets() {
        let (wallet, amm, asset_ids, transaction_parameters) = setup().await;

        // route consists of two assets. this is a direct swap
        let route = vec![*asset_ids.get(0).unwrap(), *asset_ids.get(1).unwrap()];
        let script_instance =
            SwapExactInputScript::new(wallet, SWAP_EXACT_INPUT_SCRIPT_BINARY_PATH);
        let input_amount: u64 = 60;

        let amounts = expected_swap_amounts(&amm, input_amount, &route).await;
        let expected_result = amounts[route.len() - 1];

        let result = script_instance
            .main(
                amm.id,
                route
                    .into_iter()
                    .map(|asset_id| ContractId::new(*asset_id))
                    .collect(),
                amounts,
            )
            .with_inputs(transaction_parameters.inputs)
            .with_outputs(transaction_parameters.outputs)
            .tx_params(TxParameters::new(None, Some(100_000_000), None))
            .call()
            .await
            .unwrap()
            .value;

        assert_eq!(expected_result, result);
    }
}

mod revert {
    use super::*;

    #[tokio::test]
    #[should_panic(expected = "Revert(18446744073709486080)")]
    async fn when_route_length_is_zero() {
        let (wallet, amm, _asset_ids, _transaction_parameters) = setup().await;

        // route length is zero
        let route: Vec<AssetId> = vec![];
        let amounts: Vec<u64> = vec![];
        let script_instance =
            SwapExactInputScript::new(wallet, SWAP_EXACT_INPUT_SCRIPT_BINARY_PATH);

        let _result = script_instance
            .main(
                amm.id,
                route
                    .into_iter()
                    .map(|asset_id| ContractId::new(*asset_id))
                    .collect(),
                amounts,
            )
            .call()
            .await
            .unwrap();
    }

    #[tokio::test]
    #[should_panic(expected = "Revert(18446744073709486080)")]
    async fn when_route_length_is_one() {
        let (wallet, amm, asset_ids, _transaction_parameters) = setup().await;

        // route length is one
        let route: Vec<AssetId> = vec![*asset_ids.get(0).unwrap()];
        let amounts: Vec<u64> = vec![60];
        let script_instance =
            SwapExactInputScript::new(wallet, SWAP_EXACT_INPUT_SCRIPT_BINARY_PATH);

        script_instance
            .main(
                amm.id,
                route
                    .into_iter()
                    .map(|asset_id| ContractId::new(*asset_id))
                    .collect(),
                amounts,
            )
            .call()
            .await
            .unwrap();
    }

    #[tokio::test]
    #[should_panic(expected = "Revert(18446744073709486080)")]
    async fn when_swap_amounts_not_exact() {
        let (wallet, amm, asset_ids, transaction_parameters) = setup().await;

        let route = asset_ids;

        let script_instance =
            SwapExactInputScript::new(wallet, SWAP_EXACT_INPUT_SCRIPT_BINARY_PATH);
        let input_amount: u64 = 60;

        let mut amounts = expected_swap_amounts(&amm, input_amount, &route).await;

        // amounts is missing an element
        amounts.remove(0);

        script_instance
            .main(
                amm.id,
                route
                    .into_iter()
                    .map(|asset_id| ContractId::new(*asset_id))
                    .collect(),
                amounts,
            )
            .with_inputs(transaction_parameters.inputs)
            .with_outputs(transaction_parameters.outputs)
            .call()
            .await
            .unwrap();
    }

    #[tokio::test]
    #[should_panic(expected = "Revert(18446744073709486080)")]
    async fn when_pair_exchange_not_registered() {
        let (wallet, amm, asset_ids, transaction_parameters) = setup().await;

        let mut route = asset_ids;

        let script_instance =
            SwapExactInputScript::new(wallet, SWAP_EXACT_INPUT_SCRIPT_BINARY_PATH);
        let input_amount: u64 = 60;

        let amounts = expected_swap_amounts(&amm, input_amount, &route).await;

        // make sure that the first asset in the route does not have a pool
        let not_registered_asset_id = AssetId::from([1u8; 32]);
        route.remove(0);
        route.insert(0, not_registered_asset_id);

        script_instance
            .main(
                amm.id,
                route
                    .into_iter()
                    .map(|asset_id| ContractId::new(*asset_id))
                    .collect(),
                amounts,
            )
            .with_inputs(transaction_parameters.inputs)
            .with_outputs(transaction_parameters.outputs)
            .call()
            .await
            .unwrap();
    }
}
