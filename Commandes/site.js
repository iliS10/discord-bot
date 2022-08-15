const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(client, message, args) => {
message.delete()

const cmdEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle('👨‍💻・Voici le lien de notre site web (iliS).')
	.setAuthor(config.Speudo, config.Image, 'https://www.ilis-portal.tk/')
	.setThumbnail(config.Image)
	.addFields(
    { name: 'iliS-Portal', value: config.Site },
    { name: 'iliS Stream (streaming VF', value: config.Site2 },
    )
	
	.setTimestamp()
	.setFooter(config.Speudo, config.Image);

  message.channel.send(cmdEmbed);
}
module.exports.help = {
  name:"site"
}