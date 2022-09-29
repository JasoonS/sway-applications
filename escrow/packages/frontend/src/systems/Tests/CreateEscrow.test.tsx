import { ASSETS, DECIMAL_PRECISION } from "../../config";
import { TestUtils, Wallet } from "fuels";
import { screen, renderWithRouter, fireEvent } from "@escrow/test-utils";
import { App } from "../../App";
import { createWallet, mockUseWallet, mockUseWalletList } from "../Core/hooks/__mocks__/useWallet";

let wallets: Wallet[] = [];
let numWallets = 4;
const coins = ASSETS.map(assetId => {
    return { assetId, amount: DECIMAL_PRECISION.mul(100) };
});

beforeAll(async () => {
    for (let i = 0; i < numWallets; ++i) {
        const wallet = createWallet();
        wallets.push(wallet);
    }
    mockUseWallet(wallets[0]);
    mockUseWalletList(wallets);
    await wallets.reduce(async (promise, wallet) => {
        await promise;
        await TestUtils.seedWallet(wallet, coins);
    }, Promise.resolve());
});

describe("Create Escrow", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should disable create escrow button by default", async () => {
        const { user } = renderWithRouter(<App />, {
            route: "/seller",
        });

        const showCreateEscrowBtn = await screen.findByLabelText(/Show create escrow/);
        expect(showCreateEscrowBtn).toBeInTheDocument();
        await user.click(showCreateEscrowBtn);

        const createEscrowBtn = await screen.findByLabelText(/Create escrow/);
        expect(createEscrowBtn).toBeInTheDocument();
        expect(createEscrowBtn).toBeDisabled();
    });

    it("should be able to set input values", async () => {
        const { user } = renderWithRouter(<App />, {
            route: "/seller",
        });

        //screen.debug();

        const arbiter = wallets[1];
        const buyer = wallets[2];

        const showCreateEscrowBtn = await screen.findByLabelText(/Show create escrow/);
        expect(showCreateEscrowBtn).toBeInTheDocument();
        await user.click(showCreateEscrowBtn);

        const arbiterAddressInput = await screen.findByLabelText(/Create arbiter address input/);
        fireEvent.change(arbiterAddressInput, {
            target: {
                value: arbiter.address.toHexString(),
            },
        });
        expect(arbiterAddressInput).toHaveValue(arbiter.address.toHexString());

        const arbiterAssetInput = await screen.findByLabelText(/Create arbiter asset input/);
        fireEvent.change(arbiterAssetInput, {
            target: {
                value: ASSETS[0]
            },
        });
        expect(arbiterAssetInput).toHaveValue(ASSETS[0]);

        const arbiterFeeInput = await screen.findByLabelText(/Create arbiter fee input/);
        const arbiterFeeValue = "0.1";
        fireEvent.change(arbiterFeeInput, {
            target: {
                value: arbiterFeeValue,
            },
        });
        expect(arbiterFeeInput).toHaveValue(arbiterFeeValue);

        const buyerAddressInput = await screen.findByLabelText(/Buyer address input/);
        fireEvent.change(buyerAddressInput, {
            target: {
                value: buyer.address.toHexString(),
            },
        });
        expect(buyerAddressInput).toHaveValue(buyer.address.toHexString());

        // TODO this test should get the current blockheight and add some constant
        // Instead of hardcoding "1000".
        const escrowDeadlineInput = await screen.findByLabelText(/Escrow deadline input/);
        const escrowDeadlineValue = "1000";
        fireEvent.change(escrowDeadlineInput, {
            target: {
                value: escrowDeadlineValue,
            },
        });
        expect(escrowDeadlineInput).toHaveValue(escrowDeadlineValue);

        const assetInput0 = await screen.findByLabelText(/Asset input 0/);
        fireEvent.change(assetInput0, {
            target: {
                value: ASSETS[0],
            },
        });
        expect(assetInput0).toHaveValue(ASSETS[0]);

        const assetAmount0 = await screen.findByLabelText(/Asset amount input 0/);
        const assetAmountValue0 = "0.1";
        fireEvent.change(assetAmount0, {
            target: {
                value: assetAmountValue0,
            },
        });
        expect(assetAmount0).toHaveValue()

        const addAssetBtn = await screen.findByLabelText(/Add asset/);
        expect(addAssetBtn).toBeInTheDocument();
        await user.click(addAssetBtn);

        const assetInput1 = await screen.findByLabelText(/Asset input 1/);
        fireEvent.change(assetInput1, {
            target: {
                value: ASSETS[1],
            },
        });
        expect(assetInput1).toHaveValue(ASSETS[1]);

        const assetAmount1 = await screen.findByLabelText(/Asset amount input 1/);
        const assetAmountValue1 = "0.2";
        fireEvent.change(assetAmount1, {
            target: {
                value: assetAmountValue1,
            },
        });
        expect(assetAmount1).toHaveValue(assetAmountValue1);
    });

    it("Should be able to create an escrow", async () => {
        const { user } = renderWithRouter(<App />, {
            route: "/seller",
        });

        const arbiter = wallets[1];
        const buyer = wallets[2];

        const showCreateEscrowBtn = await screen.findByLabelText(/Show create escrow/);
        expect(showCreateEscrowBtn).toBeInTheDocument();
        await user.click(showCreateEscrowBtn);

        const arbiterAddressInput = await screen.findByLabelText(/Create arbiter address input/);
        fireEvent.change(arbiterAddressInput, {
            target: {
                value: arbiter.address.toHexString(),
            },
        });

        const arbiterAssetInput = await screen.findByLabelText(/Create arbiter asset input/);
        fireEvent.change(arbiterAssetInput, {
            target: {
                value: ASSETS[0]
            },
        });

        const arbiterFeeInput = await screen.findByLabelText(/Create arbiter fee input/);
        fireEvent.change(arbiterFeeInput, {
            target: {
                value: "0.1",
            },
        });

        const buyerAddressInput = await screen.findByLabelText(/Buyer address input/);
        fireEvent.change(buyerAddressInput, {
            target: {
                value: buyer.address.toHexString(),
            },
        });

        // TODO this test should get the current blockheight and add some constant
        // Instead of hardcoding "1000".
        const escrowDeadlineInput = await screen.findByLabelText(/Escrow deadline input/);
        fireEvent.change(escrowDeadlineInput, {
            target: {
                value: "1000",
            },
        });

        const assetInput0 = await screen.findByLabelText(/Asset input 0/);
        fireEvent.change(assetInput0, {
            target: {
                value: ASSETS[0],
            },
        });

        const assetAmount0 = await screen.findByLabelText(/Asset amount input 0/);
        fireEvent.change(assetAmount0, {
            target: {
                value: "0.1",
            },
        });

        const addAssetBtn = await screen.findByLabelText(/Add asset/);
        expect(addAssetBtn).toBeInTheDocument();
        await user.click(addAssetBtn);

        const assetInput1 = await screen.findByLabelText(/Asset input 1/);
        fireEvent.change(assetInput1, {
            target: {
                value: ASSETS[1],
            },
        });

        const assetAmount1 = await screen.findByLabelText(/Asset amount input 1/);
        fireEvent.change(assetAmount1, {
            target: {
                value: "0.2",
            },
        });

        const submitBtn = await screen.findByLabelText(/Create escrow/);
        expect(submitBtn).toBeInTheDocument();
        await user.click(submitBtn);
    });

    // TODO handle this input edge case
    xit("should show '0.' if only '.' is typed in the input", async () => {
        const { user } = renderWithRouter(<App />, {
            route: "/seller",
        });

        const showCreateEscrowBtn = await screen.findByLabelText(/Show create escrow/);
        expect(showCreateEscrowBtn).toBeInTheDocument();
        await user.click(showCreateEscrowBtn);

        const arbiterFeeInput = await screen.findByLabelText(/Arbiter fee input/);
        fireEvent.change(arbiterFeeInput, {
            target: {
                value: ".",
            },
        });
        expect(await screen.findByLabelText(/Arbiter fee input/)).toHaveValue("0.");
    });
});