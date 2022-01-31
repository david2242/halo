// import {db} from "firebase-init.js"
// const { initializeApp } = require('firebase/app');
// const { getFirestore, addDoc, collection } = require('firebase/firestore');
// var json = require('data.json');

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";

import * as data from "./data.json";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "c:/doku/own/halo/node_modules/firebase/app";
// import { getDoc, getDocs, deleteDoc, doc, collection, addDoc, updateDoc, setDoc, query, getFirestore } from 'c:/doku/own/halo/node_modules/firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBogLfVcHGpisc-2iDqHMFjvyr1MIhMigo",
  authDomain: "halo-60249.firebaseapp.com",
  projectId: "halo-60249",
  storageBucket: "halo-60249.appspot.com",
  messagingSenderId: "124850108802",
  appId: "1:124850108802:web:2847891383bfc9fa92f79b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

console.log('Firebase initialized');

data.default.clients.forEach(async client => {
    const clientRef = await addDoc(collection(db, 'clients'), client);
    console.log(`Created client with ID ${client.id}`);
});

data.default.caregivers.forEach(async caregiver => {
    const caregiverRef = await addDoc(collection(db, 'caregivers'), caregiver);
    console.log(`Caregiver client with ID ${caregiver.id}`);
});
