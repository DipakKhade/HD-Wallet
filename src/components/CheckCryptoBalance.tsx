"use client";
import { useState } from "react";
import { Card } from "./Card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import axios from "axios";

export default function CheckCryptoBalance() {
  const [SolPublicKey, SetSolPublicKey] = useState<string>("");
  const [SOLBalance, SetSOLBalance] = useState<number>();

  return (
    <>
      <main className="min-h-screen">
        <Card>
          <p>Check Yours Solana Balance on Blockchain</p>

          <Input
            className=""
            onChange={(e) => SetSolPublicKey(e.target.value)}
            placeholder="enter solana public key"
          />

          <span className="p-2 mt-3">
            <Button
              onClick={async () => {
                const res = await axios.post(
                  `https://solana-mainnet.g.alchemy.com/v2/K8uFHkLwqSo68gCqj-o0u-lahQC0mSH-`,
                  {
                    jsonrpc: "2.0",
                    id: 1,
                    method: "getBalance",
                    params: [SolPublicKey],
                  }
                );

                console.log(res, res.data.result.value);
                SetSOLBalance(res.data.result.value as number);
              }}
            >
              check
            </Button>
          </span>
          {/* {SOLBalance ? <span>asd{SOLBalance}</span> : ""} */}
          {SOLBalance}
        </Card>
      </main>
    </>
  );
}
