import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyCIC7I7pmRTYHlti6NG6WQsFqtItGtcLfw',
    authDomain: 'coffee-c6d4c.firebaseapp.com',
    databaseURL: 'https://coffee-c6d4c.firebaseio.com',
    projectId: 'coffee-c6d4c',
    storageBucket: 'coffee-c6d4c.appspot.com',
    messagingSenderId: '644211890125',
    appId: '1:644211890125:web:5a9c581ceef3c193265684',
    measurementId: 'G-8HSX7Z480Y',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
