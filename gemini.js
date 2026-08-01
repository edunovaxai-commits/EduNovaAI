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
            body: JSON.stringify({ question })
        });

        console.log("Status:", response.status);

        const data = await response.json();
        console.log(data);

        if (!response.ok) {
            throw new Error(data.error?.message || JSON.stringify(data));
        }

        document.getElementById("answer").innerHTML =
            data.candidates[0].content.parts[0].text;

    } catch (error) {
        console.error(error);
        document.getElementById("answer").innerHTML =
            "❌ " + error.message;
    }
}
