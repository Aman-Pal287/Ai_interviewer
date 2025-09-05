import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function generateContent() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  return response.text;
}

module.exports = generateContent;
