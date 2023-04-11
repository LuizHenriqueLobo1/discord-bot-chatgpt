import { chatgpt } from "./chatgptSettings";

let currentParentMessageId = "";

export async function askQuestion(question: string) {
  const options = currentParentMessageId.length ? { parentMessageId: currentParentMessageId } : {};  
  const response = await chatgpt.sendMessage(question, options);
  currentParentMessageId = response.parentMessageId as string;
  return response.text;
}
