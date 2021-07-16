const Discord = require("discord.js");

//#region embed du Salut
//------------------------------------------------------------------------------------

var salutEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Je me présente !')
	.setURL('https://discord.js.org/')
	.setAuthor('Function_bot', 'https://toppng.com/uploads/preview/image-wrench-tool-tools-repair-config-mechanic-svg-repair-tool-1156298065048hdykphyn.png')
	.setDescription("Mon prefixe de commandes : $" )
	//.setThumbnail('https://e7.pngegg.com/pngimages/758/371/png-clipart-web-development-web-service-web-developer-digital-marketing-develop-trademark-logo.png')
	.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png')
	.addFields(
		{ name: 'A quoi je sers ?', value: 'Je suis capable de vous donner moultes commandes afin d\'apporter du divertissement sur le serveur ! '},
		{ name: 'ping', value: 'Ping client et API discord', inline: true },
		{ name: 'insulte', value: 'Pour ... vous avez compris', inline: true },
        { name: 'call', value: 'Pour call un membre', inline : true},
		{ name: 'clear', value: 'Pour clear MAX 10 msgs', inline : true},
	)
	//.addField('Inline field title', 'Some value here', true)
	//.setImage('https://e7.pngegg.com/pngimages/758/371/png-clipart-web-development-web-service-web-developer-digital-marketing-develop-trademark-logo.png')
	.setTimestamp()
	.setFooter('Par le meilleur dev du monde', 'https://static.wikia.nocookie.net/transformice/images/e/e8/Feu_de_camp.png/revision/latest?cb=20150305142054&path-prefix=fr');

//------------------------------------------------------------------------------------
//#endregion

module.exports.run = async (bot, message, args) => {
    message.delete()
            
    console.log(`Commande détectée : \n présentation bot par ${message.member.displayName}`)
    message.channel.send(salutEmbed)
}

module.exports.help = {
  name: "salut"
};
