import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyDHl5Wk9A5Wk-T5h2NFdtk6vGDcSORDh9U",
  authDomain: "losch-todo-app.firebaseapp.com",
  databaseURL: "https://losch-todo-app.firebaseio.com",
  storageBucket: "losch-todo-app.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref()

firebaseRef.set({
  app: {
    name: "Todo App",
    version: 2.0
  },
  isRunning: true,
  user: {
    name: "Michael",
    age: 24
  },

})


var todosRef = firebaseRef.child('todos')

todosRef.on('child_added', (snapshot) => {
  console.log('added', snapshot.key, snapshot.val());
})

todosRef.push({
  task: 'swim'
})
todosRef.push({
  task: 'run'
})
