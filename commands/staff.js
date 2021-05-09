const Client = require('../structures/Client');
const Discord = require('discord.js')


module.exports = {
	name: "staff",
	description: "Here is our staff and contributors list",
  cooldown: 3,
  usage: 'staff',
	/**
	 * @param {Client} client
	 * @param {message} message
	 * @param {string[]} args
	 */
run: async (client, message, args) => {  
let embed = new Discord.MessageEmbed()
  .setTitle('staff')
.setDescription(`**Here is our staff and contributors list**`)
.addField('Founders', '<@679044575377096704> <@554827199249907732>')
.addField('Owners', '<@679044575377096704> <@554827199249907732>')
.addField('Head devloper', '<@742426370541617224>')
message.reply(embed)
    }
}