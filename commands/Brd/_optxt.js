/*CMD
  command: /optxt
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Brd
  answer: Send your message
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == "1109004518"){
 
  Bot.setProperty("adminBroadcast", message)
  Bot.runAll({
    command: "broadcastforad"
  })
  Bot.sendMessage("✅Message sent to all active members")
} else {
 Bot.sendMessage("❌ You are not allowed to use this")
}

