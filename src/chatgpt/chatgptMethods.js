import { chatgpt } from "./chatgptSettings.js";

export async function askQuestion(question) {
  const res = await chatgpt.sendMessage(question);
  return res.text;
}
