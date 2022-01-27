const fs = require('fs').promises;
const Discord = require('discord.js');
const path = require('path');
const PREFIX = 'h$';

module.exports = {
  async execute(client, message, args) {
    const Embed = new Discord.MessageEmbed();
    const categories = [
      'Info',
      'Imagery',
      'Fun',
      'NSFW',
    ];
    if(!args.length){
       Embed.setColor('AQUA')
    .setTimestamp()
    .setFooter(`requested by ${message.author.username}`,message.author.displayAvatarURL(),{dynamic: true})
    .setThumbnail(message.guild.iconURL());
      Embed.setTitle('Command categories');
      categories.forEach(categ=>{
        Embed.addField(`${categ}`, `Use \`${PREFIX}help> ${categ.substring(0,3)}\`\n** **`,false);
      });
      Embed.setDescription(`you can use \`<help> [command name]\` directly for more info on a command`);
      return message.reply(Embed);
      
    }else if(args.length === 1){
       Embed.setColor('RANDOM')
    .setTimestamp()
    .setFooter(`requested by ${message.author.username}`,message.author.displayAvatarURL(),{dynamic: true})
    .setThumbnail(message.guild.iconURL());
     const files = await fs.readdir(__dirname);
     //console.log(__dirname);
      categories.forEach(categ=>{
        //console.log('category log' + categ);
        if(args[0]===categ.substring(0,3).toLowerCase()||args[0]===categ.substring(0,4).toLowerCase()||args[0]===categ.toLowerCase()){
          Embed.setTitle(`${categ} commands`)
          for(let cmd of files){
            //console.log(file);
            const file = require(path.join(__dirname, cmd));
            if(file.category === categ){
              Embed.addField(`\`${file.name}\``,'** **',false);
            }
          }
          return message.channel.send(Embed);
        }
      });
      for(let file of files){
        const cmd = require(path.join(__dirname,file));
        if(cmd.name === args[0]){
          Embed.setTitle(`Help for \`${cmd.name}\` command`)
          .setColor('RANDOM')
          .setTimestamp()
          .setFooter(`requested by ${message.author.username}`,message.author.displayAvatarURL(),{dynamic: true})
          .setThumbnail(message.guild.iconURL())
          return message.channel.send(Embed);
        }
      }
    }
    let lengthCheck = false;
    if(args.length >1){
      message.channel.send(`please enter a single command category or command name only`);
      lengthCheck = true;
    }
    if(Embed.title === null && !lengthCheck){
      message.channel.send(`\`${args[0]}\` is not a valid command category nor command name`);
    }
  },
  subs: ['halp>', 'list>'],
  desc: `shows a list of commands or shows info on a specfic command\nUsage: \`<help>\` or \`<help> {command category}\` or \`<help> {command name} (do not use command substitutes)\` `,
  name: 'help',
  category: 'Information',
  multi: ['halp ', 'list '],
}