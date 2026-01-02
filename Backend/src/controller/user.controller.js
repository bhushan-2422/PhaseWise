import { GoogleGenAI } from "@google/genai";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

const geminiModel = asyncHandler(async (req, res) => {
  console.log(req);
  const { name, type, level, deadline, techstack, description } = req.body;
  if (!name) {
    throw new ApiError(401, "name is undefined");
  }

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `
        You are an AI project planning assistant.

You will be given structured project information with the following fields:

- name: The name of the project
- type: The type of project (for example: web app, mobile app, backend service, ML project, hackathon prototype)
- level: The experience level of the user (Beginner, Intermediate, Advanced)
- deadline: The target completion time or date for the project
- techstack: A short description of technologies if provided. This field may be empty, partial, or vague.
- description: A natural language explanation of what the project is about

this is the information:
Project Name: ${name}
Project Type: ${type}
Experience Level: ${level}
Deadline: ${deadline}
Tech Stack: ${techstack}
Project Description: ${description}
Your responsibilities:

1. Carefully analyze ALL the provided fields.
2. If the techstack field is empty or unclear, infer a simple and commonly used technology approach based on the project name, type, and description.
   - Prefer beginner-friendly and widely adopted tools.
   - Do NOT suggest complex or enterprise-level technologies.
3. Create a realistic project execution plan that can be completed before the given deadline.
4. Divide the project into EXACTLY 4 sequential phases.
5. Each phase must represent a meaningful stage of the project lifecycle.
6. Each phase must include 3 to 6 clear, actionable tasks.
7. Tasks should be aligned with the inferred or provided tech approach and the user’s experience level.
8. Do NOT include user accounts, IDs, database schemas, API code, or implementation details.

Return ONLY valid JSON using the exact structure below:

{ 
  "projectName":"string",
  "phases": [
    {
      "order": 1,
      "phaseName": "string",
      "phaseGoal": "string",
      "tasks": [
        {
          "taskTitle": "string",
          "taskDescription": "string"
        }
      ]
    }
  ]
}

Strict rules:
- Output must be valid JSON only.
- No markdown, no code blocks, no comments.
- No explanations outside the JSON.
- Do not include IDs, completion flags, or user data.
- Phase order must be strictly sequential: 1, 2, 3, 4.
- Do not exceed 4 phases.

    `,
  });
  let text = response.text
    ?.replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  // Parse the text into a JSON object
  let data;
  try {
    data = JSON.parse(text);
  } catch (err) {
    console.error("Failed to parse AI response:", err);
    throw new ApiError(500, "Failed to generate valid JSON from AI");
  }

  // Send clean JSON
  return res
    .status(200)
    .json(new ApiResponse(200, data, "plan is ready"));
});

export { geminiModel };
