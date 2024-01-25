

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDzGmJWjlwxgYMXssIKQ4BBL7ahbxmtj9I",
  authDomain: "one-stop-login-45f70.firebaseapp.com",
  databaseURL: "https://one-stop-login-45f70-default-rtdb.firebaseio.com",
  projectId: "one-stop-login-45f70",
  storageBucket: "one-stop-login-45f70.appspot.com",
  messagingSenderId: "376807736737",
  appId: "1:376807736737:web:0c25a0386a1d0a86af37e0",
  measurementId: "G-92WXF3L15V",
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

let emaili = document.getElementById('loginp');
let passi = document.getElementById('passinp');
let formi = document.getElementById('mainforms');
let namei = document.getElementById('naming');
let datei = document.getElementById('dateinp');




let RegisterUser = evt => {
  evt.preventDefault();

  createUserWithEmailAndPassword(auth, emaili.value, passi.value)
  .then((credentials) => {

    console.log ("val" ,emaili.value , passi.value , namei.value , datei.value)
    set(ref(db, 'UserAuthList/' + credentials.user.uid),{
      Email: emaili.value ,
      Name: namei.value ,
      DOB: datei.value, 
      Password: passi.value,
    })


     
    function load(){
      console.log('sucess')
    }
   window.location.href = "login.html";
   
  })
  .catch((error) =>{
      alert(error.message);
      console.log(error.code);
      console.log(error.message);
  })
}

formi.addEventListener('submit', RegisterUser);

function loadings(){
  console.log('sucess'
  )}


