/*CMD
  command: /onWalletCreate
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = options.result;
Bot.sendMessage("*📍 To deposit funds please send to the following address:*\n\n📝 _Copy this address and make a payment: _`"+wallet.address+"`\n\n📖* Note: *_Your investment will start after the confirmation is done._");
// You can save wallet
User.setProperty("wallet", wallet.address, "string");
User.setProperty("label", wallet.label,"string");
