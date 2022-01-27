var rf = require('random-facts');

module.exports={
    name:'fact',
    description:'Fun Facts',
    category: 'Info',
    async execute(Client, message, args){
        message.reply(rf.randomFact());
    }
}