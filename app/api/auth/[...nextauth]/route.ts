import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

type userProps = {
  id: string
  name: string
  email: string
  role: string
}

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    CredentialsProvider({
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string
          password: string
        }
        const user: userProps = {
          id: '1',
          name: 'Jason Enkristo',
          email: 'jasonenkristo@gmail.com',
          role: 'admin',
        }
        if (email === user.email && password === '12345678') {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user, profile }) {
      if (account?.provider === 'credentials' && user) {
        // Cast the NextAuth 'User' to our defined 'userProps' so we can access custom properties.
        const customUser = user as unknown as userProps
        token.email = customUser.email
        // Note: 'userProps' defines 'name' instead of 'fullname', so we use customUser.name
        token.fullname = customUser.name
        token.role = customUser.role
      }
      return token
    },
    async session({ session, token }) {
      // Define a custom type to represent the user with extra fields securely
      type CustomSessionUser = {
        email?: string | null
        name?: string | null
        image?: string | null
        fullname?: unknown
        role?: unknown
      }

      if (session.user) {
        if ('email' in token) {
          session.user.email = token.email as string
        }
        if ('fullname' in token) {
          ;(session.user as CustomSessionUser).fullname = token.fullname
        }
        if ('role' in token) {
          ;(session.user as CustomSessionUser).role = token.role
        }
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: 'jasutoji123',
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
