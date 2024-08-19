'use client';

import nacl from "tweetnacl";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./Card";
import CopyToClickBord from "./CopyToclickBordButton";

export default function CreateKeyPairs({mnemonic}:{mnemonic:string}){
    const [ BTCWalltes , SetBTCWallets ] = useState<number>(0)
    const [ BTCPublicKeys , SetBTCPublicKeys ] = useState<string[]>([])
    const [ SOLWalltes , SetSOLWallets ] = useState<number>(0)
    const [ SOLPublicKeys , SetSOLPublicKeys ] = useState<string[]>([])
    const [ ETHWalltes , SetETHWallets ] = useState<number>(0)
    const [ ETHPublicKeys , SetETHPublicKeys ] = useState<string[]>([])
    
    return<>
    <main>
        <Card>
        <div>
        <Button
        onClick={()=>{
        const seed = mnemonicToSeedSync(mnemonic);
        const path = `m/44'/0'/${BTCWalltes}'/0'`; 
          const derivedSeed = derivePath(path, seed.toString("hex")).key;
          const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
          BTCPublicKeys.push(Keypair.fromSecretKey(secret).publicKey.toBase58())
          console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
          SetBTCWallets(BTCWalltes+1)
        }}
        >create a BTC Wallet Key</Button>

        <div>
            {BTCWalltes>0 ? <>{
                BTCPublicKeys.map((key,index)=>(
                    <div className="flex p-4" key={index}>
                        <span>{key}</span>
                        <span><CopyToClickBord text={key}/></span>
                        
                        </div>
                ))
            }</>:''}
        </div>
        </div>

        </Card>
        <Card>
        <div>
        <Button
        onClick={()=>{
        const seed = mnemonicToSeedSync(mnemonic);
        const path = `m/44'/60'/${ETHWalltes}'/0'`; 
          const derivedSeed = derivePath(path, seed.toString("hex")).key;
          const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
          ETHPublicKeys.push(Keypair.fromSecretKey(secret).publicKey.toBase58())
          console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
          SetETHWallets(ETHWalltes+1)
        }}
        >create a ETH Wallet Key</Button>
        <div>
            {ETHWalltes>0 ? <>{
                ETHPublicKeys.map((key,index)=>(
                    <div className="flex p-4" key={index}>
                    <span>{key}</span>
                    <span><CopyToClickBord text={key}/></span>
                    
                    </div>
                ))
            }</>:''}
        </div>
        </div>

        </Card>
        <Card>
        <div>
        <Button
        onClick={()=>{
        const seed = mnemonicToSeedSync(mnemonic);
        const path = `m/44'/501'/${SOLWalltes}'/0'`; 
          const derivedSeed = derivePath(path, seed.toString("hex")).key;
          const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
          SOLPublicKeys.push(Keypair.fromSecretKey(secret).publicKey.toBase58())
          console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
          SetSOLWallets(SOLWalltes+1)
        }}
        >create a SOL Wallet Key</Button>
        <div>
            {SOLWalltes>0 ? <>{
                SOLPublicKeys.map((key,index)=>(
                    <div className="flex p-4" key={index}>
                    <span>{key}</span>
                    <span><CopyToClickBord text={key}/></span>
                    
                    </div>
                ))
            }</>:''}
        </div>
        </div>

        </Card>
    </main>
    </>
}