import { initializeApp } from "firebase/app";
import {
  getFirestore,
  // ,    collection, getDocs, addDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDh7c85Y0gRlOLnnZK6ur3T_1Yi3NVDTxI",
  authDomain: "aeroday2024website-902f9.firebaseapp.com",
  projectId: "aeroday2024website-902f9",
  storageBucket: "aeroday2024website-902f9.appspot.com",
  messagingSenderId: "983947344245",
  appId: "1:983947344245:web:af0889c26c18f84260fb3c",
};

initializeApp(firebaseConfig);

// init services
const db = getFirestore();

export { db };

// // collection ref
// const colRef = collection(db, "ContactRequests");

// // get collection data
// getDocs(colRef)
//   .then((snapshot) => {
//     // console.log(snapshot.docs)
//     let contactRequests = [];
//     snapshot.docs.forEach((doc) => {
//       contactRequests.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(contactRequests);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// // add document to the collection
// addDoc(colRef, {
//   name: "John Doe",
//   email: "john" + Math.random() + "@gmail.com",
//   phone: "1234567890",
//   message: "Hello World",
// })
//   .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
