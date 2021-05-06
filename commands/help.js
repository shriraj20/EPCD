const Discord = require("discord.js")
const Client = require('../structures/Client');

module.exports = {
	name: "help",
	/**
	 * @param {Client} client
	 * @param {message} message
	 * @param {string[]} args
	 */
	run: async (client, message, args) => {
		message.channel.send('Help')

	}
}