const Client = require('../structures/Client');
const Discord = require('discord.js')


module.exports = {
	name: "report",
	description: "report a bug",
  cooldown: 3,
  usage: 'report <issue> <expected result> <current result>',
	/**
	 * @param {Client} client
	 * @param {message} message
	 * @param {string[]} args
	 */
run: async (client, message, args) => {
  let issue = args[0]
  let ei = args[1]
  let ai = args[2]
  if(!issue) {
    message.reply('issue?')
  } else if(!ei) {
    message.reply('What is your desired reult?')
  } else if(!ai) {
    message.reply('What do you see?')
  } else{
let embed = new Discord.MessageEmbed()
  .setTitle('New Bug report')
.setDescription(`**A New Bug Report**`)
.setColor('#2C2F33')
.addField('Isssue', `${issue}`)
.addField('Expected issue', `${ei}`)
.addField('Actual ', `${ai}`)
.addField('Submitter', `<@${message.author.id}>`)
client.channels.cache.get('840679467748032564').send(embed) 
  }
    }
}