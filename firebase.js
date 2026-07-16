// ===================================
// EduNova AI Ultimate v10
// firebase.js
// ===================================

// Firebase SDK (index.html मध्ये add करा)

/*

<script type="module" src="firebase.js"></script>

*/


import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {

getAuth,

createUserWithEmailAndPassword,

signInWithEmailAndPassword,

signOut

}

from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

import {

getFirestore,

doc,

setDoc,

getDoc

}

from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";



// =====================

// YOUR FIREBASE CONFIG

// =====================

const firebaseConfig={

apiKey:"YOUR_API_KEY",

authDomain:"YOUR_PROJECT.firebaseapp.com",

projectId:"YOUR_PROJECT_ID",

storageBucket:"YOUR_PROJECT.appspot.com",

messagingSenderId:"YOUR_SENDER_ID",

appId:"YOUR_APP_ID"

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

window.firebaseLogin=async function(){

let email=document.getElementById("email").value;

let password=document.getElementById("password").value;

try{

await signInWithEmailAndPassword(

auth,

email,

password

);

alert("Login Successful");

window.location="dashboard.html";

}

catch(error){

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
