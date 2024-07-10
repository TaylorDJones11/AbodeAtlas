'use client';

import { SessionProvider } from 'next-auth/react';

const AuthProvider = ({ children }) => {
  console.log('AuthProvider rendered');
  return <SessionProvider>{children} </SessionProvider>;
};
export default AuthProvider;
