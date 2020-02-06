/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.sendInlineKeyboard(
  [{ title: "✅ I am a member", command: "✅ Joined" }],
  "*⏳ To use this bot join first:* @channelsample1"
)

function hello(message) {
  let greetings = "*Welcome *," + "\n"

  Bot.sendMessage(greetings + "\n" + message)
}
Bot.setProperty("lastinveststats" + user.telegramid, "yes", "string")
Bot.setProperty("investment" + user.telegramid)

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}
function doAttracted(channel) {
  hello("Referral:" + channel)
}
function doAtractedByUser(refUser) {
  hello(
    "You where Invited By User 👤: (" +
      refUser.first_name +
      ") @" +
      refUser.username
  )
}

function doAlreadyAttracted() {
  Bot.sendMessage("*You Already Started The Bot ❌*")
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)

