/*CMD
  command: 💲Withdraw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{
let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var wallet = User.getProperty("Paytm No.")
if( wallet == undefined ){
var button = [{ title : "↩ Back" , command : "Cr" }]
Bot.sendInlineKeyboard(button , "*❌ wallet Not set*")
}else{
if (balance.value() < 500){
var button = [{ title : "↩ Back" , command : "Cr" }]
Bot.sendInlineKeyboard(button , "*❌ You Dont Have 500 Free Coin To Withdraw!*")
}else{
var button = [{ title : "↩ Back" , command : "Cr" }]
Bot.sendInlineKeyboard(button , "*📤 Enter Amount of Free Coin*")
Bot.runCommand("kyakaruninkahid")
}
}}
