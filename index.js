const Discord = require("discord.js");
const Client = new Discord.Client;
const bot = new Discord.Client()
const prefix = '$'
Client.on("ready", () => {
    console.log("Bot opérationnel");
});
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//Constante EMBED

var salutEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Je me présente !')
	.setURL('https://discord.js.org/')
	.setAuthor('Function_bot', 'https://toppng.com/uploads/preview/image-wrench-tool-tools-repair-config-mechanic-svg-repair-tool-1156298065048hdykphyn.png')
	.setDescription("Mon prefixe de commandes : " + prefix)
	//.setThumbnail('https://e7.pngegg.com/pngimages/758/371/png-clipart-web-development-web-service-web-developer-digital-marketing-develop-trademark-logo.png')
	.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png')
	.addFields(
		{ name: 'A quoi je sers ?', value: 'Je suis capable de vous donner moultes commandes afin d\'apporter du divertissement sur le serveur ! '},
		{ name: 'ping', value: 'Pour voir si je répond !', inline: true },
		{ name: 'insulte', value: 'Pour insulter en ping', inline: true },
        { name: 'call', value: 'Pour call un membre', inline : true},
		{ name: 'clear', value: 'Pour clear MAX 10 msgs', inline : true},
	)
	//.addField('Inline field title', 'Some value here', true)
	//.setImage('https://e7.pngegg.com/pngimages/758/371/png-clipart-web-development-web-service-web-developer-digital-marketing-develop-trademark-logo.png')
	.setTimestamp()
	.setFooter('Par le meilleur dev du monde', 'https://static.wikia.nocookie.net/transformice/images/e/e8/Feu_de_camp.png/revision/latest?cb=20150305142054&path-prefix=fr');


var embedDeux = new Discord.MessageEmbed()
.setColor('#0099ff')
.setFooter('Par le meilleur dev du monde', 'https://static.wikia.nocookie.net/transformice/images/e/e8/Feu_de_camp.png/revision/latest?cb=20150305142054&path-prefix=fr');
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------


Client.on("message", message => {
    if(message.author.bot) return;              //si le message vient d'un bot, alors ne pas répondre
	if(message.channel.type == "dm") return;
    console.log("messages channels")           //Affichage de "message dans la console"

	if(message.content.startsWith(prefix)){
		const [cmd_name, ...args] = message.content.trim().substring(prefix.length).split(/\s+/)   //permet de détecter la commande après le hastag

		if (cmd_name == "call"){
		  message.delete()
		  const moi = message.member.displayName
		  let mention = message.mentions.members.first()                                                //Constante de mention @pseudo
		  message.channel.send(":telephone: " + moi + " appelle " + mention.displayName)
		  console.log( "\n Commande détectée : \n " + moi + " appelle " + mention.displayName)
		}

        if(cmd_name == "insulte"){
			message.delete()
            console.log("Commande détectée : \n insulte")
            let mention = message.mentions.members.first() 
            message.channel.send("Mange tes morts " + mention.displayName)      //mettre des insultes random
        }

        if(cmd_name == "salut"){
            message.delete()
            
            console.log("Commande détectée : \n présentation bot")
            message.channel.send(salutEmbed)
        }

        if(cmd_name == "ping"){
            console.log("Commande détectée : \n ping pong")
            message.channel.send("pong")
        }

		if(cmd_name == "clear"){
			console.log("Commande détectée : \n clear")
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
						}
					}
				}
			}
			else{
				message.reply("Vous n'avez pas la permission !")
				console.log("Un utilisateur a tenté de supprimer des messages sans autorisation.")
			}
		}
	  }
});
Client.login("ODA5NDE0NzI0MjQzNjg1NDc3.YCUwNA.YHv_3AlIeqnwA5w8R6L05LWz7qE"); 
