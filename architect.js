// architect.js
import { callGemini } from './llmClient.js';
/**
 * The Architect agent takes logic descriptions and writes modern code.
 * @param {string} logicDescription - The plain English logic from the Analyst.
 * @param {string} targetLanguage - The desired output language (e.g., 'JavaScript', 'Python').
 * @returns {Promise<string>} - The newly written, modernized code.
 */
export async function runArchitect(logicDescription, targetLanguage = 'JavaScript') {
    const systemPrompt = `You are a Full-Stack Modernization Engineer. 
    You take plain-English business logic and turn it into high-quality, modern, and modular ${targetLanguage} code. 
    Ensure you follow modern naming conventions and best practices.`;

    const userPrompt = `Write modern ${targetLanguage} code that perfectly executes the following business logic:\n\n${logicDescription}`;

    console.log(`--> Architect is writing new ${targetLanguage} code...`);
    const modernCode = await callGemini(systemPrompt, userPrompt);
    
    return modernCode;
}