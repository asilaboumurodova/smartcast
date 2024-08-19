/* import { initializeApp } from "firebase/app";
import { getMessaging  } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyB7umzVfBiWUV1suvuST3jEuiOuOeEcrPw",
  authDomain: "smartcast-678e5.firebaseapp.com",
  databaseURL:
    "https://smartcast-678e5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smartcast-678e5",
  storageBucket: "smartcast-678e5.appspot.com",
  messagingSenderId: "309258549867",
  appId: "1:309258549867:web:70a1d7123311a8ca178f2e",
  measurementId: "G-N453E2DC4S",
};


export const appFB = initializeApp(firebaseConfig);
export const messaging = getMessaging(appFB);

export function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      
    } else {
      console.log("rejected");
    }
  });
}
requestPermission();
 */