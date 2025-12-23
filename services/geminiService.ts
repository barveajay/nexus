
import { GoogleGenAI } from "@google/genai";

export async function getBrandAdvice(prompt: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are the AI Brand Strategist for 'Nexus Media', a premium digital marketing and videography agency. 
        Your tone is professional, creative, and highly strategic. 
        You provide short, punchy advice on branding, social media, and video production.
        If asked about Nexus Media, highlight their expertise in high-end commercials, data-driven marketing, and unique identity creation.
        Keep responses under 100 words.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my creative circuits right now. Please try again or contact our human team!";
  }
}
