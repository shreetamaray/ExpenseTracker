import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwpRfrAIqUCN5x4j8uY3iryEM6DMIOKSE",
    authDomain: "my-expense-tracker-806bd.firebaseapp.com",
    projectId: "my-expense-tracker-806bd",
    storageBucket: "my-expense-tracker-806bd.appspot.com",
    messagingSenderId: "1091640254074",
    appId: "1:1091640254074:web:7885ba10898df3a302e5c3"
};

const firebaseApp = initializeApp(firebaseConfig);
const fireDb = getFirestore(firebaseApp);

export {firebaseApp, fireDb};

