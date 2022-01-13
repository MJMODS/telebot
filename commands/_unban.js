/*CMD
  command: /unban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *📌Send Telegram User Id To Unban User*
  keyboard: 
  aliases: 
CMD*/

var key = "1259676127"
if (user.telegramid== key){
Bot.setProperty(""+message+"" , "unban" , "string");
Bot.sendMessage("*✅ User " +message+ " Has Been Unbanned Successfully*");
}else{
return
}
