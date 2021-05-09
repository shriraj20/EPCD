const Client = require('../structures/Client');
const Discord = require('discord.js')
const pagination = require('discord.js-pagination')
const fetch = require("node-fetch");
const ms = require('pretty-ms');


const { version: discordjsVersion } = require('discord.js');

module.exports = {
	name: "botinfo",
	category: "Uttily",
	description: "About the bot",
	/**
	 * @param {Client} client
	 * @param {message} message
	 * @param {string[]} args
	 */
	run: async (client, message, args) => {
	
	message.channel.send(new Discord.MessageEmbed()
	.setColor('#2C2F33')
	.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
	.addField('Uptime', `${ms(client.uptime)}`, true)
	.addField('WebSocket Ping', `${client.ws.ping}ms`, true)
	.addField('Memory', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`, true)
	.addField('Guild Count', `${client.guilds.cache.size} guilds`, true)
	.addField(`User Count`, `${client.users.cache.size} users`, true)
	.addField('Commands', `${client.commands.size} cmds`,true)
	.addField('Node', `${process.version} on ${process.platform} ${process.arch}`, true)
	.addField('Cached Data', `${client.users.cache.size} users\n${client.emojis.cache.size} emojis`, true)
	.addField('Discord.js', `${discordjsVersion}`, true)
	.setTimestamp()
);
}
}
