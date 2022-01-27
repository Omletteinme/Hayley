const Discord = require('discord.js');
module.exports={
    name:'cat',
    description:'Shows a cat',
    category:'Imagery',
    async execute(Client, message, args) {
        const superagent = require("superagent");
      const { body } = await superagent
      .get('https://api.thecatapi.com/v1/images/search');
      const embed  = new Discord.MessageEmbed()
      .setColor(0x00A2E8)
      .setImage(body[0].url);
      if (body[0].url.includes(".mp4")) return;
      message.channel.send({embed})
    }
};