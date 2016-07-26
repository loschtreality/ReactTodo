import firebase from 'firebase'

try {
  var config = {
    apiKey: "AIzaSyDHl5Wk9A5Wk-T5h2NFdtk6vGDcSORDh9U",
    authDomain: "losch-todo-app.firebaseapp.com",
    databaseURL: "https://losch-todo-app.firebaseio.com",
    storageBucket: "losch-todo-app.appspot.com",
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref()
export default firebase
