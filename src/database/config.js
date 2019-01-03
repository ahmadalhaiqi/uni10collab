import * as firebase from "firebase/app";
import "firebase/database";

var config = {
  apiKey: "AIzaSyAOKeVLKmtxW2lMouFv2_2CS2bYiiAZtXc",
  authDomain: "uni10collab.firebaseapp.com",
  databaseURL: "https://uni10collab.firebaseio.com",
  projectId: "uni10collab",
  storageBucket: "uni10collab.appspot.com",
  messagingSenderId: "338067016788"
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };
