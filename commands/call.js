const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  try{
    message.delete()
    /*if(args == <776094663261683733>){    //si l'arg est une mention role alors
      message.channel.send("civ6")}*/
    //swich case avec les roles + else avec user mention

    const moi = message.member.displayName
    let mention = message.mentions.members.first()
    if(mention === "776094663261683733"){
      message.channel.send("au dessus de vous")
    }
    console.log( "\n Commande détectée : \n " + moi + " appelle " + mention.displayName)
    var embedCall = new Discord.MessageEmbed()
        .setColor("#317AC1")
        .setTitle(moi + " appelle " + mention.displayName)
        .setThumbnail("https://icon-library.com/images/blue-phone-icon-png/blue-phone-icon-png-15.jpg")
        .setDescription("Vous devriez répondre au plus vite.")

    message.channel.send(embedCall)
  }catch(err){
    console.log(err);
  }
}

module.exports.help = {
  name: "call"
};
