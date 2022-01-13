/*CMD
  command: 💰 Balance
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
var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
var button = [{ title : "↩ Back" , command : "Cr" }]
Bot.sendInlineKeyboard(button , "*🤴 User : "+user.first_name+"\n\n💰 Balance : "+balance.value().toFixed(2)+" FREECOIN\n\n⚜️Refer And Earn More\n\n🛑 Minimum Redeem : 500 FREECOIN *")
