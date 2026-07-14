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
