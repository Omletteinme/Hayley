const Discord = require('discord.js');
const fs = require('fs');



const Client = new Discord.Client();
Client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


const prefix = 'h$';



  for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    Client.commands.set(command.name, command)
}

  var used1 = false;
var version = '1.0.0';

Client.on('ready', () => {
    console.log('This Client is online! ' + version);
    Client.user.setStatus('idle').catch(console.error);
    setInterval(() => {
        if(used1){
          Client.user.setActivity("h$(command)",{
          type: "PLAYING"
          })
        used1 = false;}
      else{
        Client.user.setActivity("your PC camera.",{
        type: "WATCHING"
        });
        used1 = true;}
      
    }, 5000);
});



Client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.Client) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(!Client.commands.has(command)) return;
    try{
        Client.commands.get(command).execute(Client, message, args, commandFiles, Discord);
        
    }catch(error){
        console.error(error);
        message.reply('**BUMP!**, there was a error executing that command.')
    }

    

    


});



Client.login('OTMxMjIwNzA0NTEzMzgwNDMy.YeBQ3Q.25vphq8fFDpBoFLZZtRQxQ6Y_2U');

