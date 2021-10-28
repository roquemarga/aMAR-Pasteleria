import firebase from "firebase"
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyChUQFsRnRxWsERzmyYVcofne-V-UxgPXk",
    authDomain: "amar---pasteleria.firebaseapp.com",
    projectId: "amar---pasteleria",
    storageBucket: "amar---pasteleria.appspot.com",
    messagingSenderId: "359887088041",
    appId: "1:359887088041:web:a9c6cdd2b238eea27bfcb8"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}