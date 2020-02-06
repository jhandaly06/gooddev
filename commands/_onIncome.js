/*CMD
  command: /onIncome
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!options){
   // for security we need to check
   // that this command runned only by lib
   // user can not run command with options
   return
}


let wallet = options.address;
let currency = options.currency;
let amount = options.amount;

let fiat_amount = options.fiat_amount;
let fiat_currency = options.fiat_coin;

let fee = options.fee;

let txn_id = options.txn_id

// see another fields by
//Bot.sendMessage(inspect(options));

if (amount>= 1 && amount <=5){
Bot.sendMessage ("*✅ Your payment has been receive. Added to the system "  +amount+" DOGE   *");
  Api.sendMessage ({chat_id: "@channelsample1", text: "* 📥 New Investment *" +
    "\n \n *💰 Amount : *" +
amount + "* DOGE * \n\n *👱🏽‍♂ User : * " + user.username + "\n * \n🆔 TX ID:*" + "\n ["+ txn_id + "]" +"(https://live.blockcypher.com/doge/tx/" + txn_id + "\n)",parse_mode : "Markdown" , disable_web_page_preview: true
});

let deposit   = Libs.ResourcesLib.userRes("deposit");
deposit.add(amount)
User.setProperty("minerDOGE",amount ,"text");
Bot.runCommand("minerDOGE");
let lilo = Bot.getProperty("total");
let total = lilo+amount;
Bot.setProperty("total" , total , "integer");
}else{
Bot.sendMessage("Opps You Deposited Below The Minimum Invest🤐");
}



let referrer = Libs.ReferralLib.currentUser.attractedByUser();
let bonus = amount * 0.50;

if(referrer){
  let referrerRes = Libs.ResourcesLib.anotherUserRes("balance", referrer.telegramid);
referrerRes.add(bonus);
  let refcom = Libs.ResourcesLib.anotherUserRes("ref", referrer.telegramid);
refcom.add(bonus);
Bot.sendMessageToChatWithId(referrer.telegramid,"*✅ Referral commission:* "+bonus.toFixed(8)+" *DOGE*");
}
