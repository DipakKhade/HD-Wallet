import Appbar from "@/components/Appbar";
import { Card } from "@/components/Card";
import Hero from "@/components/Hero";
import SecretRecoveryPhrase from "@/components/Phrase";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <Appbar/>
      <Hero/>
     <SecretRecoveryPhrase/>
    </main>
  );
}
