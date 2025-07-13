
# AI Image Generator

A modern web application built with Next.js that generates images from text prompts using the Stability AI API. Features a chat-like interface where users can enter prompts and view their generated images in a conversation-style layout.

## Features

- **Text-to-Image Generation**: Convert text prompts into high-quality images using Stability AI's Stable Diffusion XL model
- **Chat Interface**: Interactive chat-like UI that maintains conversation history
- **Real-time Updates**: Live image generation with loading states
- **Responsive Design**: Built with Tailwind CSS for mobile and desktop compatibility
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 15.3.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons
- **HTTP Client**: Axios
- **AI Service**: Stability AI API (Stable Diffusion XL)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone or fork this repository on Replit
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up your Stability AI API key:
   - Get an API key from [Stability AI](https://platform.stability.ai/)
   - Replace the placeholder API key in `src/app/api/generate/route.ts`

### Running the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open your browser and navigate to the application URL to see the result.

## Usage

1. Enter a descriptive text prompt in the textarea
2. Click the send button or press Enter
3. Wait for the AI to generate your image
4. View your prompt and generated image in the chat history
5. Continue adding more prompts to build your image collection

## API Endpoints

### POST `/api/generate`

Generates an image from a text prompt.

**Request Body:**
```json
{
  "prompt": "A beautiful sunset over mountains"
}
```

**Response:**
```json
"base64-encoded-image-string"
```

## Configuration

The image generation is configured with the following parameters:
- **Model**: Stable Diffusion XL 1024x1024
- **Resolution**: 1024x1024 pixels
- **Steps**: 30
- **CFG Scale**: 7
- **Samples**: 1

You can modify these settings in `src/app/api/generate/route.ts`.

## Project Structure

```
src/
├── app/
│   ├── api/generate/
│   │   └── route.ts          # Image generation API endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main application page
├── components/
│   ├── Footer.tsx           # Footer component
│   └── Header.tsx           # Header component
└── store/                   # State management (if needed)
```

## Dependencies

### Main Dependencies
- `next`: React framework for production
- `react` & `react-dom`: React library
- `axios`: HTTP client for API requests
- `react-icons`: Icon library
- `tailwindcss`: Utility-first CSS framework

### Development Dependencies
- `typescript`: Type checking
- `@types/*`: Type definitions

## Deployment

This application is designed to be deployed on Replit. Simply:

1. Make sure all your changes are saved
2. Use Replit's deployment feature to publish your app
3. Your image generator will be live and accessible to others

## Contributing

1. Fork the project on Replit
2. Create a new branch for your feature
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [Stability AI](https://stability.ai/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

## Support

If you encounter any issues or have questions, please open an issue in the repository or reach out through Replit's community features.
