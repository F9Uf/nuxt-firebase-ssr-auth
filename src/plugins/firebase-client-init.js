import * as firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/firebase-firestore'

var config = {
    apiKey: "AIzaSyAy_dQJBUU8ddTOvx1v2gKN5pIvp5dO9h4",
    authDomain: "calumoz-e3ed2.firebaseapp.com",
    databaseURL: "https://calumoz-e3ed2.firebaseio.com",
    projectId: "calumoz-e3ed2",
    storageBucket: "calumoz-e3ed2.appspot.com",
    messagingSenderId: "622848053352"
  }

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
export const Auth = firebase.auth();