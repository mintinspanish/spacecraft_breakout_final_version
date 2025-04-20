import {GoogleGenAI} from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCAmm4fwml7iiuPoZ9L-oxohAPp3_m_cVY" });

async function createQuestions(message) {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `Ask me five questions with 4 options about ${message} in json object type`,
    });
    return response.text;
}

export {createQuestions};

createQuestions("math").then(result => {console.log(result);});




