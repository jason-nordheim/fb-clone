import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDNKRyLvyQzzCwOa9HqbWUSQZJ6tAYnrlM",
  authDomain: "fb-clone-alpha.firebaseapp.com",
  databaseURL: "https://fb-clone-alpha.firebaseio.com",
  projectId: "fb-clone-alpha",
  storageBucket: "fb-clone-alpha.appspot.com",
  messagingSenderId: "999427561555",
  appId: "1:999427561555:web:56209e3d8a5d8b4bc0cea6",
  measurementId: "G-GF5WT15JKC",
};

/* Intialize firebase app with configuration */
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

/* Google Authentication Provider  */
const provider = new firebase.auth.GoogleAuthProvider() 

export { auth, provider, db }
export default db 