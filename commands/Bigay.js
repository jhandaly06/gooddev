/*CMD
  command: Bigay
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
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("Bigaypera");
}
