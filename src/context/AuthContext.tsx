import { createContext, ReactNode, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User } from "firebase/auth";
import { auth } from "../lib/firebase";
// import { destroyCookie, parseCookies } from "nookies";

type AuthContextData = {
  user: User | null;
  handleGoogleSignIn: () => Promise<void>;
  handleGoogleSignOut: () => Promise<void>;
}
type AuthProviderProps = {
  children: ReactNode;
}


export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)

  async function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider()

    await signInWithPopup(auth, provider)
    .then(response => {
      setUser(response.user)
      const credential = GoogleAuthProvider.credentialFromResult(response);
      const token = credential?.accessToken;
    })
    .catch(err => console.log(err))
  }

  async function handleGoogleSignOut() {
    await signOut(auth)

    setUser({} as User)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } 
    });
  }, [])

  return (
    <AuthContext.Provider value={{ user, handleGoogleSignIn, handleGoogleSignOut }}>
      {children}
    </AuthContext.Provider>
  )
} 