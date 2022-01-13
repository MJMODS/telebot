/*CMD
  command: /ban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *📌Send Telegram User Id To Ban User*
  keyboard: 
  aliases: 
CMD*/

var key = "1259676127"
if (user.telegramid== key){
Bot.setProperty(""+message+"" , "ban" , "string");
Bot.sendMessage("*🛑 User " +message+ " Has Been Banned Successfully*");
}else{
return
}
