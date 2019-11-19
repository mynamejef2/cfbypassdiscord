const Discord = require('discord.js');
const https = require('https');

const client = new Discord.Client();
client.login('token here bro');

client.on('ready', () => console.log('Ready to ddos bro'));

client.on('message', msg => {

    if (msg.content === 'ddos') {
        return msg.reply('BRO EPIC DDOSING RN!');
    }

});