/*CMD
  command: ⚙️Set Paytm No
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Plese Send Your TRX Address*
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
let msg = message
var badUsers = Bot.getProperty("Paytm No.s", { list: {} })

if(badUsers.list[msg]){
  Bot.sendMessage("This Address is already in our system");
  return
}
User.setProperty("Paytm No.",message,"string")

var tgID = message;  
var tbadUsers = Bot.getProperty("Paytm No.s", { list: {} });
tbadUsers.list[tgID] = true;
Bot.setProperty("Paytm No.s", tbadUsers, "json");
let wallet = User.getProperty("Paytm No.")
User.setProperty("Paytm No.", data.message, "string")
var button = [{ title: "↩ Back", command: "Cr" }]
Bot.sendInlineKeyboard(button, "*⭐ TRX Wallet set To :* " + data.message + "")

