//#region biblio & préfixe
const Discord = require("discord.js");
const Client = new Discord.Client;
const bot = new Discord.Client();
const fs = require("fs");
bot.commands = new Discord.Collection();
const prefix = '$'
//#endregion
//#region client on démarrage
Client.on("ready", () => {
    console.log("Bot opérationnel");
	Client.user.setActivity("$salut", {type: 'LISTENING', url: 'https://open.spotify.com/'})
});
//#endregion
//#region commandes
f = " "
fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);
  
    let jsfile = files.filter((f) => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
      console.log("Commande introuvable.");
      return;
    }
  
    jsfile.forEach((f, i) => {
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded!`);
      if (props.help && props.help.name) {
        bot.commands.set(props.help.name, props);
      }
    });
  });
//#endregion

//#region détection de commandes
Client.on("message", message => {

	if((message.author.bot) || (message.channel.type == "dm") || !message.content.startsWith(prefix))return;
	let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);

	
	if(message.content.startsWith(prefix)){
		const [cmd_name, ...args] = message.content.trim().substring(prefix.length).split(/\s+/)   //permet de détecter la commande après le hastag
        
        if(cmd_name == "ping" || cmd_name == "Ping"){
            var ping = 0
			message.reply('Calcul du ping...').then((resultMessage) => {
				ping = resultMessage.createdTimestamp - message.createdTimestamp
			})
			console.log(`Commande détectée : \n ping par ${message.member.displayName}`)
			var embedPing = new Discord.MessageEmbed()
				.setColor("#A7001E")
				.setDescription(`Latence du bot : ${ping} ms | Latence API : ${Client.ws.ping}`)
				.setTitle("Reçu 5 sur 5 :sunglasses:")
				.setThumbnail("https://images-ext-2.discordapp.net/external/ANnosOMq26IOX6r1aAafwclDbxoqmIua85LDssasvt4/https/media.tenor.com/images/882bb363d7bd62b9c6429f66d845d969/tenor.gif")
			message.delete()
			message.channel.send(embedPing)
        }	
	}
});
//#endregion

Client.login("ODA5NDE0NzI0MjQzNjg1NDc3.YCUwNA.YHv_3AlIeqnwA5w8R6L05LWz7qE"); 
