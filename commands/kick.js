const {messageEmbed, Client} = require("discord.js")




module.exports.run = (client, message, args) => {
    try{
    if(message.member.permissions.has("ADMINISTRATOR")){
    let user = message.mentions.users.first();
    let reason = args.splice(1).join(" ") || 'Aucune raison spécifiée';
    user ? message.guild.member(user).kick(reason) : messsage.channel.send("L'utilisateur n'existe pas.")

    const embedKick = new messageEmbed()
        .setAuthor(`${user.username} (${user.id})`)
        .setcolor("#ffa500")
        .setDescription(`**Action : kick\n **Raison :** ${reason}`)
        .setThumbnail(user.avatarURL())
        .setTimeStamp()
        .setFooter(message.author.username, message.author.avatarURL())

    client.channels.cache.get('686235485278175312').send(embedKick)
    }
    else{
        message.channel.send("vous n'etes pas administrateur")
        }
        }catch (err){
            console.log(err)
        }
}

module.exports.help = {
    name: "kick",
    aliases: ['kick'],
    description: "kick un utilisateur",
    cooldown: 10,
    usage: '<user> <raison>',
    isUserAdmin: true,
    permissions: true,
    args: true
}