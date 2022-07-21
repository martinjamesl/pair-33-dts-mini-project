// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0_xGFAP_uo4isA690qBp1dHOkK_62X-Q",
  authDomain: "pair-33-dts-mini-project.firebaseapp.com",
  projectId: "pair-33-dts-mini-project",
  storageBucket: "pair-33-dts-mini-project.appspot.com",
  messagingSenderId: "278547278641",
  appId: "1:278547278641:web:8727d1bfb21ccc1922de10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const onHandleSignUpWithEmailAndPassword = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      const navigate = useNavigate();
      navigate("/");
    })
    .catch((error) => {
      const errorCode = error.code;

      if (errorCode === "auth/wrong-password") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "wrong password!",
        });
      }
      if (errorCode === "auth/user-not-found") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "user not found!",
        });
      }
    });
};

const onHandleSignInWithEmailAndPassword = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      const navigate = useNavigate();
      navigate("/");
    })
    .catch((error) => {
      const errorCode = error.code;

      if (errorCode === "auth/wrong-password") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "wrong password!",
        });
      }
      if (errorCode === "auth/user-not-found") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "user not found!",
        });
      }
    });
};

const onHandleResetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email)
    .then((res) => console.log(res))
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    });
};

const onHandleSignOut = async () => {
  await signOut(auth)
    .then((res) => {
      console.log("success logout", res);
    })
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    });
};

export {
  auth,
  onHandleSignInWithEmailAndPassword,
  onHandleSignUpWithEmailAndPassword,
  onHandleResetPassword,
  onHandleSignOut,
};
