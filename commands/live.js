/*CMD
  command: live
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//add following bjs at the start your command

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}



                                                                                                                                             

var result = JSON.parse(data.content);
var TRXL = result.market_data.low_24h.usd
var TRXH = result.market_data.high_24h.usd
var TRXV = result.market_data.total_volume.usd
var TRXR = result.market_data.market_cap_rank
var TRXP = result.market_data.price_change_24h
var TRXEUR = result.market_data.current_price.eur
var TRX1 = result.market_data.current_price.usd
let TRX =TRX1*1
var TRXS1 = result.market_data.current_price.btc
let TRXS=TRXS1*1
var TRXETH = result.market_data.current_price.eth
var TRXX = result.market_data.price_change_percentage_24h_in_currency.usd

var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"


Api.sendPhoto({
photo:"https://t.me/airdropsdetectives/196",
caption:"*🔥 Get up to *`0.015`* BNB Daily\n\nJoin Link: https://bnb-valve.io/?ref=1145901625\n\n▶️ Copy the link on the dapp wallet\n▶️ Select BSC Metamask\n▶️ Done\n▶️ Video Proof: https://t.me/airdropsdetectives/201\n\n▶️ Earn up to Daily*` 0.015 `*BNB Free\n▶️ Every 5 Minute*` 0.000052 `*BNB\n▶️ Every Hour*` 0.00062 `*BNB\n▶️ Every Day *`0.015 `*BNB\n▶️ Minimum Withdraw*` 0.01 `*BNB*",parse_mode : "Markdown" , reply_markup: { inline_keyboard: [
[
{text: "↩️ Back", callback_data:"Cr"} ]]},disable_web_page_preview: true
});
