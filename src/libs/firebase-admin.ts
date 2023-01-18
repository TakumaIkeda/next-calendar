import { initializeApp } from "firebase-admin";
import { applicationDefault } from "firebase-admin/app";

const firebaseAdmin = initializeApp({
  credential: applicationDefault(),
  databaseURL: "https://calendar-app-9cb0b.firebaseio.com",
});

export default firebaseAdmin;
