/*CMD
  command: /balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let profit = Libs.ResourcesLib.userRes("profit");
let deposit   = Libs.ResourcesLib.userRes("deposit");
let res = Libs.ResourcesLib.userRes("balance");

let withdraw = Libs.ResourcesLib.userRes("withdraw");
let ref = Libs.ResourcesLib.userRes("ref");
Bot.sendMessage( "*👤Account Summary*"+"\n"+
"\n *💲 Withdrawable Balance:* "+ "\n"+ 
(res.value() +profit.value ()).toFixed(8) + " *DOGE*" + "\n\n➕ *Active Investment:* "+ "\n"+ deposit.value().toFixed(8) + " *DOGE*" +
"\n\n💹 *Total Profit:*"+"\n"+ profit.value().toFixed(8) + " *DOGE*" +
"\n\n🎁 *Affiliate Earning:*"+"\n"+ ref.value().toFixed (8) + " *DOGE*" +
"\n\n*💸 Total Withdrawn:  *"+"\n"+ 
withdraw.value().toFixed  (8)
+" *DOGE*" );
