import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const businessInfo = `
Company: Desert In Alaska

Contact Information:
Phone: 313-931-3070
Email: desertinalaska@outlook.com
Website: https://www.desertinalaska.com
Contact Page: https://www.desertinalaska.com/contact/

Pages:
- Home
- About Us
- Services
- Projects
- Blog
- Contact

Services:
- Commercial Fire Suppression Detroit
- Commercial HVAC Detroit
- Kitchen Exhaust Systems Detroit
- Gas Piping Detroit
- Industrial Dry Chemical Fire Suppression Detroit

Instructions:
- Answer questions about Desert In Alaska using the information provided.
- If the user asks about the company, prioritize company information.
- If the user asks a general question unrelated to the company, answer normally as a helpful AI assistant.
- Be concise and professional.
- When asked for quotes, appointments, or contact details, provide the company contact information.
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
${businessInfo}

User Question:
${message}
`,
    });

    return Response.json({
      message: result.text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        message: "Sorry, something went wrong.",
      },
      { status: 500 },
    );
  }
}
