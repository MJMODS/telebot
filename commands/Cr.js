/*CMD
  command: Cr
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
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

var userstat = User.getProperty("status");
var referbonus = User.getProperty("referbonus");
if (userstat=="member" | userstat =="administrator" | userstat=="creator"){

if (referbonus == undefined){
let refUser = Libs.ReferralLib.currentUser.attractedByUser()
if (refUser){
  var balanceref = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balanceref.add(100)
  Bot.sendMessageToChatWithId(refUser.chatId, "+100 Free Coin Added\n*Referral :* "+"[" +user.telegramid+"]" + "(" + "tg://user?id=" + user.telegramid + ")")
User.setProperty("referbonus", user.telegramid, "integer")}
}

var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
var key = [[{title:"🌤 Balance",command:"💰 Balance"}],[{title:"🏖 Refferal",command:"👫 Referral"},{title:"🌐 Withdraw",command:"💲Withdraw"}],[{title:"🆔 Set Wallet",command:"⚙️Set"},{title:"📊 Statistics",command:"📊Statistics"},{title:"⏰ Alert",command:"live"}],[{title:"⏏️ Bonus",command:"bonu"}]]
Bot.sendInlineKeyboard(key,"*💠 Select The Options Below*")
}
if (user=="left"){
Bot.runCommand("/start");
}
