/*CMD
  command: Bigaypera
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message=="🔙 Return"){
Bot.runCommand("Base")
}else{
let amount = parseFloat(message);
let tgid = User.getProperty("id");
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid);
res.add(parseFloat(amount));
Bot.sendMessage("*Succesfully Added Balance* \n👤 User: "+id+"\n💰 Amount:"+amount+);
