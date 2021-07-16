const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete()
    console.log(`Commande détectée : \n insulte par ${message.member.displayName}`)
    let mention = message.mentions.members.first() 
    message.channel.send("Mange tes morts " + mention.displayName)
}

module.exports.help = {
  name: "insulte"
};
