const Discord = require('discord.js');
const Maths = require("exact-math"); 
module.exports = {
    name: 'math',
    description: 'solves a math expression',
    aliases: [],
    category:'Info',
    async execute(Client, message, args) {
        
        if (!args[0]) {
            message.channel.send("Please re-run the command, but this time with the expression.");
        }
        let exp = args.join(" ");
        let sol;
        try {
          sol = Maths.formula(exp);
        }
        catch {
          return message.channel.send("Something went wrong. Was that really an expression?")
        }
        message.channel.send(`Expression: ${exp}\nSolution: ${sol}`).catch(()=>{message.reply("An error occurred.")});
    }
      
}