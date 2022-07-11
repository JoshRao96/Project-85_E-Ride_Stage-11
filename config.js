import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBEVULfEV1C_iA5TXKS73NDpaNzYKEUd5g",
  authDomain: "e-ride-stage-3-phase-1.firebaseapp.com",
  projectId: "e-ride-stage-3-phase-1",
  storageBucket: "e-ride-stage-3-phase-1.appspot.com",
  messagingSenderId: "895328451134",
  appId: "1:895328451134:web:27326f88e6a777657d2f6f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
