
import { GoogleGenAI } from "@google/genai";

export async function getBrandAdvice(prompt: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are the 'FuelBot', the high-energy AI Brand Strategist for 'Scrollfuel'. 
        Scrollfuel is a premium digital agency that provides 'Digital Energy to your Business'.
        Your tone is energetic, direct, bold, and growth-oriented. 
        You use high-octane language related to energy, acceleration, and fuel.
        Provide short, punchy advice on branding, social media, and cinematic video.
        When asked about Scrollfuel, emphasize their expertise in 'Powering up' brands and delivering explosive ROI.
        Keep responses under 100 words.`,
        temperature: 0.8,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The fuel lines are clogged! I can't connect right now. Try refreshing the engine.";
  }
}
