import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const res = await fetch('http://localhost:5002/api/user/login', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
        token.accessToken = user.token;
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      session.accessToken = token.accessToken;
      return session;
    },
  },
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET_KEY, // Change this to a secure key
  },
  pages: {
    signIn: '/auth/login',
  },
});
