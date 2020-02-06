/*CMD
  command: Base
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var name=user.username ? user.username : user.first_name

let mention="["+name+"]"+"("+"tg://user?id="+user.telegramid+")"
Bot.sendKeyboard("💳 Balance,\n ➕ Deposit, ➖ Withdraw, \n 👥 Referrals, 💼 Set/Change Wallet,\n ❓ Information","👋 *Welcome*"  +mention);


