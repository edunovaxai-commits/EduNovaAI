// ==============================
// EduNova AI - script.js
// Part 1
// Login, Signup, Profile & Theme
// ==============================

// ---------- SIGNUP ----------

function signup(){

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let mobile=document.getElementById("mobile").value.trim();
let password=document.getElementById("password").value;

if(name=="" || email=="" || mobile=="" || password==""){

alert("Please fill all fields.");
return;

}

localStorage.setItem("studentName",name);
localStorage.setItem("studentEmail",email);
localStorage.setItem("studentMobile",mobile);
localStorage.setItem("studentPassword",password);

alert("Account Created Successfully!");

window.location.href="login.html";

}



// ---------- LOGIN ----------

function login(){

let email=document.getElementById("email").value.trim();
let password=document.getElementById("password").value;

let savedEmail=localStorage.getItem("studentEmail");
let savedPassword=localStorage.getItem("studentPassword");

if(email==savedEmail && password==savedPassword){

alert("Login Successful");

window.location.href="dashboard.html";

}else{

alert("Invalid Email or Password");

}

}



// ---------- LOGOUT ----------

function logout(){

if(confirm("Do you want to logout?")){

window.location.href="login.html";

}

}



// ---------- EDIT PROFILE ----------

function saveProfile(){

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let mobile=document.getElementById("mobile").value.trim();

if(name=="" || email=="" || mobile==""){

alert("Please fill all fields.");

return;

}

localStorage.setItem("studentName",name);
localStorage.setItem("studentEmail",email);
localStorage.setItem("studentMobile",mobile);

alert("Profile Updated Successfully!");

window.location.href="profile.html";

}



// ---------- LOAD PROFILE ----------

function loadProfile(){

if(document.getElementById("name")){

document.getElementById("name").innerHTML=
localStorage.getItem("studentName") || "Student";

}

if(document.getElementById("email")){

document.getElementById("email").innerHTML=
localStorage.getItem("studentEmail") || "-";

}

if(document.getElementById("mobile")){

document.getElementById("mobile").innerHTML=
localStorage.getItem("studentMobile") || "-";

}

}



// ---------- PROFILE PHOTO ----------

function uploadPhoto(input){

let file=input.files[0];

if(!file) return;

let reader=new FileReader();

reader.onload=function(e){

localStorage.setItem("profilePhoto",e.target.result);

let img=document.getElementById("preview");

if(img){

img.src=e.target.result;

}

}

reader.readAsDataURL(file);

}

function loadPhoto(){

let img=document.getElementById("preview");

let photo=localStorage.getItem("profilePhoto");

if(img && photo){

img.src=photo;

}

}



// ---------- DARK MODE ----------

function toggleTheme(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

}else{

localStorage.setItem("theme","light");

}

}

function loadTheme(){

if(localStorage.getItem("theme")=="dark"){

document.body.classList.add("dark-mode");

}

}



// ---------- WINDOW LOAD ----------

window.onload=function(){

loadTheme();

loadProfile();

loadPhoto();

};



// ==============================
// EduNova AI - script.js
// Part 2
// AI Chat, Notes, Search, Quiz
// ==============================


// ---------- AI CHAT ----------

function askAI(){

let question=document.getElementById("question").value.toLowerCase().trim();

let answer="";

if(question==""){

answer="Please enter your question.";

}

else if(question.includes("html")){

answer="HTML (HyperText Markup Language) is used to create the structure of web pages.";

}

else if(question.includes("css")){

answer="CSS (Cascading Style Sheets) is used to design and style web pages.";

}

else if(question.includes("javascript") || question.includes("js")){

answer="JavaScript makes websites interactive using DOM, Events and APIs.";

}

else if(question.includes("python")){

answer="Python is a powerful programming language used in AI, Data Science, Automation and Web Development.";

}

else if(question.includes("java")){

answer="Java is an object-oriented programming language used for Android and Enterprise applications.";

}

else if(question.includes("dbms")){

answer="DBMS is software used to store, organize and manage databases.";

}

else if(question.includes("computer")){

answer="A computer is an electronic device that accepts input, processes data and produces output.";

}

else if(question.includes("ai")){

answer="Artificial Intelligence enables machines to learn and make decisions like humans.";

}

else if(question.includes("+") || question.includes("-") || question.includes("*") || question.includes("/")){

try{

answer="Answer : "+eval(question);

}catch{

answer="Invalid Math Expression.";

}

}

else{

answer="Sorry! I don't know this answer yet. Gemini AI integration will answer this in the next version.";

}

document.getElementById("answer").innerHTML=answer;

saveChat(question,answer);

}



// ---------- CHAT HISTORY ----------

function saveChat(question,answer){

let chats=JSON.parse(localStorage.getItem("chatHistory")) || [];

chats.push({

question:question,

answer:answer,

time:new Date().toLocaleString()

});

localStorage.setItem("chatHistory",JSON.stringify(chats));

}



function showHistory(){

let chats=JSON.parse(localStorage.getItem("chatHistory")) || [];

let output="";

if(chats.length==0){

output="No Chat History Found.";

}

else{

for(let i=0;i<chats.length;i++){

output+=

"<hr><b>Q:</b> "+chats[i].question+

"<br><b>A:</b> "+chats[i].answer+

"<br><small>"+chats[i].time+"</small>";

}

}

document.getElementById("answer").innerHTML=output;

}



function clearChat(){

document.getElementById("question").value="";

document.getElementById("answer").innerHTML="Waiting for your question...";

}



// ---------- NOTES ----------

function showNotes(subject){

let notes="";

switch(subject){

case "html":

notes="<h2>HTML</h2><p>HTML creates the structure of web pages.</p>";

break;

case "css":

notes="<h2>CSS</h2><p>CSS is used for styling websites.</p>";

break;

case "javascript":

notes="<h2>JavaScript</h2><p>JavaScript makes websites interactive.</p>";

break;

case "python":

notes="<h2>Python</h2><p>Python is used in AI, ML and Data Science.</p>";

break;

case "dbms":

notes="<h2>DBMS</h2><p>DBMS manages databases efficiently.</p>";

break;

default:

notes="<h2>Notes</h2><p>Notes not available.</p>";

}

document.getElementById("notes").innerHTML=notes;

}



// ---------- SEARCH NOTES ----------

function searchNotes(){

let input=document.getElementById("searchBox").value.toLowerCase();

let notes=document.getElementById("notes");

if(input==""){

notes.style.display="block";

return;

}

if(notes.innerText.toLowerCase().includes(input)){

notes.style.display="block";

}else{

notes.style.display="none";

}

}



// ---------- QUIZ ----------

function checkQuiz(){

let score=0;

if(document.querySelector('input[name="q1"]:checked')?.value=="a") score++;

if(document.querySelector('input[name="q2"]:checked')?.value=="b") score++;

if(document.querySelector('input[name="q3"]:checked')?.value=="c") score++;

localStorage.setItem("quizScore",score);

let msg="";

if(score==3){

msg="🏆 Excellent!";

}

else if(score==2){

msg="👍 Good Job!";

}

else if(score==1){

msg="🙂 Keep Practicing.";

}

else{

msg="📚 Study More.";

}

document.getElementById("score").innerHTML=

"Your Score : "+score+"/3<br>"+msg;

}



// ==============================
// EduNova AI - script.js
// Part 3
// Certificate, Progress,
// Leaderboard & Utilities
// ==============================

// ---------- CERTIFICATE ----------

function loadCertificate(){

let name=localStorage.getItem("studentName") || "Student";

let score=localStorage.getItem("quizScore") || "0";

if(document.getElementById("studentName")){

document.getElementById("studentName").innerHTML=name;

}

if(document.getElementById("studentScore")){

document.getElementById("studentScore").innerHTML="Score : "+score+"/3";

}

}

function printCertificate(){

window.print();

}



// ---------- PROGRESS ----------

function loadProgress(){

let name=localStorage.getItem("studentName") || "Student";

let score=localStorage.getItem("quizScore") || "0";

if(document.getElementById("progressName")){

document.getElementById("progressName").innerHTML=name;

}

if(document.getElementById("progressScore")){

document.getElementById("progressScore").innerHTML=score+"/3";

}

let percent=(score/3)*100;

if(document.getElementById("progressBar")){

document.getElementById("progressBar").style.width=percent+"%";

document.getElementById("progressBar").innerHTML=Math.round(percent)+"%";

}

}



// ---------- LEADERBOARD ----------

function loadLeaderboard(){

let name=localStorage.getItem("studentName") || "Student";

let score=localStorage.getItem("quizScore") || "0";

if(document.getElementById("leaderName")){

document.getElementById("leaderName").innerHTML=name;

}

if(document.getElementById("leaderScore")){

document.getElementById("leaderScore").innerHTML=score+"/3";

}

}



// ---------- COPY ANSWER ----------

function copyAnswer(){

let text=document.getElementById("answer").innerText;

navigator.clipboard.writeText(text);

alert("Answer Copied Successfully.");

}



// ---------- DOWNLOAD CHAT ----------

function downloadHistory(){

let chats=localStorage.getItem("chatHistory") || "No History";

let blob=new Blob([chats],{type:"text/plain"});

let a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download="EduNovaAI_ChatHistory.txt";

a.click();

}



// ---------- VOICE INPUT ----------

function startVoice(){

if(!('webkitSpeechRecognition' in window)){

alert("Voice Recognition Not Supported");

return;

}

let recognition=new webkitSpeechRecognition();

recognition.lang="en-IN";

recognition.onresult=function(event){

document.getElementById("question").value=

event.results[0][0].transcript;

};

recognition.start();

}



// ---------- SETTINGS ----------

function saveSettings(){

let theme=document.getElementById("themeSelect").value;

localStorage.setItem("theme",theme);

alert("Settings Saved");

location.reload();

}



// ---------- PREVIOUS YEAR PAPERS ----------

function openPaper(subject){

alert(subject+" Papers will be available soon.");

}



// ---------- ABOUT ----------

function aboutApp(){

alert(

"EduNova AI\n\nVersion : 5.0\nDeveloped for Smart Learning."

);

}
