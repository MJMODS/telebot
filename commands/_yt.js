/*CMD
  command: /yt
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
let yt = User.getProperty("yt")
if ( yt == undefined){
let Buttons = [
  { title: "♂️ Subscribe The Channel", url: "https://www.youtube.com/channel/UCHTtnjalu11sr96APBL93lA" },
  { title: "✅ Subscribed", command: "/ytch" }
]

Bot.sendInlineKeyboard(
  Buttons,
  "📛You Must Have To Súbsçríbé Our Official YouTube Channel\n\nClick On Súbsçríbé To Súbsçríbé\\nAfter Súbsçríbéd Click •Subscribed•"
)
User.setProperty("yt", user.telegramid)
} else {
Bot.runCommand("Cr")
}
