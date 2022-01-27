const Discord = require('discord.js');

module.exports={
    name:'dice',
    description:'Rolls a dice',
    category:'Fun',
    async execute(Client, message, args){
        var outcomes = [
            '1', '2', '3', '4', '5', '6'
        ]

        const final = outcomes[Math.round(Math.random() * (outcomes.length))];

        const embed = new Discord.MessageEmbed()
        .setTitle('You Rolled a **DICE**')
        .addField('**Outcome**', final)
        .setColor("WHITE")
        .setFooter(`Sent by ${message.author.username}`)
        .setTimestamp();

        message.channel.send(embed);
    }
}