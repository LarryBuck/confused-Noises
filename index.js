const Discord = require('discord.js');
const bot = new Discord.Client

const token = 'Njg5Njc0ODczNzgxNjE2NjU4.XnJA7w.Nq1PzpHDjZsNo62HU1cLgIOT5gw';

const PREFIX = "*";

var version = "1.0.0"
//Messages --------------------------------------------------------------------------------------------------------------------------------------------------------
bot.on('ready', () =>{
    console.log('Online.');
})

bot.on('message', msg =>{
    if(msg.content === 'privet comrade')
    msg.channel.send('Privet, comrade!')
})

bot.on('message', msg =>{
    if(msg.content === 'Privet comrade')
    msg.channel.send('Privet, comrade!')
})

bot.on('message', msg =>{
    if(msg.content === 'PRIVET COMRADE')
    msg.channel.send('Privet, comrade!')
})

bot.on('message', msg =>{
    if(msg.content === 'privet')
    msg.channel.send('Privet, comrade!')
})

bot.on('message', msg =>{
    if(msg.content === 'Privet')
    msg.channel.send('Privet, comrade!')
})

bot.on('message', msg =>{
    if(msg.content === 'PRIVET')
    msg.channel.send('Privet, comrade!')
})

bot.on('message', msg =>{
    if(msg.content === 'Vadim blyat')
    msg.channel.send('VADIM?!')
})

bot.on('message', msg =>{
    if(msg.content === 'vadim blyat')
    msg.channel.send('VADIM?!')
})

bot.on('message', msg =>{
    if(msg.content === 'The owner of this place sucks')
    msg.channel.send('no u')
})

bot.on('message', msg =>{
    if(msg.content === 'the owner of this place sucks')
    msg.channel.send('no u')
})

bot.on('message', msg =>{
    if(msg.content === 'The owner of this place sucks')
    msg.channel.send('no u')
})

bot.on('message', msg =>{
    if(msg.content === 'Communism sucks')
    msg.channel.send('no ur mom sucks')
})

bot.on('message', msg =>{
    if(msg.content === 'Communism?')
    msg.channel.send('Yes.')
})

bot.on('message', msg =>{
    if(msg.content === 'capitalism?')
    msg.channel.send('No, just no.')
})

bot.on('message', msg =>{
    if(msg.content === 'Capitalism?')
    msg.channel.send('No, just no.')
})

bot.on('message', msg =>{
    if(msg.content === 'communism?')
    msg.channel.send('Yes.')
})
//Misc Commands--------------------------------------------------------------------------------------------------------------------------------------------------------
bot.on('message', msg =>{
    if(!msg.content.startsWith(PREFIX)) return;
    let args = msg.content.substring(PREFIX.length).split(" ")
    switch(args[0]){
        case 'help':
            msg.reply('The bot is currently in developtment, please contact a staff member.')
            break;
        case 'info':
            msg.reply('Server version is ' + version)
            break;
        case 'clear':
            if(!args[1]) return msg.channel.reply('Error, please specify the ammount of message to delete.')
            msg.channel.bulkDelete(args[1]);
            break;
    }   
})

bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.find(channel => channel.name === "verification-pool");
    if(!channel) return;
    channel.send(`Welcome to the Republic of Slavs, comrade ${member}, to verify, say "!verify" or "c/verify"`)
})
//kick comand--------------------------------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message =>{
    if (!message.guild) return;
    if (message.content.startsWith('*kick')) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                .kick('Optional reason that will display in the audit logs').then(() => {
                    message.reply(`Successfully kicked ${user.tag}.`);
                })
                .catch(err => {
                    message.reply('I was unable to kick the user for unkown reasons');
                    console.error(err);
                });
            } else {
                message.reply("That user isn't in this server!");
      }
    } else {
        message.reply("You didn't mention a user to kick.");
      }
    }
  });
;
// ban command--------------------------------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('*ban')) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
          .ban({
            reason: 'You have been banned from the Union!',
        })
        .then(() => {
            message.reply(`Successfully banned ${user.tag}.`);
        })
        .catch(err => {
            message.reply('I was unable to ban the member for unkown reasons.');
            console.error(err);
        });
    } else {message.reply("That user isn't in the Union.");
}
} else {
    message.reply("You didn't mention a user to ban.");
            }
        }
    }); 
;
bot.login(process.env.token);
