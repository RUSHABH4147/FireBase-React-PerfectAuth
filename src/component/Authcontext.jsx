import React, { useContext, useState, useEffect } from "react"
import { auth } from "../Firebase";
import firebase from "firebase/app";



const AuthContext = React.createContext()
//custom hook 
export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true)


  function Singup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  function Login(email, password) {
    return auth.signInWithEmailAndPassword(email ,password)
  }
  function Logout() {
    return auth.signOut();
  }
  function resetpassword(email) {
    return auth.sendPasswordResetEmail(email);
  }
  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }
  var provider = new firebase.auth.GoogleAuthProvider();
  function gogglesignin() {
    return auth.signInWithPopup(provider)
  }

  //setting my current user 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  //values which i gonna pass through my component
  const value = {
    currentUser,
    Singup,
    Login,
    Logout,
    resetpassword,
    updateEmail,
    updatePassword,
    gogglesignin
   
  }
//provider
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}