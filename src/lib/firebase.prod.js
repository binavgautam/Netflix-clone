import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAk7o-4rkwAXBGU5y7PGADEy9fdAVwaruE",
  authDomain: "netflix-clone-ef52a.firebaseapp.com",
  projectId: "netflix-clone-ef52a",
  storageBucket: "netflix-clone-ef52a.appspot.com",
  messagingSenderId: "310955790172",
  appId: "1:310955790172:web:996f8bc1d9bfcab3063b99",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
