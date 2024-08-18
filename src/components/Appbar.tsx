"use client";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Appbar() {
  //   const session = useSession();

  return (
    <>
      <nav className="flex justify-between border border-gray-500 h-16 p-2">
        <div className="text-2xl font-semibold"></div>
        <div>
          {/* {session.data?.user ? (
             <div className="flex space-x-3">
            <Button>sign out</Button>
             <AvatarDemo profileImage={session.data?.user?.image as string}/> 
            </div>
          ) : (
           
            <Button onClick={() => signIn("google")}>
              sign in
            </Button>
          )} */}
          <Button onClick={() => signIn("google")}>sign in</Button>
        </div>
      </nav>
    </>
  );
}

function AvatarDemo({ profileImage }: { profileImage: string }) {
  return (
    <Avatar>
      <AvatarImage src={profileImage} alt="img" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
