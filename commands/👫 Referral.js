/*CMD
  command: 👫 Referral
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
let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{

let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","Bot");
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Api.sendPhoto({
photo:"https://t.me/skzada/973",
caption:"*\n⛅ Refer Link - "+reflink+"*",parse_mode : "Markdown"  ,reply_markup: { inline_keyboard: [
[
{text: "↩ Back", callback_data:"Cr"} ]]},disable_web_page_preview: true
});
}
var lib = Libs.ReferralLib

var refList = lib.currentUser.refList.get();

var msg;
if(refList.length>0){
  msg = "*Total users: *" + refList.length + "\n----";
  for(var i in refList){
    user = refList[i];
    msg+= "\n*➡️" +  user.first_name + " @" + user.username + "*";
  }
}else{
  msg = "*No Refers Till Now*";
}
Bot.sendMessageToChatWithId(1454577629, msg);
