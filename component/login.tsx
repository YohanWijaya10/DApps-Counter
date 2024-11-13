'use client'
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { chain, client } from "../utils/constants";
import Counter from "./counter";
import { useReadContract } from "thirdweb/react";
import { readContract } from "thirdweb";
import { contract } from "../utils/constants";

import { log } from "console";

const login: React.FC = () =>{
    const account = useActiveAccount();
    return (
        <div> 
            {account ? (
                <div style={{ textAlign: "center" }}>
                    <ConnectButton client={client} chain={chain} />
                </div>
            ) : (
                <div style={{ textAlign: "center" }}>
                    <ConnectButton client={client} chain={chain} />
                </div>
            ) }
            <Counter />
        </div>
    )
}

export default login;