const config = require('./config.json')
const fs = require('fs');
const Discord = require('discord.js')
const Client = require('./structures/Client.js');
new Client().start(config.token, `./commands`)
