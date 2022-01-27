const Discord = require('discord.js');

const ms = module.require("ms");


module.exports = {
    name:'hack',
    description:'Hack Command',
    category: 'Fun',

  async execute(Client,message,args){
        let user  = args;
        if(!user[0]){
          return message.channel.send('Imma hack the air o wot');
        }

        let text = [
          `Getting ${user}'s information...`,
          `Getting ${user}'s discord token...`,
          `Getting ${user}'s possible emails`,
          `Found ${user}'s email`
          
        ];

        let current = 0;
        let count = text.length;
        let editTime = 3000;
        
        message.channel.send(`Checking ${user}'s account`).then((msg)=>{

          let interval = setInterval(()=>{
            if(current===count){
              msg.edit(`**Email: ${user}@gmail.com,
                       Passowrd: ${user}bigpp**`,);
              clearInterval(interval);
              return;
            }
            let hackMsg = text[current];
            msg.edit(hackMsg);
            current++;
          }, editTime)

        })
      }
    }
    
  

  


 

