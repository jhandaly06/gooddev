/*CMD
  command: ➕ Deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.CoinPayments.createPermanentWallet({
  currency: "DOGE",
  label: "myLabel",
  onSuccess: "/onWalletCreate",
  onIPN: "/onPermanentWalletIPN",
  onIncome: "/onIncome"
});
