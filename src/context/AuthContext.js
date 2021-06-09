import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../constants/firebase.config";

import { useContext, useState, useEffect, createContext } from "react";
import { useStore } from "../store/RootStore";
import { authAction } from "../graphql/actions/auth.action";

const myApp = firebase.initializeApp(firebaseConfig);
const auth = myApp.auth();

const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const { userStore } = useStore();

  const signin = async (type) => {
    try {
      let result;
      if (type === "google") {
        result = await firebase.auth().signInWithPopup(providerGoogle);
      } else if (type === "facebook") {
        result = await firebase.auth().signInWithPopup(providerFacebook);
      }
      let token = await result?.user?.getIdToken();
      if (!token) return false;
      let authData = await authAction(token);
      if (!authData) return false;
      localStorage.setItem("token", authData.token);
      userStore.setUser(authData.user);

      return result;
    } catch (e) {
      console.log("Firebase Authentication Error", e);
    }
  };
  const signout = () => {
    localStorage.removeItem("token");
    userStore.setUser(null);
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, [currentUser]);

  const value = {
    currentUser,
    signin,
    signout,
    loading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
