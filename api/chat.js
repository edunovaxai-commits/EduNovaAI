export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { question } = req.body;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: question }],
            },
          ],
        }),
      }
    );
console.log("Status:", response.status);
console.log("Status Text:", response.statusText);
    
const data = await response.json();

console.log(data);

if (!response.ok) {
  return res.status(response.status).json(data);
}

return res.status(200).json(data);
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
