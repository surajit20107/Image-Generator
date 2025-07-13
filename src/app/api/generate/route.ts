import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const url = "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image"

const api_key = "sk-jMd2vopVUzuPptYZXrEultB4gqD0I5oueAZ8t3Zl6LLcnJyC"

// post request to generate image
export async function POST(request:NextRequest) {
  const { prompt } = await request.json()
  try {
    const res = await axios.post(url, {
      text_prompts: [
        {
          text: prompt,
        },
      ],
      cfg_scale: 7,
      height: 1024,
      width: 1024,
      steps: 30,
      samples: 1,
    }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${api_key}`,
        "Accept": "application/json"
      }
    })

    const image = res.data.artifacts[0].base64

    if (!image) {
      return NextResponse.json({ message: "No image generated"}, {status: 500})
    }
    
    return NextResponse.json(image, {status: 200})
  } catch (error) {
    return NextResponse.json({ message: (error as any).message }, {status: 500})
  }
}