const Discord = require('discord.js');
const fun = require('fun-responses');

module.exports={
    name:'roast',
    description:'Roast Someone',
    category: 'Fun',
    async execute(Client, message, args){
        let user = message.mentions.users.first();
        if (message.mentions.users === message.author.username) return message.reply('It\'s okay bro... it\'s okay, you dont need to roast yourself');
        if (message.mentions.users.size < 1) return message.reply('You must mention someone to roast them.');
        const embed = new Discord.MessageEmbed()
        .setDescription(user.username + ", " + await fun.roast())
    message.channel.send(embed).then().catch(console.error);
    }
}