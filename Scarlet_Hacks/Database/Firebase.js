import * as firebase from 'firebase';

class Firebase{
    static initialise(){
        firebase.initializeApp({
            apiKey: "AIzaSyADlDfuQUMEmPIbCFI6WicHcnrcJn90VHw",
            authDomain: "byft-5696d.firebaseapp.com",
            databaseURL: "https://byft-5696d.firebaseio.com",
            projectId: "byft-5696d",
            storageBucket: "byft-5696d.appspot.com",
            messagingSenderId: "843201687842"
        });
    }
}

module.exports = Firebase;