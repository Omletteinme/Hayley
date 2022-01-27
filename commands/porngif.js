const Discord = require('discord.js');
const NSFW = require("nsfw-discord");
const nsfw = new NSFW();



module.exports={
    name:'porngif',
    description:'NSFW Porn gif cmd',
    category:'NSFW',
    async execute(Client, message, args){
        var errMessage = "This Channel Isnt NSFW!";

        if (!message.channel.nsfw) {
           message.react('💢');
           return message.reply(errMessage)
        }
        
       else{ 
            const image = await nsfw.pgif();

            const embed = new Discord.MessageEmbed()
            .setTitle(`:smirk: Porn gif`)
            .setColor("RED")
            .setImage(image)
            .setTimestamp();

            message.channel.send(embed);
       }
    },
    }
