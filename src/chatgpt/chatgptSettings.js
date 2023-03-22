import { ChatGPTAPI } from "chatgpt";
import { config } from "dotenv";

config();

export const chatgpt = new ChatGPTAPI({
  apiKey: process.env.OPENIA_API_KEY
});
