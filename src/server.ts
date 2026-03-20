import app from './app.js'
import { config } from './config/config.js'
const server = app.listen(config.port)
;(() => {
    try {
        // console.log(`Server is Running on Port ${config.port} 🚀`)
    } catch (error) {
        // console.error('Error occurred while starting the server:', error)
    }
})()

// import TelegramBot from "node-telegram-bot-api";

// const token = "8689987967:AAHrz-PObgapLR7q2DMe9WAbucW_Pvwn9eg";
// // const bot = new TelegramBot(token, { polling: true });
// const bot = new TelegramBot(token, {
//   polling: {
//     interval: 300,
//     autoStart: true
//   }
// });
// // const bot = new TelegramBot(token, { polling: true });

// bot.on("polling_error", (error) => {
//   console.log(error);
// });

// bot.onText(/\/start/, (msg) => {
//   // setTimeout(() => {
//     bot.sendMessage(msg.chat.id, "Welcome to Task Manager Bot 🚀");
//   // }, 5000);
// });
// bot.onText(/\/fun/, (msg) => {
//   bot.sendMessage(msg.chat.id, "Vtha Fuck!!");
// });
// bot.onText(/\/addtask (.+)/, (msg, match) => {
//   const task = match[1];
//   bot.sendMessage(msg.chat.id, `Task added: ${task}`);
// });
