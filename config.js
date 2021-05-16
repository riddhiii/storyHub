import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDLlNFo7Za7R8JYWAUyXvaZL5xZrhZ8FjE",
  authDomain: "bedtime-stories-dc37b.firebaseapp.com",
  projectId: "bedtime-stories-dc37b",
  storageBucket: "bedtime-stories-dc37b.appspot.com",
  messagingSenderId: "886754952171",
  appId: "1:886754952171:web:572e01821927cd08ac4fae"
};
firebase.initializeApp(firebaseConfig);
 export default firebase.firestore();