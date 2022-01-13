/*CMD
  command: kyakaruninkahid
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  return
}
var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  userPayment.add(+message)
if (message < 500) {
    Bot.sendMessage("_❌ Minimum Withdraw 500 Free Coin_")
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "_❌ Maximum Withdraw " + balance.value().toFixed(6) + " Free Coin_"
      )
    } else {
var add = User.getProperty("Paytm No.")
var amo = parseInt(message)
User.setProperty("amo", amo, "string")
var tokenid = "1003134"

HTTP.post({
  url: "https://txtautopaycodes.herokuapp.com/post",
  success: "/onLoading ",
  body: { address: add, amount: amo, tokenid: tokenid }
})

balance.add(-amo)
}}
