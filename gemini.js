async function askGemini() {

    const question = document.getElementById("question").value;

    if (!question.trim()) {
        alert("Please enter a question.");
        return;
    }

    document.getElementById("answer").innerHTML = "⏳ Thinking...";

    try {

        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question: question
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || "Request Failed");
        }

        document.getElementById("answer").innerHTML =
            data.candidates[0].content.parts[0].text;

    } catch (error) {
        document.getElementById("answer").innerHTML =
            "❌ " + error.message;
    }
}

function clearChat() {
    document.getElementById("question").value = "";
    document.getElementById("answer").innerHTML = "";
}

function copyAnswer() {
    navigator.clipboard.writeText(
        document.getElementById("answer").innerText
    );
    alert("Answer Copied!");
}
