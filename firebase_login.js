import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  
  
  const firebaseConfig = {
    apiKey: "AIzaSyDzGmJWjlwxgYMXssIKQ4BBL7ahbxmtj9I",
    authDomain: "one-stop-login-45f70.firebaseapp.com",
    databaseURL: "https://one-stop-login-45f70-default-rtdb.firebaseio.com",
    projectId: "one-stop-login-45f70",
    storageBucket: "one-stop-login-45f70.appspot.com",
    messagingSenderId: "376807736737",
    appId: "1:376807736737:web:0c25a0386a1d0a86af37e0",
    measurementId: "G-92WXF3L15V"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const auth = getAuth();
  const dbref = ref(db);

let emailit = document.getElementById('emailinp');
let passit = document.getElementById('passwordinp');
let formit = document.getElementById('mainform');

let SignInUser = evt => {
    evt.preventDefault();

    signInWithEmailAndPassword(auth, emailit.value, passit.value)
    .then((userCredential) => {
      const user = userCredential.user;
      get(child(dbref,'UserAuthList/'+ userCredential.user.uid))
      .then((sanpshot)=>{

        if(sanpshot.exists){

          sessionStorage.setItem("user-info",JSON.stringify({
            Name: sanpshot.val().Name
          }))
          sessionStorage.setItem("user-creds", JSON.stringify(userCredential.user));
          window.location,href='../index.html';
        }
        console.log("user-creds")
      })
      window.location = 'index.html'

    })
    .catch((error) =>{
        alert(error.message);
        console.log(error.code)
        console.log(error.message)
    })
}

formit.addEventListener('submit' , SignInUser);