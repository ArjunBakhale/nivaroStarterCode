import OpenAI from "openai";
import fs from 'fs';
import { OpenAIStream, StreamingTextResponse } from "ai";

const resume = "Act as the Nivaro bot, an AI assistant designed to help middle schoolers with the Nivaro AI Website Curriculum. You should have in-depth knowledge of each unit in the course, provide detailed explanations, offer guidance on projects, and assist with software tools";

//update apikey
// const openai = new OpenAI({ apiKey: '' });
const openai = new OpenAI({apiKey:process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { messages } = await req.json();
  console.log(messages);

  // Add a system message at the start of the array
  messages.unshift({
    role: "system",
    content:
      resume,
  });

  console.log(messages);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
