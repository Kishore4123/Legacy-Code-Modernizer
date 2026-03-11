// index.js

// 1. Import your specialized agents
import { runAnalyst } from './Analyst.js';
import { runArchitect } from './architect.js';
import { runGuardian } from './guardian.js';

// 2. Define the main execution function
async function runModernizationPipeline() {
    console.log(" Starting Legacy Code Modernization Engine...\n");

    // The Input: A raw snippet of legacy code (e.g., old COBOL or C)
    const messyLegacyCode = `
        PROCEDURE DIVISION.
        CALCULATE-INTEREST.
            IF CUSTOMER-BALANCE > 1000 
                COMPUTE INTEREST = CUSTOMER-BALANCE * 0.05
            ELSE 
                COMPUTE INTEREST = CUSTOMER-BALANCE * 0.02.
    `;

    console.log("--- ORIGINAL LEGACY CODE ---");
    console.log(messyLegacyCode.trim() + "\n");

    try {
        // STEP 1: The Archaeologist extracts the logic
        console.log("🕵️‍♂️ STEP 1: Analyst is extracting business logic...");
        const extractedLogic = await runAnalyst(messyLegacyCode);
        console.log("Result:\n", extractedLogic, "\n");

        // STEP 2: The Architect writes the new code
        console.log("🏗️ STEP 2: Architect is writing modern JavaScript...");
        // We pass the output of Step 1 directly into Step 2
        const modernCode = await runArchitect(extractedLogic, 'JavaScript');
        console.log("Result:\n", modernCode, "\n");

        // STEP 3: The Guardian writes the tests
        console.log(" STEP 3: Guardian is generating test cases...");
        // We pass the new code AND the original logic for verification
        const testCases = await runGuardian(modernCode, extractedLogic);
        console.log("Result:\n", testCases, "\n");

        console.log("Modernization Pipeline Complete!");

    } catch (error) {
        console.error("Pipeline failed:", error);
    }
}

// 3. Execute the pipeline
runModernizationPipeline();