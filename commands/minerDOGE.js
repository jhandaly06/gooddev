/*CMD
  command: minerDOGE
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let balance =
Libs.ResoucesLib.userRes("balance")

balance.growth.add({
value : amount*0.01,
interval : 1*60*60*24
})
