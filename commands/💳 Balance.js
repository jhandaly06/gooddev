/*CMD
  command: 💳 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /balance
CMD*/

let coin = Bot.getProperty("coin","DOGE") 
let reff = Libs.ResourcesLib.userRes("reff");
let totally = Libs.ResourcesLib.userRes("totally");
let withdrawn = Libs.ResourcesLib.userRes("withdrawn");
let active = Libs.ResourcesLib.userRes("active");
let res = Libs.ResourcesLib.userRes("balance");

let options = {is_reply: false}
Bot.sendKeyboard("","*👤 Account Balance:*\n\n*➖ Withdrawable Balance:*\n "+res.value().toFixed(8)+" "+coin+"\n\n*💳 Active Investments:*\n"+active.value().toFixed(8)+" "+coin+"\n\n*💰 Total Profit:*\n"+totally.value().toFixed(8)+" "+coin+"\n\n*🎁 Total Affiliate Bonus:*\n"+reff.value().toFixed(8)+" "+coin+"\n\n*💸 Total Withdrawn:*\n"+withdrawn.value().toFixed(8)+" "+coin)


