import NextAuth, { SessionStrategy, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export interface ExtendedUser extends User {
  id: string;
  username: string;
  access_token: string;
  refresh_token: string;
}

const authOptions = {
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const API_ENDPOINT_LOGIN = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/login`;
        const API_ENDPOINT_GET_USER = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/user`;
        try {
          const loginResponse = await axios.post(API_ENDPOINT_LOGIN, {
            username: credentials?.username,
            password: credentials?.password,
          });
          const loginData = loginResponse.data;

          const userResponse = await axios.get(API_ENDPOINT_GET_USER, {
            headers : {
                "Authorization" : `Bearer ${loginData.data.access_token}`
            }
          })

          const userData = userResponse.data

          return {
            id: userData.data.id,
            username: userData.data.name,
            access_token: loginData.data.access_token,
            refresh_token: loginData.data.refresh_token,
          } as User;

        } catch (error: any) {
            return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user } : {token: any, user: any}) {
        if (user) {
        return {
          ...token,
          id: user.id,
          username: user.username,
          access_token: user.access_token,
          refresh_token: user.refresh_token,
        };
      }
      return token;
    },
    async session({ session, token }: {session:any, token:any}) {
      if (token?.access_token) {
        session.user = {
          ...session.user,
          id: token.id,
          username: token.username,
          access_token: token.access_token,
          refresh_token: token.refresh_token,
        };
      }
      return session;
    },
  },
};

export default authOptions

