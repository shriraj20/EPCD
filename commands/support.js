const Client = require('../structures/Client');
const Discord = require('discord.js')


module.exports = {
	name: "support",
	description: "support",
  cooldown: 3,  
  usage: 'support',
	/**
	 * @param {Client} client
	 * @param {message} message
	 * @param {string[]} args
	 */
run: async (client, message, args) => {  
message.author.send("https://discord.gg/TmjHYpEaGz")
    }
}