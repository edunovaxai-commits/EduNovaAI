const API_KEY = "";

async function askGemini() {

    const question = document.getElementById("question").value;

    if (question.trim() === "") {
        alert("Please enter a question.");
        return;
    }

    document.getElementById("answer").innerHTML = "⏳ Thinking...";

    try {

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: question
                        }]
                    }]
                })
            }
        );

        const data = await response.json();

if (!response.ok) {
    throw new Error(data.error?.message || "Request failed");
}

document.getElementById("answer").innerHTML =
    data.candidates[0].content.parts[0].text;

    } catch (error) {
        document.getElementById("answer").innerHTML =
            "❌ Error: " + error.message;
    }
}

function clearChat() {
    document.getElementById("question").value = "";
    document.getElementById("answer").innerHTML = "";
}

function copyAnswer() {
    navigator.clipboard.writeText(document.getElementById("answer").innerText);
    alert("Answer Copied!");
}
