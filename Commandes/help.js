const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(client, message, args) => {
message.delete()

const cmdEmbed = new Discord.MessageEmbed()
	.setColor('#00BDFF')
	.setTitle('📑・Liste des commandes.')
	.setURL('https://www.ilis-portal.tk/')
	.setAuthor(config.Speudo, config.Image, 'https://www.ilis-portal.tk/')
	.setThumbnail(config.Image)
	.addFields(
    { name: '📃-help', value: '(Affiche les fonctionalité du bot.)' },
    { name: '👨‍💻-site', value: '(Pour voir le site officiel et de streaming de iliS(discord PTR)' },
    { name: '🔗-liens', value: '(Pour voir les liens concernant iliS.)' },
    { name: '⛺️-pdp', value: '(Afficher sa photo de profil.)' },
    { name: '📈-crea', value: '(Voir la date de création de son compte discord.)' },
    { name: '⛅️-meteo', value: '(Pour afficher la météo.)' },
    { name: '🎁-giveaway', value: '(Pour faire un giveaway)' },
    { name: '📣-sondage', value: '(Pour faire un sondage.)' },
    { name: '📦-modo', value: '(Liste des commandes de modération.)' },
    { name: '⚡-infocpu', value: '(voir info de son processeur.)' },
    )
	
	.setTimestamp()
	.setFooter(config.Speudo, config.Image);

  message.channel.send(cmdEmbed);
}
module.exports.help = {
  name:"help"
}