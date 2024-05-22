import  authOptions  from "@/lib/authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export default handler