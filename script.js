function showMessage() {
    alert("Welcome to EduNova AI 🚀");
}
function checkAnswer(){

let ans=document.getElementById("correct");

if(ans.checked){

document.getElementById("result").innerHTML="✅ Correct Answer";

}else{

document.getElementById("result").innerHTML="❌ Wrong Answer";

}

}
