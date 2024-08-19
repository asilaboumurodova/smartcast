/* import UID from 'uniquebrowserid';
import { messaging } from '../messaging_init_in-sw.js'
import { getToken, onMessage  } from "firebase/messaging";


export async function start(setState) { */
  /* const mockFetch = await fetch('http://192.168.68.108:3000/template');
  const resOfMockFetch = await mockFetch.json();
  console.log(resOfMockFetch); */
  /* const res = await fetch('http://192.168.68.108:3000/device', {
    method: "POST",
    body: JSON.stringify({
      name: 'ACER34#',
      deviceId: 5769,
      fcmToken: 123
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    }
  }); */
 /*  console.log(res.json()) */
  /* const myid = new UID().completeID();
  const baseUrl = 'https://staging-api.smartcast.uz/api/devices';
   
  getToken(messaging, { vapidKey: 'BH58C4LrpApNcARH1W-jUmJyX70HrdEPqB5Q1jIcwkW3ZT4Jg4fLlCuwwOQdi4IVhiA3ftwK2t0DJV78Sl5CcUI' })
    .then(async (currentToken) => {
      if (currentToken) {
        console.log('FCM token:', currentToken);
        const res = await fetch(baseUrl, {
          method: "POST",
          body: JSON.stringify({
            name: 'ACER34#',
            deviceId: myid,
            fcmToken: currentToken
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          }
        })
        setState(await res.json())
      } else {
        console.warn('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.error('An error occurred while retrieving token. ', err);
    });
   */
  
 /*  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // ...
  }); */
/* } */