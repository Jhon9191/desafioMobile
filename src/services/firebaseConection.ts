import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAaASDuBeKfy5sr4k6af3Bp3MgHcyOPymI",
  authDomain: "desafiomobile-fedf5.firebaseapp.com",
  projectId: "desafiomobile-fedf5",
  storageBucket: "desafiomobile-fedf5.appspot.com",
  messagingSenderId: "639190168952",
  appId: "1:639190168952:web:5fc124ed01554eb75f848d"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase;