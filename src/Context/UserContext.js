import React, { useEffect, useState } from "react";
import AuthContext from "./Context";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import app from "../Firebase/Firebase.init";



const auth = getAuth(app);
const provider =  new GoogleAuthProvider()


const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const crateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name, url) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    })
      .then(() => {})
      .catch((error) => {});
  };
  const singoutUser = () => {
    setLoading(true);
    localStorage.removeItem('token');
   return signOut(auth)
  };

  const googleLogin =  ()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)

  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ loginUser, crateUser, updateUser , googleLogin,singoutUser , user,loading,singoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
