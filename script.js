// ===================================
// EduNova AI Ultimate v10
// script.js Part 1
// ===================================

// ---------- SIGNUP ----------

function signup(){

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let mobile=document.getElementById("mobile").value.trim();
let password=document.getElementById("password").value;
let confirm=document.getElementById("confirmPassword").value;

if(name==""||email==""||mobile==""||password==""||confirm==""){

alert("Fill all fields");
return;

}

if(password!=confirm){

alert("Passwords do not match");
return;

}

localStorage.setItem("studentName",name);
localStorage.setItem("studentEmail",email);
localStorage.setItem("studentMobile",mobile);
localStorage.setItem("studentPassword",password);

localStorage.setItem("quizScore",0);
localStorage.setItem("certificate","No");
localStorage.setItem("theme","light");

alert("Account Created Successfully");

window.location.href="login.html";

}



// ---------- LOGIN ----------

function login(){

let email=document.getElementById("email").value.trim();
let password=document.getElementById("password").value;

let savedEmail=localStorage.getItem("studentEmail");
let savedPassword=localStorage.getItem("studentPassword");

if(email===savedEmail && password===savedPassword){

alert("Login Successful");

window.location.href="dashboard.html";

}
else{

alert("Invalid Email or Password");

}

}



// ---------- LOGOUT ----------

function logout(){

if(confirm("Logout?")){

window.location.href="login.html";

}

}



// ---------- LOAD PROFILE ----------

function loadProfile(){

let name=localStorage.getItem("studentName")||"Student";
let email=localStorage.getItem("studentEmail")||"-";
let mobile=localStorage.getItem("studentMobile")||"-";

if(document.getElementById("name"))
document.getElementById("name").innerHTML=name;

if(document.getElementById("email"))
document.getElementById("email").innerHTML=email;

if(document.getElementById("mobile"))
document.getElementById("mobile").innerHTML=mobile;

}



// ---------- PROFILE PHOTO ----------

function uploadPhoto(input){

let file=input.files[0];

if(!file)return;

let reader=new FileReader();

reader.onload=function(e){

localStorage.setItem("profilePhoto",e.target.result);

if(document.getElementById("preview")){

document.getElementById("preview").src=e.target.result;

}

}

reader.readAsDataURL(file);

}

function loadPhoto(){

let photo=localStorage.getItem("profilePhoto");

if(photo && document.getElementById("preview")){

document.getElementById("preview").src=photo;

}

}



// ---------- THEME ----------

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



// ---------- AUTO LOAD ----------

window.onload=function(){

loadTheme();
loadProfile();
loadPhoto();

};


// ===================================
// EduNova AI Ultimate v10
// script.js Part 2
// AI Chat + Notes + Search
// ===================================

// ---------- AI CHAT ----------

function askAI(){

let question=document.getElementById("question").value.trim();

if(question==""){

alert("Enter your question");

return;

}

let answer="";

let q=question.toLowerCase();

if(q.includes("html")){

answer="HTML (HyperText Markup Language) is used to create the structure of web pages.";

}

else if(q.includes("css")){

answer="CSS (Cascading Style Sheets) is used for designing web pages.";

}

else if(q.includes("javascript")){

answer="JavaScript is used to make websites interactive.";

}

else if(q.includes("python")){

answer="Python is a popular programming language used in AI, ML, Data Science and Web Development.";

}

else if(q.includes("java")){

answer="Java is an object-oriented programming language.";

}

else if(q.includes("dbms")){

answer="DBMS stands for Database Management System.";

}

else if(q.includes("ai")){

answer="Artificial Intelligence enables machines to learn and make decisions.";

}

else{

answer="AI Answer Coming Soon with Google Gemini API.";

}

document.getElementById("answer").innerHTML=answer;

saveHistory(question,answer);

}



// ---------- CHAT HISTORY ----------

function saveHistory(question,answer){

let history=JSON.parse(localStorage.getItem("history"))||[];

history.push({

question:question,

answer:answer,

date:new Date().toLocaleString()

});

localStorage.setItem("history",JSON.stringify(history));

}

function showHistory(){

let history=JSON.parse(localStorage.getItem("history"))||[];

let output="";

history.forEach(function(item){

output+=

"<hr><b>Question:</b> "+item.question+

"<br><b>Answer:</b> "+item.answer+

"<br><small>"+item.date+"</small>";

});

document.getElementById("answer").innerHTML=output;

}

function clearHistory(){

localStorage.removeItem("history");

document.getElementById("answer").innerHTML="History Cleared";

}



// ---------- NOTES ----------

function showNotes(subject){

let notes="";

switch(subject){

case "html":

notes="<h2>HTML Notes</h2><p>HTML is used to build webpage structure.</p>";

break;

case "css":

notes="<h2>CSS Notes</h2><p>CSS styles web pages beautifully.</p>";

break;

case "javascript":

notes="<h2>JavaScript Notes</h2><p>JavaScript adds functionality to websites.</p>";

break;

case "python":

notes="<h2>Python Notes</h2><p>Python is easy to learn and powerful.</p>";

break;

case "dbms":

notes="<h2>DBMS Notes</h2><p>DBMS stores and manages data.</p>";

break;

default:

notes="<h2>No Notes Found</h2>";

}

document.getElementById("notes").innerHTML=notes;

}



// ---------- SEARCH NOTES ----------

function searchNotes(){

let input=document.getElementById("searchBox").value.toLowerCase();

let notes=document.getElementById("notes");

if(notes.innerText.toLowerCase().includes(input)){

notes.style.display="block";

}else{

notes.style.display="none";

}

}



// ---------- DOWNLOAD NOTES ----------

function downloadNotes(){

let text=document.getElementById("notes").innerText;

let blob=new Blob([text],{

type:"text/plain"

});

let a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download="EduNova_Notes.txt";

a.click();

}


// ===================================
// EduNova AI Ultimate v10
// script.js Part 3
// Quiz + Certificate + Progress
// ===================================

// ---------- QUIZ ----------

function checkQuiz(){

let score=0;

if(document.querySelector('input[name="q1"]:checked')?.value=="a") score+=2;
if(document.querySelector('input[name="q2"]:checked')?.value=="b") score+=2;
if(document.querySelector('input[name="q3"]:checked')?.value=="c") score+=2;
if(document.querySelector('input[name="q4"]:checked')?.value=="a") score+=2;
if(document.querySelector('input[name="q5"]:checked')?.value=="a") score+=2;

localStorage.setItem("quizScore",score);

if(score>=8){

localStorage.setItem("certificate","Yes");

}else{

localStorage.setItem("certificate","No");

}

let message="";

if(score==10){

message="🏆 Excellent Performance!";

}
else if(score>=8){

message="🥇 Very Good!";

}
else if(score>=6){

message="👍 Good Job!";

}
else if(score>=4){

message="🙂 Keep Practicing";

}
else{

message="📚 Study More";

}

document.getElementById("score").innerHTML=

"<h2>Score : "+score+"/10</h2><br>"+message;

}



// ---------- CERTIFICATE ----------

function loadCertificate(){

let name=localStorage.getItem("studentName")||"Student";

let score=localStorage.getItem("quizScore")||0;

if(document.getElementById("studentName")){

document.getElementById("studentName").innerHTML=name;

}

if(document.getElementById("studentScore")){

document.getElementById("studentScore").innerHTML=score+"/10";

}

if(document.getElementById("todayDate")){

document.getElementById("todayDate").innerHTML=

new Date().toLocaleDateString();

}

}

function printCertificate(){

window.print();

}



// ---------- PROGRESS ----------

function loadProgress(){

let score=parseInt(localStorage.getItem("quizScore"))||0;

let percent=score*10;

if(document.getElementById("progressBar")){

document.getElementById("progressBar").style.width=percent+"%";

document.getElementById("progressBar").innerHTML=percent+"%";

}

if(document.getElementById("progressMessage")){

if(percent>=90){

document.getElementById("progressMessage").innerHTML="🏆 Excellent";

}
else if(percent>=70){

document.getElementById("progressMessage").innerHTML="🥇 Great Progress";

}
else if(percent>=50){

document.getElementById("progressMessage").innerHTML="👍 Good";

}
else{

document.getElementById("progressMessage").innerHTML="📚 Keep Learning";

}

}

}



// ---------- RESET PROGRESS ----------

function resetProgress(){

if(confirm("Reset Progress?")){

localStorage.setItem("quizScore",0);

location.reload();

}

}


// ===================================
// EduNova AI Ultimate v10
// script.js Part 4 (Final)
// Leaderboard + Settings + Utilities
// ===================================


// ---------- LEADERBOARD ----------

function loadLeaderboard(){

let name=localStorage.getItem("studentName")||"Student";
let score=localStorage.getItem("quizScore")||0;

if(document.getElementById("leaderName")){

document.getElementById("leaderName").innerHTML=name;

}

if(document.getElementById("leaderScore")){

document.getElementById("leaderScore").innerHTML=score+"/10";

}

}

function refreshLeaderboard(){

location.reload();

}



// ---------- SETTINGS ----------

function saveTheme(){

let theme=document.getElementById("themeSelect").value;

localStorage.setItem("theme",theme);

if(theme=="dark"){

document.body.classList.add("dark-mode");

}
else{

document.body.classList.remove("dark-mode");

}

alert("Theme Saved");

}

function saveNotifications(){

let notify=document.getElementById("notifications").checked;

localStorage.setItem("notifications",notify);

alert("Notification Settings Saved");

}



// ---------- COPY ANSWER ----------

function copyAnswer(){

let text=document.getElementById("answer").innerText;

navigator.clipboard.writeText(text);

alert("Copied Successfully");

}



// ---------- DOWNLOAD CHAT ----------

function downloadHistory(){

let history=localStorage.getItem("history")||"No History";

let blob=new Blob([history],{type:"text/plain"});

let a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download="EduNovaAI_History.txt";

a.click();

}



// ---------- VOICE INPUT ----------

function startVoice(){

if(!("webkitSpeechRecognition" in window)){

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



// ---------- CLEAR DATA ----------

function clearData(){

if(confirm("Delete all saved data?")){

localStorage.clear();

alert("All Data Deleted");

window.location.href="login.html";

}

}



// ---------- LOADING ----------

function showLoader(){

let loader=document.getElementById("loader");

if(loader){

loader.style.display="block";

}

}

function hideLoader(){

let loader=document.getElementById("loader");

if(loader){

loader.style.display="none";

}

}



// ---------- CLOCK ----------

function startClock(){

let clock=document.getElementById("clock");

if(!clock) return;

setInterval(function(){

let now=new Date();

clock.innerHTML=now.toLocaleTimeString();

},1000);

}



// ---------- WINDOW LOAD ----------

window.addEventListener("load",function(){

loadTheme();

loadProfile();

loadPhoto();

loadCertificate();

loadProgress();

loadLeaderboard();

startClock();

});


// ===================================
// EduNova AI Ultimate v10
// script.js Part 5 (Bonus Features)
// ===================================


// ---------- DAILY STREAK ----------

function updateStreak(){

let today=new Date().toDateString();

let last=localStorage.getItem("lastLogin");

let streak=parseInt(localStorage.getItem("streak"))||0;

if(last!=today){

streak++;

localStorage.setItem("streak",streak);

localStorage.setItem("lastLogin",today);

}

if(document.getElementById("streak")){

document.getElementById("streak").innerHTML=

"🔥 "+streak+" Day Streak";

}

}



// ---------- ACHIEVEMENTS ----------

function loadAchievements(){

let score=parseInt(localStorage.getItem("quizScore"))||0;

let achievement="🏅 Beginner";

if(score>=4){

achievement="🥉 Bronze";

}

if(score>=6){

achievement="🥈 Silver";

}

if(score>=8){

achievement="🥇 Gold";

}

if(score==10){

achievement="👑 Champion";

}

if(document.getElementById("achievement")){

document.getElementById("achievement").innerHTML=achievement;

}

}



// ---------- RANDOM MOTIVATION ----------

function motivation(){

let quotes=[

"📚 Learn something new every day.",

"🚀 Success starts with consistency.",

"💡 Practice makes perfect.",

"🎯 Never stop learning.",

"🏆 Small progress is still progress.",

"🔥 Believe in yourself."

];

let random=Math.floor(Math.random()*quotes.length);

if(document.getElementById("quote")){

document.getElementById("quote").innerHTML=quotes[random];

}

}



// ---------- GREETING ----------

function greeting(){

let hour=new Date().getHours();

let text="";

if(hour<12){

text="🌞 Good Morning";

}

else if(hour<17){

text="☀ Good Afternoon";

}

else{

text="🌙 Good Evening";

}

if(document.getElementById("greeting")){

document.getElementById("greeting").innerHTML=text;

}

}



// ---------- SEARCH SUBJECT ----------

function searchSubject(){

let input=document.getElementById("subjectSearch").value.toLowerCase();

let cards=document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++){

if(cards[i].innerText.toLowerCase().includes(input)){

cards[i].style.display="block";

}

else{

cards[i].style.display="none";

}

}

}



// ---------- AUTO LOAD BONUS ----------

window.addEventListener("load",function(){

updateStreak();

loadAchievements();

motivation();

greeting();

});


// ===================================
// EduNova AI Ultimate v10
// script.js Part 6 (Final Bonus)
// ===================================


// ---------- LIVE DATE ----------

function showDate(){

let date=document.getElementById("date");

if(date){

date.innerHTML=new Date().toLocaleDateString();

}

}



// ---------- LIVE TIME ----------

function showTime(){

let time=document.getElementById("time");

if(!time) return;

setInterval(function(){

time.innerHTML=new Date().toLocaleTimeString();

},1000);

}



// ---------- VISITOR COUNTER ----------

function visitorCounter(){

let count=parseInt(localStorage.getItem("visitorCount"))||0;

count++;

localStorage.setItem("visitorCount",count);

if(document.getElementById("visitors")){

document.getElementById("visitors").innerHTML=count;

}

}



// ---------- TOTAL LOGIN ----------

function totalLogin(){

let login=parseInt(localStorage.getItem("loginCount"))||0;

login++;

localStorage.setItem("loginCount",login);

if(document.getElementById("loginCount")){

document.getElementById("loginCount").innerHTML=login;

}

}



// ---------- RANDOM FACT ----------

function randomFact(){

let facts=[

"💡 HTML was created in 1993.",

"💡 CSS stands for Cascading Style Sheets.",

"💡 JavaScript was created in just 10 days.",

"💡 Python was created by Guido van Rossum.",

"💡 AI is transforming education worldwide.",

"💡 DBMS helps manage large amounts of data.",

"💡 Practice coding every day to improve."

];

let random=Math.floor(Math.random()*facts.length);

if(document.getElementById("fact")){

document.getElementById("fact").innerHTML=facts[random];

}

}



// ---------- APP VERSION ----------

function appVersion(){

if(document.getElementById("version")){

document.getElementById("version").innerHTML=

"EduNova AI Ultimate v10.0";

}

}



// ---------- INTERNET STATUS ----------

function internetStatus(){

let status=document.getElementById("internetStatus");

if(!status) return;

if(navigator.onLine){

status.innerHTML="🟢 Online";

status.style.color="lime";

}

else{

status.innerHTML="🔴 Offline";

status.style.color="red";

}

}

window.addEventListener("online",internetStatus);

window.addEventListener("offline",internetStatus);



// ---------- AUTO START ----------

window.addEventListener("load",function(){

showDate();

showTime();

visitorCounter();

totalLogin();

randomFact();

appVersion();

internetStatus();

});
