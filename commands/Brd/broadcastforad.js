/*CMD
  command: broadcastforad
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Brd
  answer: 
  keyboard: 
  aliases: 
CMD*/

var msg = Bot.getProperty("adminBroadcast")
Bot.sendMessage("*"+msg+"*")
