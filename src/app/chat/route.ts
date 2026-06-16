import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const businessInfo = `
Company: Desert In Alaska

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
Answer only questions related to the company and services.
Be concise and helpful.
Provide contact page suggestion when needed.
`;

export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: businessInfo,
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  return Response.json({
    message: response.choices[0].message.content,
  });
}
