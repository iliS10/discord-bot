const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
var prefix = config.prefix;

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

client.login(config.token);


client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "bonjour"){
      message.channel.send('Salut pédale')
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "wsh"){
      message.channel.send('wshhh ca dit quoi ??')
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "ww"){
      message.channel.send('Wewww')
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "pignouf"){
      message.channel.send('LA PIGNOUF OUI LA PIGNOUF OUI LA PIGNOUF OUI LA PIGNOUF OUI')
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "sdk"){
      message.channel.send('r et toi ?')
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "ca joue"){
      message.channel.send('ya pas one :)')
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "ca joue ?"){
      message.channel.send('ya pas one :)')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "bonsoir"){
      message.channel.send('bonsoir bon suce ')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "salut"){
      message.channel.send('Ca baise ?')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "comment ca va ?"){
      message.channel.send('Bien et toi negro ? ')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "comment ca va"){
      message.channel.send('oklm et toi ? ')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "bien"){
      message.channel.send('oklmmm')
    }
  })
  
  
  //// insulte
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "tg"){
      message.reply('t insulte qui mdr ? VA LA BAS !')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "fdp"){
      message.reply('tinsulte encore une mere de ce serveur tu passe dans la rigole')
    }
  }) 
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "ftg"){
      message.reply('voilaaaa dit lui')
    }
  })


const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaway.json",
    updateCountdownEvery: 3000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});
