// ===================================
// EduNova AI Ultimate v10
// firebase.js
// ===================================

// Firebase SDK (index.html मध्ये add करा)

/*

<script type="module" src="firebase.js"></script>

*/


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBv6tzSmI1ksTMdXo4FffSuU6WuUN-qeHg",
  authDomain: "edunova-ai-c1c3e.firebaseapp.com",
  projectId: "edunova-ai-c1c3e",
  storageBucket: "edunova-ai-c1c3e.firebasestorage.app",
  messagingSenderId: "545878851507",
  appId: "1:545878851507:web:5abbcbe85be52f17b9d5c6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.auth = auth;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.signOut = signOut;

// =====================

// YOUR FIREBASE CONFIG

// =====================

const firebaseConfig = {
  apiKey: "AIzaSyBv6tzSmI1ksTMdXo4FffSuU6WuUN-qeHg",
  authDomain: "edunova-ai-c1c3e.firebaseapp.com",
  projectId: "edunova-ai-c1c3e",
  storageBucket: "edunova-ai-c1c3e.firebasestorage.app",
  messagingSenderId: "545878851507",
  appId: "1:545878851507:web:5abbcbe85be52f17b9d5c6",
  measurementId: "G-9MVWG5BD8S"
};



// =====================

const app=initializeApp(firebaseConfig);

const auth=getAuth(app);

const db=getFirestore(app);



// =====================

// SIGNUP

// =====================

window.firebaseSignup=async function(){

let name=document.getElementById("name").value;

let email=document.getElementById("email").value;

let mobile=document.getElementById("mobile").value;

let password=document.getElementById("password").value;

try{

const userCredential=

await createUserWithEmailAndPassword(

auth,

email,

password

);

await setDoc(

doc(db,"students",userCredential.user.uid),

{

name:name,

email:email,

mobile:mobile,

quizScore:0

}

);

alert("Signup Successful");

window.location="login.html";

}

catch(error){

alert(error.message);

}

}



// =====================

// LOGIN

// =====================

window.firebaseLogin = async function () {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    if(email==="" || password===""){
        alert("Please enter Email and Password");
        return;
    }

    try{

        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        localStorage.setItem("uid", userCredential.user.uid);

        alert("✅ Login Successful");

        window.location.href="dashboard.html";

    }catch(error){

        alert(error.message);

    }

}



// =====================

// LOAD PROFILE

// =====================

window.loadFirebaseProfile=async function(uid){

const ref=doc(db,"students",uid);

const snap=await getDoc(ref);

if(snap.exists()){

let data=snap.data();

document.getElementById("name").innerHTML=data.name;

document.getElementById("email").innerHTML=data.email;

document.getElementById("mobile").innerHTML=data.mobile;

}

}



// =====================

// LOGOUT

// =====================

window.firebaseLogout=function(){

signOut(auth);

window.location="login.html";

}
