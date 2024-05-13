// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
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

// const app = async () => {
//   const [firebaseConfig, setfirebaseConfig] = useState(null);
//   useEffect(() => {
//     fetch("http://localhost:5000/api/environment")
//       .then((response) => response.json())
//       .then((data) => {
//         firebaseConfig = {
//           apiKey: data.apiKey,
//           authDomain: data.authDomain,
//           projectId: data.projectId,
//           storageBucket: data.storageBucket,
//           messagingSenderId: data.messagingSenderId,
//           appId: data.appId,
//         };
//         setfirebaseConfig(data);
//       });
//   });
// };

//   const response = (
//     await fetch("http://localhost:5000/api/environment")
//   ).json();
//   const body = response.body;
//   const firebaseConfig = {
//     apiKey: body.apiKey,
//     authDomain: body.authDomain,
//     projectId: body.projectId,
//     storageBucket: body.storageBucket,
//     messagingSenderId: body.messagingSenderId,
//     appId: body.appId,
//   };
//   console.log(firebaseConfig);
//   return initializeApp(firebaseConfig);
// };
// useEffect(() => {
//   fetch("http://localhost:5000/books")
//     .then((res) => res.json())
//     .then((data) => setBooks(data.slice(0 - 6)));
// }, []);
// const appInstance = await app();
// inside braces = needs return
// it is better to use async await instead of a promise
// + it resolves whether to know it is inside or outside the chain
//

// export { app };
// export default appInstance;
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "mern-bookstore-9efab.firebaseapp.com",
  projectId: "mern-bookstore-9efab",
  storageBucket: "mern-bookstore-9efab.appspot.com",
  messagingSenderId: "601412716548",
  appId: "1:601412716548:web:0acb8a2e64712228d20d51",
};
const app = initializeApp(firebaseConfig);

export default app;
