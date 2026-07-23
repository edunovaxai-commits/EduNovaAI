async function askGemini() {

    const question = document.getElementById("question").value;

    if (!question.trim()) {
        alert("Please enter a question.");
        return;
    }

    document.getElementById("answer").innerHTML = "⏳ Thinking...";

    try {

        const response = await fetch("https://edu-nova-ai-theta.vercel.app/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question: question
            })
        });

        const text = await response.text();
console.log(text);

let data;
try {
    data = JSON.parse(text);
} catch {
    throw new Error(text);
}

if (!response.ok) {
    throw new Error(JSON.stringify(data));
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
