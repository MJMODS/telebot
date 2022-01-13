/*CMD
  command: /broad
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📌Send Your Message For Broadcasting
  keyboard: 
  aliases: 
CMD*/

 if(user.telegramid == "1109004518"){
//You must have to change id
Bot.runAll({ 
command: "Broadcast",
for_chats: "private-chats",
options: {msg: message}
})
}else{
Bot.sendMessage("*❌ You're Not An Admin*")
}
Bot.sendMessageToChatWithId(1109004518,"✅ Message Has Been Sent To All")
