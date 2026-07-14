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
let savedPassword = localStorage.getItem("studentPassword");

if(email == savedEmail && password == savedPassword){

let username = email.split("@")[0];
localStorage.setItem("studentName", username);

document.getElementById("email").value = "";
document.getElementById("password").value = "";
window.location.href="dashboard.html";

}else{

document.getElementById("error").innerHTML = "Invalid Email or Password";

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
localStorage.setItem("studentPassword", password);

alert("Account Created Successfully!");

window.location.href="login.html";

}

}

function askAI() {

let question = document.getElementById("question").value.toLowerCase();

let answer = "";

if(question.includes("html")){

answer = "HTML is used to create the structure of a web page.";

}else if(question.includes("css")){

answer = "CSS is used to style web pages.";

}else if(question.includes("javascript")){

answer = "JavaScript is used to make web pages interactive.";

}else if(question.includes("python")){

answer = "Python is a powerful programming language used for AI, web development, automation, and data science.";

}else{

answer = "Sorry! I don't know the answer yet.";

}

document.getElementById("answer").innerHTML = answer;

}
