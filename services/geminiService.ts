import { GoogleGenAI } from "@google/genai";

const createClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

const ai = createClient();

export const sendMessageToGemini = async (
    message: string, 
    history: { role: string, parts: { text: string }[] }[],
    systemInstruction: string
): Promise<string> => {
  if (!ai) {
    return "I'm sorry, my brain (API Key) is missing. Please check the configuration.";
  }

  try {
    const model = 'gemini-2.5-flash';

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
      history: history, 
    });

    const result = await chat.sendMessage({ message });
    return result.text || "No response generated.";
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection Error. Please try again.";
  }
};