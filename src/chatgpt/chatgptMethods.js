import { chatgpt } from "./chatgptSettings.js";

let currentParentMessageId = "";

export async function askQuestion(question) {
  const options = currentParentMessageId.length ? { parentMessageId: currentParentMessageId } : {};  
  const response = await chatgpt.sendMessage(question, options);
  currentParentMessageId = response.parentMessageId;
  return response.text;
}
