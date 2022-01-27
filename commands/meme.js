const Discord = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
    name:'meme',
    description:'Meme Command',
    category: 'Imagery',

  async execute(Client,message,args){
        let subreddits = ['memes', 'meme', 'funny', 'dankmemes']
        let index = subreddits[Math.floor(Math.random() * subreddits.length)];
        let data = await fetch
        (`https://meme-api.herokuapp.com/gimme/${index}`).then(res => 
        res.json())
        
        const embed = new Discord.MessageEmbed()
        .setTitle(data.title)
        .setURL(data.postLink)
        .setColor("RANDOM")
        .setFooter("Your Meme")
        .setTimestamp()
        .setImage(data.url);
        message.channel.send(embed);
        }
}

  


 

