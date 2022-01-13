/*CMD
  command: /onLoading
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/





var add = User.getProperty("Paytm No.")
var amo = User.getProperty("amo")
var tx = content
var key = [{title:"↩ Back",command:"Cr"}]
var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
Api.sendPhoto({
photo:"https://t.me/LegitBotsAProvider/6",
caption:"✅* Paid automatically \n\n⭐️ Amount - "+amo+" Free Coin\n🍀 User ID - "+user.telegramid+"\n🦁 Username - @"+user.username+" \n💠 Wallet - "+add+"\n\n⏰ Hash - *\n["+content+"](https://tronscan.org/#/transaction/"+content+"",parse_mode : "Markdown" , reply_markup: { inline_keyboard: [
[
{ text: "💠 Tronscan", url: "https://tronscan.org/#/transaction/"+content+""}, {text: "↩️ Back", callback_data:"Cr"} ]]},disable_web_page_preview: true
});
Api.sendMessage({
  chat_id: "@TXTPayouts",
  text:
    "✅ *New Successful Withdraw !!\n\n⭐️ Amount - "+amo+" Free Coin\n🦁 User - @"+user.username+"\n💠 Wallet - "+add+"\n☎️ User Referrals = " +
          refList.length +
          "\n☘Transaction ID* -\n["+content+"](https://tronscan.org/#/transaction/"+content+")\n\n🏖* Bot Link - @FreeCoinAutoPayRobot\n⏩ Please Check Your Wallet*",parse_mode:"Markdown",reply_markup: { inline_keyboard: [
[
{ text: "💠 Payment ID ", url: "https://tronscan.org/#/transaction/"+content+""}, {text: "🍀 Bot Link", url:"https://t.me/FreeCoinAutoPayRobot"} ]]},disable_web_page_preview: true
});
Bot.sendMessageToChatWithId(
  1109004518,
  "✅ Withdraw successful in bot @" +
    bot.name +
    "\n\n💳 Amount: " +
    amo +
    " FREE Coin \n👜 Wallet : " +
    add +
    "\n🕹️ ☘TxID : https://tronscan.org/#/transaction/" +
    tx +
    "\n\n💹 Now check your Tron Wallet.\nUser id : @" +
    user.username+""
)
