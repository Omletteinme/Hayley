const Discord = require('discord.js');
const NSFW = require("nsfw-discord");
const nsfw = new NSFW();



module.exports={
    name:'pornsolo',
    description:'NSFW Porn Solo cmd',
    category:'NSFW',
    async execute(Client, message, args){
        var errMessage = "This Channel Isnt NSFW!";

        if (!message.channel.nsfw) {
           message.react('💢');
           return message.reply(errMessage)
        }
        
       else{ 
            const image = await nsfw.solo();

            const embed = new Discord.MessageEmbed()
            .setTitle(`:smirk: Porn solo`)
            .setColor("RED")
            .setImage(image)
            .setTimestamp();

            message.channel.send(embed);
       }
    },
    }
