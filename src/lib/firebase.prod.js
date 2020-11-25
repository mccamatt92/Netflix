import Firbase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyCciphvACRClsErYIer6igQgykwhz4weaw",
    authDomain: "netflixclone-87ae9.firebaseapp.com",
    databaseURL: "https://netflixclone-87ae9.firebaseio.com",
    projectId: "netflixclone-87ae9",
    storageBucket: "netflixclone-87ae9.appspot.com",
    messagingSenderId: "751008659452",
    appId: "1:751008659452:web:264ae688f7373ca20a2479"

};

const firebase = Firbase.initializeApp(config);


export {firebase};