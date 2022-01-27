const Discord = require('discord.js');
const canvacord = require ('canvacord');


module.exports={
    name:'shit',
    description:'shit lmao',
    category: 'Imagery',
    async execute(Client, message, args){
        let user = message.mentions.users.first();
        if (message.mentions.users.size < 1){
            let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
            let image = await canvacord.Canvas.shit(avatar);
            let attachment = new Discord.MessageAttachment(image, "shited.gif");
        
             return message.channel.send(attachment)
        }
        
        if(message.mentions.users.size >= 1){
            let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
            let image = await canvacord.Canvas.shit(avatar);
            let attachment = new Discord.MessageAttachment(image, "shited.gif");
        
             return message.channel.send(attachment);
        }
        
    }
}