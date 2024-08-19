import GoogleProvider from "next-auth/providers/google";

export const authOptions ={
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
          })
    ]
,
    callbacks:{
        async  signIn({ user, account, profile, email, credentials }:any) {
            console.log({ user, account, profile, email, credentials })
            return true
          },
    }
}