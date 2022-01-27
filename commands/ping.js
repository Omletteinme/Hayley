const Discord = require('discord.js');

module.exports={
  name:'ping',
  description:'Latency of bot',
  category: 'Info',
  async execute(Client, message, args){
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(Client.ws.ping)}ms`);
  }
}