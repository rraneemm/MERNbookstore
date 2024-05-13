// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// require("dotenv").config();
// Your web app's Firebase configuration
// let app;
// let firebaseConfig;
// fetch("/api/environment")
//   .then((response) => response.json())
//   .then((data) => {
//     firebaseConfig = {
//       apiKey: data.apiKey,
//       authDomain: data.authDomain,
//       projectId: data.projectId,
//       storageBucket: data.storageBucket,
//       messagingSenderId: data.messagingSenderId,
//       appId: data.appId,
//     };
//     // Initialize Firebase

//     return firebaseConfig;
//   });
// export { firebaseConfig };

const app = async () => {
  const response = (
    await fetch("http://localhost:5000/api/environment")
  ).json();
  const body = response.body;
  const firebaseConfig = {
    apiKey: body.apiKey,
    authDomain: body.authDomain,
    projectId: body.projectId,
    storageBucket: body.storageBucket,
    messagingSenderId: body.messagingSenderId,
    appId: body.appId,
  };
  console.log(firebaseConfig);
  return initializeApp(firebaseConfig);
};
const appInstance = await app();
// inside braces = needs return
// it is better to use async await instead of a promise
// + it resolves whether to know it is inside or outside the chain

// export { app };
export default appInstance;
