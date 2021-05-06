// const Discord = require('discord.js');
// const client = new Discord.Client();
// const fs = require('fs')
// const config = require('./config.json');

// Collections

// client.commands = new Discord.Collection();


// client.on('ready', () => {
// console.log(`Logged in as ${client.user.tag}!`);
// });

// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// for (const file of commandFiles) {
// 	const command = require(`./commands/${file}`);
// 	client.commands.set(`${config.prefix}command.name`, command);
// }
// client.login(config.token);


const Client = require('./structures/Client.js');
const config = require('./config.json');
new Client().start(config.token, `./commands`)