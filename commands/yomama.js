const giveMeAJoke = require('discord-jokes');
module.exports={
    name:'yomama',
    description:'Tells a YoMama joke',
    category: 'Fun',
    execute(Client, message, args){
        const yoMamma = require('yo-mamma').default;
        let insult;

        // get random joke
        insult = yoMamma(); 

        message.reply(insult);
        
    }

}