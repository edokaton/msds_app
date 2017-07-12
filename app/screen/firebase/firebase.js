import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
            apiKey: "AIzaSyB2IX2zNvMT3QzjdtVaaHbe6yCQZTUxzvc",
            authDomain: "msds-12f20.firebaseapp.com",
            databaseURL: "https://msds-12f20.firebaseio.com",
            projectId: "msds-12f20",
            storageBucket: "msds-12f20.appspot.com",
            messagingSenderId: "622197350872"
        });
    }

}

module.exports = Firebase;