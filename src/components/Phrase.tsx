'use client';
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { Button } from "./ui/button";
import { useState } from "react";
import { Card } from "./Card";

export default function SecretRecoveryPhrase() {

const [mnemonic , SetMnemonic ]= useState<string>()

//   const seed = mnemonicToSeedSync(mnemonic);



  return <>

  <div className="m-auto p-4">
    <Button
    onClick={()=>{
        SetMnemonic(generateMnemonic())
    }}
    >Generate Secrat Reacovery Phrase</Button>

    {
       mnemonic ? <Mnemonic mnemonic={mnemonic.split(' ')}/> :''
    }
  </div>
  </>;
}


function Mnemonic({mnemonic}:{mnemonic:string[]}){
    return<>
    <Card>
        
    {mnemonic.map((word:string,index:number)=>(
        <div key={index}>
            <span>{index}</span> {word}
        </div>
    ))}
    
    </Card>
    </>

}