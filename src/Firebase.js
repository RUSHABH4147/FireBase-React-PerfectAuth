import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyBgO4ZB01HwwRhciMTSdYYq7inmfIprMr4",
        authDomain: "auth-test-83beb.firebaseapp.com",
        projectId: "auth-test-83beb",
        storageBucket: "auth-test-83beb.appspot.com",
        messagingSenderId: "573739505262",
        appId: "1:573739505262:web:d5e908652d3ec29add787f"
      }
)
export const auth = app.auth();
export default app