import { BoxCentered, Button, Flex, Heading, toast, Stack, Text, Input} from "@fuel-ui/react";
import { useState } from "react";
import { useContract } from "../../core/hooks";
import { UserInput } from "../../../contracts/MultisigContractAbi";
import { validateAddress } from "../../common/utils/validate_address";

export function CreateWallet() {
    // Used for our component listeners
    const [users, setUsers] = useState<UserInput[]>([{ address: "", weight: 0 }])

    const { contract, isLoading, isError } = useContract()

    async function createMultisig() {
        let error = false;
        users.forEach((user, index) => {
            let { address, isError } = validateAddress(user.address);
            if (isError) {
                error = true;
                toast.error(`Invalid address: User ${index+1}`, { duration: 10000 });
                return;
            }

            user.address = address;
        });

        if (error) return;

        try {
            await contract!.functions.constructor(users).call();
            toast.success("Wallet created!", { duration: 10000 });
        } catch (e) {
            console.log(e);
            toast.error("Oof, something went wrong, and like, good luck with that");
        }
    }

    async function addUser() {
        let user: UserInput = { address: "", weight: 0 };
        setUsers([...users, user ]);
    }

    async function updateUser(index: number, user: UserInput) {
        const localUsers = [...users];
        localUsers[index] = user;
        setUsers(localUsers);
    }

    async function removeUser() {
        if (users.length === 1) {
            toast.error("Cannot remove the only user")
            return;
        }
        setUsers([...users.splice(0, users.length - 1)]);
    }

    return (
        <BoxCentered key="create-users" css={{ marginTop: "12%", width: "50%" }}>
            <Stack css={{ minWidth: "100%" }}>
                <Heading as="h3" css={{ marginLeft: "auto", marginRight: "auto", marginBottom: "$10", color: "$accent1"}}>
                    Create a new wallet
                </Heading>

                {
                    users.map((user, index) => {
                        return (
                            <>
                                <Flex key={`create-user-${index}`} gap="$1">
                                    <Stack css={{ width: "100%" }}>
                                        <Text color="blackA12">{`User address: ${index+1}`}</Text>
                                        <Input size="lg">
                                            <Input.Field onChange={(event) => updateUser(index, { ...user, address: event.target.value })} placeholder="0x80d5e8c2be..." />
                                        </Input>
                                    </Stack>

                                    <Stack css={{ width: "100%" }}>
                                        <Text color="blackA12">{`Recipient weight: ${index+1}`}</Text>
                                        <Input size="lg">
                                            <Input.Number onChange={(event) => updateUser(index, { ...user, weight: event.target.value })} placeholder="1" />
                                        </Input>
                                    </Stack>
                                </Flex>
                            </>
                        )
                    })
                }

                <Button
                    color="accent"
                    onPress={createMultisig}
                    size="lg"
                    variant="solid"
                    css={{ marginLeft: "auto", marginRight: "auto", marginTop: "$2", width: "100%", boxShadow: "0px 0px 1px 1px" }}
                >
                    Create wallet
                </Button>

                <Flex gap="$2" css={{ marginTop: "$1" }}>
                    <Button
                        color="accent"
                        onPress={addUser}
                        size="lg"
                        variant="solid"
                        css={{ width: "50%", boxShadow: "0px 0px 1px 1px" }}
                    >
                        Add user
                    </Button>

                    <Button
                        color="accent"
                        onPress={removeUser}
                        size="lg"
                        variant="solid"
                        css={{ width: "50%", boxShadow: "0px 0px 1px 1px" }}
                    >
                        Remove user
                    </Button>
                </Flex>
            </Stack>
        </BoxCentered>
    );
}
