// analyst.js
import { callGemini } from './llmClient.js';
/**
 * The Analyst agent reviews legacy code and outputs plain English logic.
 * @param {string} legacyCode - The raw code string to be analyzed.
 * @returns {Promise<string>} - The extracted business logic.
 */
export async function runAnalyst(legacyCode) {
    const systemPrompt = `You are a Senior Legacy Systems Analyst. 
    Your goal is to understand messy, undocumented code. 
    You must look past outdated syntax and explain the core business logic in plain, step-by-step English.`;

    const userPrompt = `Analyze the following legacy code and summarize its exact logic and dependencies:\n\n${legacyCode}`;

    // TODO: Replace with your actual LLM API call (e.g., Gemini, OpenAI)
    console.log("--> Analyst is reviewing the code...");
    const extractedLogic = await callGemini(systemPrompt, userPrompt); 
    
    return extractedLogic;
}