const firebaseConfig = {
    apiKey: "AIzaSyBkaXaYvRsvRDvhd3qcjKTckzcyl7RUNV0",
    authDomain: "quitter-5d49b.firebaseapp.com",
    databaseURL: "https://quitter-5d49b-default-rtdb.firebaseio.com",
    projectId: "quitter-5d49b",
    storageBucket: "quitter-5d49b.appspot.com",
    messagingSenderId: "420675946704",
    appId: "1:420675946704:web:63cf23b2c16d0e0b2076d5",
    measurementId: "G-WQH7WG97ZN"};
    firebase.initializeApp(firebaseConfig);
  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({"Name": "test"})};
