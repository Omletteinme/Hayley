const Discord = require('discord.js');
module.exports={
    name:'dog',
    description:'Shows a dog',
    category:'Imagery',
    async execute(Client, message, args) {
        const superagent = require("superagent");
      const { body } = await superagent
      .get('https://random.dog/woof.json');
      const embed  = new Discord.MessageEmbed()
      .setColor(0x00A2E8)
      .setImage(body.url);
      if (body.url.includes(".mp4")) return;
      message.channel.send({embed})
    }
};