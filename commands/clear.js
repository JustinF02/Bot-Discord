const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    console.log(`Commande détectée : \n clear par ${message.member.displayName}`)
			if(message.member.permissions.has("MANAGE_MESSAGES")){
				let args = message.content.split(" ");
				if(args[1] == undefined){		//pas d'argument
					message.reply("Nombre de message non ou mal défini")	
				}
				else{
					let number = parseInt(args[1]);
					if(isNaN(number)){			//is not a number
						message.reply("Nombre de message non ou mal défini")
					}
					else{
						number = number +1
						if(number <= 11){
							message.channel.bulkDelete(number).then(messages => {
								console.log(messages.size + " messages supprimés ! (dont celui appelant)")
							}).catch(err => {
								console.log("erreur de clear :" + err);
							})
						}
						else{
							message.reply("Vous ne pouvez pas supprimer plus de 10 messages")
							console.log("Pas de suppression")
						}
					}
				}
			}
			else{
				message.reply("Vous n'avez pas la permission !")
				console.log("Un utilisateur a tenté de supprimer des messages sans autorisation.")
			}
		}
        
module.exports.help = {
  name: "clear"
};
