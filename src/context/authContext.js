import React, {useState, useEffect, useContext} from 'react'
import {firebaseAuth as auth} from '../config/firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState({
    uid: null,
    email: null,
    isAdmin: null,
  })
  const [loading, setLoading] = useState(true)

  console.log('Current User Object', currentUser)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    setCurrentUser,
    login,
    signup,
    logout,
  }

  // login('admin1@gmail.com', 'admin123')
  // logout()

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
