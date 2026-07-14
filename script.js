function showMessage() {
    window.location.href = "login.html";
}
let score = 0;

function checkAnswer() {

    let ans = document.getElementById("correct");

    if (ans.checked) {
        score = score + 1;
        document.getElementById("result").innerHTML = "✅ Correct Answer";
    } else {
        document.getElementById("result").innerHTML = "❌ Wrong Answer";
    }

    document.getElementById("score").innerHTML = "Score : " + score;
}

function login() {

let email = document.getElementById("email").value;

let password = document.getElementById("password").value;

if(email=="" || password==""){

document.getElementById("error").innerHTML = "Please enter Email and Password";
}else{

let savedEmail = localStorage.getItem("studentEmail");

if(email == savedEmail){

let username = email.split("@")[0];
localStorage.setItem("studentName", username);

window.location.href="dashboard.html";

}else{

document.getElementById("error").innerHTML = "Account not found";

}

}

}

function showPassword() {

let password = document.getElementById("password");

if(password.type=="password"){
    password.type="text";
}else{
    password.type="password";
}

}
function logout() {

localStorage.removeItem("studentName");

window.location.href = "index.html";

}
function signup() {

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(name=="" || email=="" || password==""){

alert("Please fill all fields");

}else{

localStorage.setItem("studentName", name);
localStorage.setItem("studentEmail", email);

alert("Account Created Successfully!");

window.location.href="login.html";

}

}
