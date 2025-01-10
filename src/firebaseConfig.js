import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZu4BxHHRVOKJtMMSDTeDEi-PXgssF9Qg",
  authDomain: "ecommerce-d01c7.firebaseapp.com",
  projectId: "ecommerce-d01c7",
  storageBucket: "ecommerce-d01c7.firebasestorage.app",
  messagingSenderId: "917665898675",
  appId: "1:917665898675:web:d753d684310aa9c31850c6"
};
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
