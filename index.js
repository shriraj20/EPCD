const config = require('./config.json')

const Discord = require('discord.js')
const Client = require('./structures/Client.js');
new Client().start(config.token, `./commands`)