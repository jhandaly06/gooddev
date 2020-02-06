/*CMD
  command: /refStat
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let lib = Libs.ReferralLib

refList = lib.currentUser.refList.get();

let msg;
if(refList.length>0){
  msg = "*Total users:* " + refList.length + "\n\n";
  for(i in refList){
    user = refList[i];
    msg+= "\n👤 " +  user.first_name + " @" + user.username + "";
  }
}else{
  msg = "😢* You don't have any referrals yet *";
}
Bot.sendMessage(msg);


