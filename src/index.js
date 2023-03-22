import { askQuestion } from "./chatgpt/chatgptMethods.js";
import { Client, GatewayIntentBits, Partials } from "discord.js";
import { config } from "dotenv";

config();

const discordClient = new Client({ 
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel]
});

discordClient.on("ready", () => {
  console.log(`Logged in as ${discordClient.user.tag}!`);
});

discordClient.login(process.env.DISCORD_BOT_TOKEN);

discordClient.on("messageCreate", async message => {
  if(!message.content.length) return;
  if(!message.author.bot) {
    const response = await askQuestion(message.content);
    message.reply(response);
  }
});
