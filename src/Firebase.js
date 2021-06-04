import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCc-U31J2HPDMAVdGIvjvnbkCFfh8Je6g0",
  authDomain: "auth-test-d7be6.firebaseapp.com",
  databaseURL: "https://auth-test.firebaseio.com",
  projectId: "auth-test-d7be6",
  storageBucket: "auth-test-d7be6.appspot.com",
  messagingSenderId: "934665216009",
  appId: "1:934665216009:web:49600529770866660058d8",
});
export const auth = app.auth();
export default app;
