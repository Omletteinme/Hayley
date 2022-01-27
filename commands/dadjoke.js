const giveMeAJoke = require('discord-jokes');

module.exports={
    name:'dadjoke',
    description:'Tells a dad joke',
    category: 'Fun',
    async execute(Client, message, args){
        giveMeAJoke.getRandomDadJoke(function(joke){
            message.reply(joke);
        })
    
    }
}