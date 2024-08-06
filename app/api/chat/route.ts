import { HfInference } from '@huggingface/inference';
import { NextResponse } from 'next/server';

const hf = new HfInference(process.env.HUGGING_FACE_API_KEY);

type Message = { role: 'human' | 'assistant'; content: string };

export async function POST(request: Request) {
    const body = await request.json();
    let messages: Message[] = [];
  
    // Check if body.messages exists and is an array
    if (Array.isArray(body.messages)) {
      messages = body.messages;
    } else if (typeof body.message === 'string') {
      // If there's a single message string, convert it to the Message format
      messages = [{ role: 'human', content: body.message }];
    }
  
    if (messages.length === 0) {
      return NextResponse.json({ error: 'No valid messages provided' }, { status: 400 });
    }
  
    try {
      const conversation = messages.map((msg: Message) => 
        `${msg.role === 'human' ? 'Human' : 'Assistant'}: ${msg.content}`
      ).join('\n\n');
  
      const prompt = `${conversation}\n\nAssistant: `;
      const response = await hf.textGeneration({
        model: 'HuggingFaceH4/zephyr-7b-beta',
        inputs: prompt,
        parameters: {
          max_new_tokens: 250,
          temperature: 0.7,
          top_p: 0.95,
          repetition_penalty: 1.2,
          return_full_text: false,
        },
      });
  
      let reply = response.generated_text.trim();
      
      // Extract only the assistant's response
      const assistantReply = reply.split('Human:')[0].trim();
      
      return NextResponse.json({ reply: assistantReply });
    } catch (error) {
      console.error('Error:', error);
      return NextResponse.json({ error: 'An error occurred while processing the request' }, { status: 500 });
    }
  }