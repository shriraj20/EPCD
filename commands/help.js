const Discord = require("discord.js")
const Client = require('../structures/Client');

const pagination = require('discord.js-pagination')
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
    const embed = new Discord.MessageEmbed()
		embed.setDescription('These are my commands')
    embed.addField('add discord.js-paiginton','test')
		/*
		message.channel.send(embed)
				const embed = new Discord.MessageEmbed()
			.setTitle('')
			.setColor('RANDOM')
			.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
			.setDescription('')
			.addField('Page:', '')
			.addField('Page:', '')
			.addField('Page:', '');
		const p1 = new Discord.MessageEmbed()
			.setTitle('Bot Help Menu')
			.setDescription('Page: Moderation')
			.setColor('RANDOM')
			.addField('Ban', 'User / Bot')
			.addField('purge', 'ammount of Messges 100')
			.addField('nuke', 'ereases all the messages of a channel')

		const p2 = new Discord.MessageEmbed()
			.setTitle('Bot Help Menu')
			.setDescription('Page: Fun')
			.addField('github', 'search up a coder from github')
			.addField('ascii','this will make your text bubble')
			.addField('whois', 'Information about a user')
			.addField('screenshot', 'this will screenshot a webpage')
			.addField('youtube', 'ID of voice channel')
			.addField('npm', 'Search a NODEJS package')
			.addField('betrayal', 'A Discord Game supported only on pc')
			.addField('fishington', 'A Discord Game supported only on pc')
			.addField('clyde', 'Say something as the discord  secret mascot clyde')
			.addField('pokernight', 'A Discord Game supported only on pc not functoning')
			.setColor('RANDOM')
		const p3 = new Discord.MessageEmbed()
			.setTitle('Bot Help Menu')
			.setDescription('Page: Uttilty')
			.setColor('RANDOM')
			.addField('info','info about a bot')
			.addField('serverinfo', 'info about a server')
            .addField('uptime', 'Tells how long the bots been online')
		pages = [
			embed,
			p1,
			p2,
			p3
		] */

	}
}