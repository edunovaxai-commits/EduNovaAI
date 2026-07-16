// ===================================
// EduNova AI Ultimate v10
// gemini.js
// Google Gemini AI Integration
// ===================================

// ==============================
// IMPORTANT
// Replace YOUR_GEMINI_API_KEY
// with your own Gemini API key
// ==============================

const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";

const GEMINI_URL =
"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + GEMINI_API_KEY;


// ===================================
// Ask Gemini AI
// ===================================

async function askGemini(){

const question=document.getElementById("question").value.trim();

if(question==""){

alert("Please enter your question.");

return;

}

document.getElementById("answer").innerHTML="🤖 Thinking...";

try{

const response=await fetch(GEMINI_URL,{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

contents:[

{

parts:[

{

text:question

}

]

}

]

})

});

const data=await response.json();

const answer=

data.candidates?.[0]?.content?.parts?.[0]?.text ||

"No response received.";

document.getElementById("answer").innerHTML=answer;

}
catch(error){

document.getElementById("answer").innerHTML=

"❌ Error : "+error.message;

}

}


// ===================================
// Enter Key Support
// ===================================

document.addEventListener("DOMContentLoaded",function(){

const question=document.getElementById("question");

if(question){

question.addEventListener("keypress",function(e){

if(e.key==="Enter"){

e.preventDefault();

askGemini();

}

});

}

});
