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

let username = email.split("@")[0];
localStorage.setItem("studentName", username);
window.location.href="dashboard.html";

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
