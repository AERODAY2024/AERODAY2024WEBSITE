import { initializeApp } from "firebase/app";
import {
  getFirestore,
  // ,    collection, getDocs, addDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbybyKmPDRs_ZRt2Gb-mTA1yLGt0qXRsQ",
  authDomain: "aeroday2024-b4d57.firebaseapp.com",
  projectId: "aeroday2024-b4d57",
  storageBucket: "aeroday2024-b4d57.appspot.com",
  messagingSenderId: "794131369199",
  appId: "1:794131369199:web:8b74c5398fa82a7c419f1a",
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
