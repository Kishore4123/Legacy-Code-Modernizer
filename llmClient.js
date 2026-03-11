// llmClient.js
import { GoogleGenAI } from '@google/genai';
import 'dotenv/config'; // Automatically loads the .env file

// Initialize the Gemini client. It automatically finds process.env.GEMINI_API_KEY
const ai = new GoogleGenAI({});

/**
 * Calls the actual Google Gemini API.
 * @param {string} systemPrompt - The persona and rules for the AI.
 * @param {string} userPrompt - The specific task and code.
 * @returns {Promise<string>} - The AI's response.
 */
export async function callGemini(systemPrompt, userPrompt) {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash', // The fast, cost-effective model for text and code
            contents: userPrompt,
            config: {
                systemInstruction: systemPrompt,
                temperature: 0.1, // Low temperature keeps the AI focused and deterministic for coding tasks
            }
        });
        
        return response.text;
    } catch (error) {
        console.error("❌ Gemini API Error:", error.message);
        throw error; // Fails loudly so the pipeline stops if there is an issue
    }
}