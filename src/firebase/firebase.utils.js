import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDUH_G_xZgCXnpS_r5uxLvAehU_wyiCI7c",
    authDomain: "crwn-db-8bd44.firebaseapp.com",
    databaseURL: "https://crwn-db-8bd44.firebaseio.com",
    projectId: "crwn-db-8bd44",
    storageBucket: "crwn-db-8bd44.appspot.com",
    messagingSenderId: "816440173654",
    appId: "1:816440173654:web:b8b81b9314bec3606a07f7",
    measurementId: "G-4V3VH2V08H"
  };

firebase.initializeApp(config)

export const auth = firebase.auth()

export const createCreateUserProfileDocument = async (userAuth,additionalData) =>  {
  if(!userAuth) return ;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists){
    const {displayName,email} = userAuth
    const createdAt = new Date()

    console.log(displayName,email)

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return userRef
}

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({prompt : 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;