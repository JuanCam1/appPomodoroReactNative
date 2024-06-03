import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyApYfZUuBW9LcTIR5IhNKEIw1LadnvNv_Y',
  authDomain: 'app-task-rn.firebaseapp.com',
  projectId: 'app-task-rn',
  storageBucket: 'app-task-rn.appspot.com',
  messagingSenderId: '296550246039',
  appId: '1:296550246039:web:00768849abc18a42ec6bd2',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
