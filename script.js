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
}else if(question.includes("html")){

answer = "HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages. It defines elements such as headings, paragraphs, images, links, tables, forms, and more.";

}

 }else if(question.includes("css")){

answer = "CSS (Cascading Style Sheets) is used to style HTML pages. It controls colors, fonts, spacing, layouts, animations, and responsive design to make websites attractive.";

}

}else if(question.includes("c")){

answer = "C is a fast and powerful programming language used for system programming, operating systems, and embedded systems.";
}else if(question.includes("data science")){

answer = "Data Science is the process of collecting, analyzing, and interpreting data to make better decisions using statistics, machine learning, and AI.";
}else if(question.includes("dbms")){

answer = "DBMS (Database Management System) is software used to store, organize, retrieve, and manage data efficiently. Examples include MySQL, Oracle, and PostgreSQL.";

}
}else if(question.includes("javascript") || question.includes("js")){

answer = "JavaScript is a programming language used to make websites interactive. It can handle user events, manipulate HTML and CSS, validate forms, create animations, and communicate with servers using APIs.";

}
}else if(
    question.includes("hi") ||
    question.includes("hello") ||
    question.includes("hey")
){

answer = "Hello! 👋 Welcome to EduNova AI. Ask me any question about programming, computer science, or technology.";

}

}else if(
    question.includes("thank you") ||
    question.includes("thanks")
){

answer = "You're welcome! 😊 I'm happy to help. Feel free to ask another question.";

}
}else if(
    question.includes("bye") ||
    question.includes("goodbye") ||
    question.includes("see you")
){

answer = "Goodbye! 👋 Have a great day and keep learning with EduNova AI.";

}
}else if(
    question.includes("date") ||
    question.includes("time")
){

let now = new Date();

answer = "Current Date & Time: " + now.toLocaleString();

}
}else if(question.includes("+")){

try{

let result = eval(question);

answer = "Answer: " + result;

}catch{

answer = "Please enter a valid math expression.";

}
}else if(question.includes("-")){

try{

let result = eval(question);

answer = "Answer: " + result;

}catch{

answer = "Please enter a valid math expression.";

}
    }else if(question.includes("*")){

try{

let result = eval(question);

answer = "Answer: " + result;

}catch{

answer = "Please enter a valid math expression.";

}

}else if(question.includes("operating system") || question.includes("os")){

answer = "An Operating System (OS) is system software that manages computer hardware, memory, files, and programs. Examples include Windows, Linux, and macOS.";

}    
}else if(question.includes("computer network") || question.includes("network")){

answer = "A Computer Network is a group of connected computers that communicate and share resources using protocols such as TCP/IP. Examples include LAN, WAN, and the Internet.";

}

}else if(question.includes("oop") || question.includes("object oriented programming")){

answer = "Object-Oriented Programming (OOP) is a programming paradigm based on objects and classes. Its four main principles are Encapsulation, Inheritance, Polymorphism, and Abstraction.";

}
}else if(question.includes("ai") || question.includes("artificial intelligence")){

answer = "Artificial Intelligence (AI) enables computers to perform tasks that normally require human intelligence, such as learning, reasoning, problem-solving, and decision-making.";

}

}else if(question.includes("machine learning") || question.includes("ml")){

answer = "Machine Learning (ML) is a branch of Artificial Intelligence that enables computers to learn from data and make predictions without being explicitly programmed.";

}
}else if(question.includes("cyber security") || question.includes("cybersecurity")){

answer = "Cyber Security is the practice of protecting computers, networks, and data from cyber attacks, malware, hacking, and unauthorized access.";

}
}else if(question.includes("cloud computing") || question.includes("cloud")){

answer = "Cloud Computing is the delivery of computing services such as storage, servers, databases, networking, and software over the Internet. Popular cloud platforms include AWS, Microsoft Azure, and Google Cloud.";

}
}else if(question.includes("sql")){

answer = "SQL (Structured Query Language) is used to create, retrieve, update, and manage data stored in relational databases. Common SQL commands include SELECT, INSERT, UPDATE, and DELETE.";

}
}else if(question.includes("python")){

answer = "Python is a simple, powerful, and beginner-friendly programming language. It is widely used in web development, data science, artificial intelligence, machine learning, automation, and software development.";

}
}else if(question.includes("c++") || question.includes("cpp")){

answer = "C++ is an object-oriented programming language used for game development, system software, competitive programming, and high-performance applications.";

}
}else if(question.includes("git")){

answer = "Git is a version control system used to track changes in source code, collaborate with developers, and manage software projects efficiently.";

}
}else if(question.includes("github")){

answer = "GitHub is a cloud-based platform that hosts Git repositories. It helps developers store code, collaborate on projects, track changes, and manage software development.";

}
}else if(question.includes("linux")){

answer = "Linux is an open-source operating system known for its security, stability, and performance. It is widely used in servers, cloud computing, and software development.";

}
}else if(question.includes("react")){

answer = "React is a JavaScript library used to build fast, interactive, and reusable user interfaces. It is widely used for developing modern web applications.";

}
}else if(question.includes("node") || question.includes("node.js")){

answer = "Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server side. It is widely used to build fast and scalable web applications.";

}
}else if(question.includes("mongodb") || question.includes("mongo")){

answer = "MongoDB is a NoSQL database that stores data in flexible JSON-like documents. It is widely used in modern web applications because it is scalable and easy to use.";

}
}else if(question.includes("api")){

answer = "API (Application Programming Interface) allows different software applications to communicate and exchange data with each other. APIs are widely used in web, mobile, and cloud applications.";

}
}else if(question.includes("json")){

answer = "JSON (JavaScript Object Notation) is a lightweight data format used to store and exchange data between applications. It is easy for humans to read and machines to parse.";

}
}else if(question.includes("http")){

answer = "HTTP (HyperText Transfer Protocol) is a communication protocol used to transfer web pages and data between a web browser and a web server.";

}
}else if(question.includes("https")){

answer = "HTTPS (HyperText Transfer Protocol Secure) is the secure version of HTTP. It encrypts data using SSL/TLS, making communication between the browser and server safe.";

}
}else if(question.includes("/")){

    try{
        let result = eval(question);
        answer = "Answer: " + result;
    }catch{
        answer = "Please enter a valid math expression.";
    }

}else if(question.includes("%")){

    try{
        let result = eval(question);
        answer = "Answer: " + result;
    }catch{
        answer = "Please enter a valid math expression.";
    }

}else if(question.includes("python")){

    answer = "Python is a simple and powerful programming language used in AI, Data Science, Web Development, Automation and Machine Learning.";

}else if(question.includes("java")){

    answer = "Java is an object-oriented programming language used for Android apps, desktop software and enterprise applications.";

}else if(question.includes("c++") || question.includes("cpp")){

    answer = "C++ is an object-oriented programming language used in game development, competitive programming and system software.";

}else if(question.includes("html")){

    answer = "HTML is the standard markup language used to create the structure of web pages.";

}else if(question.includes("css")){

    answer = "CSS is used to style HTML pages by controlling colors, fonts, layouts and animations.";

}else if(question.includes("javascript") || question.includes("js")){

    answer = "JavaScript makes websites interactive using events, DOM manipulation and APIs.";

}else if(question.includes("react")){

    answer = "React is a JavaScript library used to build modern user interfaces.";

}else if(question.includes("node")){

    answer = "Node.js allows JavaScript to run on the server side.";

}else if(question.includes("mongodb")){

    answer = "MongoDB is a NoSQL database that stores data in JSON-like documents.";

}else if(question.includes("dbms")){

    answer = "DBMS is software used to store, retrieve and manage databases.";

}else if(question.includes("sql")){

    answer = "SQL is used to manage relational databases using commands like SELECT, INSERT, UPDATE and DELETE.";

}else if(question.includes("ai")){

    answer = "Artificial Intelligence enables machines to perform tasks that normally require human intelligence.";

}else if(question.includes("machine learning")){

    answer = "Machine Learning is a branch of AI where computers learn from data.";

}else if(question.includes("data science")){

    answer = "Data Science combines statistics, programming and AI to analyze data.";

}else if(question.includes("cloud")){

    answer = "Cloud Computing delivers servers, storage and software over the Internet.";

}else if(question.includes("network")){

    answer = "Computer Networks connect multiple computers for communication and resource sharing.";

}else if(question.includes("operating system") || question.includes("os")){

    answer = "An Operating System manages hardware, software and system resources.";

}else if(question.includes("linux")){

    answer = "Linux is an open-source operating system widely used in servers.";

}else if(question.includes("github")){

    answer = "GitHub is a cloud platform for hosting Git repositories.";

}else if(question.includes("git")){

    answer = "Git is a version control system used to track source code changes.";

}else if(question.includes("hello") || question.includes("hi")){

    answer = "Hello 👋 Welcome to EduNova AI!";

}else if(question.includes("thanks") || question.includes("thank you")){

    answer = "You're Welcome 😊 Happy Learning!";

}else if(question.includes("bye")){

    answer = "Goodbye 👋 Have a Nice Day!";


}else if(question.includes("array")){

    answer = "An Array is a collection of elements stored in contiguous memory locations.";

}else if(question.includes("string")){

    answer = "A String is a sequence of characters used to store text.";

}else if(question.includes("loop")){

    answer = "Loops execute a block of code repeatedly. Common loops are for, while and do-while.";

}else if(question.includes("function")){

    answer = "A Function is a reusable block of code that performs a specific task.";

}else if(question.includes("variable")){

    answer = "A Variable stores data values in a program.";

}else if(question.includes("compiler")){

    answer = "A Compiler converts source code into machine code before execution.";

}else if(question.includes("interpreter")){

    answer = "An Interpreter executes source code line by line.";

}else if(question.includes("algorithm")){

    answer = "An Algorithm is a step-by-step procedure used to solve a problem.";

}else if(question.includes("flowchart")){

    answer = "A Flowchart is a graphical representation of an algorithm.";

}else if(question.includes("binary tree")){

    answer = "A Binary Tree is a hierarchical data structure where each node has at most two children.";

}else if(question.includes("stack")){

    answer = "A Stack follows the LIFO (Last In First Out) principle.";

}else if(question.includes("queue")){

    answer = "A Queue follows the FIFO (First In First Out) principle.";

}else if(question.includes("linked list")){

    answer = "A Linked List is a linear data structure where nodes are connected using pointers.";

}else if(question.includes("api")){

    answer = "An API allows different software applications to communicate with each other.";

}else if(question.includes("json")){

    answer = "JSON is a lightweight format used for storing and exchanging data.";

}else if(question.includes("http")){

    answer = "HTTP is the protocol used to transfer web pages over the Internet.";

}else if(question.includes("https")){

    answer = "HTTPS is the secure version of HTTP using SSL/TLS encryption.";

}else if(question.includes("oop")){

    answer = "OOP is based on four principles: Encapsulation, Inheritance, Polymorphism and Abstraction.";

}else if(question.includes("computer")){

    answer = "A computer is an electronic device that accepts input, processes data, stores information and produces output.";

}else if(question.includes("internet")){

    answer = "The Internet is a global network connecting millions of computers worldwide.";

}else if(question.includes("wifi")){

    answer = "Wi-Fi is a wireless technology used to connect devices to the Internet.";

}else if(question.includes("cpu")){

    answer = "CPU is the brain of the computer that performs calculations and executes instructions.";

}else if(question.includes("ram")){

    answer = "RAM is temporary memory used while programs are running.";

}else if(question.includes("rom")){

    answer = "ROM is permanent memory that stores firmware.";

}else if(question.includes("keyboard")){

    answer = "A Keyboard is an input device used to enter text and commands.";

}else if(question.includes("mouse")){

    answer = "A Mouse is a pointing device used to control the cursor.";
    


}else{

answer = "Sorry! I don't know the answer yet.";

}
saveChat(question, answer);
document.getElementById("answer").innerHTML = answer;

}



function clearChat(){

document.getElementById("question").value = "";

document.getElementById("answer").innerHTML =
"Waiting for your question...";

}


function saveChat(question, answer){

    let chats = JSON.parse(localStorage.getItem("chatHistory")) || [];

    chats.push({
        question: question,
        answer: answer,
        time: new Date().toLocaleString()
    });

    localStorage.setItem("chatHistory", JSON.stringify(chats));
}

function clearChat(){

    document.getElementById("question").value = "";

    document.getElementById("answer").innerHTML =
    "Waiting for your question...";
}

function showHistory(){

    let chats = JSON.parse(localStorage.getItem("chatHistory")) || [];

    let output = "";

    if(chats.length==0){

        output = "No chat history found.";

    }else{

        for(let i=0;i<chats.length;i++){

            output +=
            "<hr>" +
            "<b>Q:</b> " + chats[i].question + "<br>" +
            "<b>A:</b> " + chats[i].answer + "<br>" +
            "<small>" + chats[i].time + "</small><br>";

        }

    }

    document.getElementById("answer").innerHTML = output;
}




// Voice Input
function startVoice(){

if(!('webkitSpeechRecognition' in window)){
    alert("Voice Recognition is not supported in this browser.");
    return;
}

let recognition = new webkitSpeechRecognition();

recognition.lang = "en-IN";

recognition.onresult = function(event){

document.getElementById("question").value =
event.results[0][0].transcript;

};

recognition.start();

}

// Copy Answer
function copyAnswer(){

let text = document.getElementById("answer").innerText;

navigator.clipboard.writeText(text);

alert("Answer copied successfully!");

}

// Download Chat History
function downloadHistory(){

let chats = localStorage.getItem("chatHistory") || "No History";

let blob = new Blob([chats], {type:"text/plain"});

let link = document.createElement("a");

link.href = URL.createObjectURL(blob);

link.download = "EduNovaAI_ChatHistory.txt";

link.click();

}
function showNotes(subject){

let notes = "";

switch(subject){

case "html":
notes = "<h2>HTML</h2><p>HTML is used to create the structure of web pages.</p>";
break;

case "css":
notes = "<h2>CSS</h2><p>CSS is used to style web pages.</p>";
break;

case "javascript":
notes = "<h2>JavaScript</h2><p>JavaScript makes websites interactive.</p>";
break;

case "python":
notes = "<h2>Python</h2><p>Python is used for AI, Data Science and Web Development.</p>";
break;

default:
notes = "Notes not available.";

}

document.getElementById("notes").innerHTML = notes;

}
function showNotes(subject){

let notes="";

switch(subject){

case "bca":
notes="<h2>BCA</h2><p>BCA (Bachelor of Computer Applications) is a 3-year undergraduate course focused on programming, databases, networking and software development.</p>";
break;

case "cs":
notes="<h2>Computer Science</h2><p>Computer Science covers programming, algorithms, operating systems, DBMS, networking and AI.</p>";
break;

case "ds":
notes="<h2>Data Science</h2><p>Data Science involves collecting, analyzing and interpreting data using statistics, machine learning and AI.</p>";
break;

case "python":
notes="<h2>Python</h2><p>Python is widely used in AI, Data Science, Automation and Web Development.</p>";
break;

case "dbms":
notes="<h2>DBMS</h2><p>DBMS is software used to store, organize and manage data efficiently.</p>";
break;

default:
notes="Notes not available.";

}

document.getElementById("notes").innerHTML=notes;

}
