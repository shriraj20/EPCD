const Client = require('../structures/Client');
const Discord = require('discord.js')
const { prefix } = require('.././config.json');
const ytdl = require('ytdl-core');


module.exports = {
	name: "music",
	description: "music",
  usage: 'music',
	/**
	 * @param {Client} client
	 * @param {message} message
	 * @param {string[]} args
	 */
run: async (client, message, args) => {
voice.join().then(connection => {
	const stream = ytdl('https://www.youtube.com/watch?v=72agGC5b_Yo', { filter: 'audioonly' });
	const dispatcher = connection.play(stream);
	
	dispatcher.on('finish', () => voiceChannel.leave());
})
    }
}