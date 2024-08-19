"use client";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { Button } from "./ui/button";
import { useState } from "react";
import { Card } from "./Card";
import { FaRegCopy } from "react-icons/fa6";
import CreateKeyPairs from "./CreateKeys";

export default function SecretRecoveryPhrase() {
  const [mnemonic, SetMnemonic] = useState<string>();

  //   const seed = mnemonicToSeedSync(mnemonic);

  return (
    <>
      <div className="p-4 flex flex-col justify-center w-96 m-auto">
        <Button
          onClick={() => {
            SetMnemonic(generateMnemonic());
          }}
        >
          Generate Secrat Reacovery Phrase
        </Button>
      </div>
      {mnemonic ? (
        <>
          <Mnemonic mnemonic={mnemonic.split(" ")} mnemonicstr={mnemonic} />
          <CreateKeyPairs mnemonic={mnemonic}/>
          </>
        ) : (
          ""
        )}
    </>
  );
}

function Mnemonic({
  mnemonic,
  mnemonicstr,
}: {
  mnemonic: string[];
  mnemonicstr: string;
}) {
  return (
    <>
      <Card>
        <div className="grid grid-cols-3 gap-4">
          {mnemonic.map((word: string, index: number) => (
            <div key={index} className="flex items-center text-md">
              <span className="pr-2">{index + 1} </span>
              <div className="font-semibold">{word}</div>
            </div>
          ))}
          <div className="pt-6">
            <button
            className="flex "
              onClick={async () => {
                await navigator.clipboard.writeText(mnemonicstr);
              }}
            >
              <FaRegCopy />
              <span className="pb-6 pl-2">copy mnemonic</span>
            </button>
          </div>
        </div>
      </Card>
    </>
  );
}
