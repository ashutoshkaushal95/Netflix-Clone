import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAvadTR9nfDjunh0TK-lnGSIHEA579Ws9I",
    authDomain: "netflix-clone-b5197.firebaseapp.com",
    projectId: "netflix-clone-b5197",
    storageBucket: "netflix-clone-b5197.appspot.com",
    messagingSenderId: "291804574844",
    appId: "1:291804574844:web:73a55868db40d0053485f9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;