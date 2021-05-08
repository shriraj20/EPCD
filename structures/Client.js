const {
	MessageEmbed,
	Client,
	Collection
} = require('discord.js')
const figlet = require('figlet')
const chalk = require('chalk')
const config = require('../config.json');


class EPCDCLIENT extends Client {
	constructor() {
		super();
		//Dependencies
		this.path = require('path');
		this.discord = require('discord.js');
		this.fs = require('fs');
		//Collections
		this.commands = new Collection();
		this.threads = new Collection();
		//Constants
		this.prefix = "";
	}
	commandHandler(path) {
		this.fs.readdirSync(this.path.normalize(path)).map((f) => {
			const File = require(this.path.join(__dirname, `..`, path, f));
			this.commands.set(File.name, File);
		});
	}
	getCommand(cmd) {
		return this.commands.has(cmd) ? this.commands.get(cmd) : false
	}
	start(token, path) {
		this.commandHandler(path);
		this.login(token);
		this.on('ready', () => {
			figlet(`Ready!`, function(err, data) {
				if (err) {
					console.log('Something went wrong...');
					console.dir(err);
					return;
				}
				console.log(chalk.green(data))
			});
		});

		this.on('message', async (message) => {
			if (message.guild) {

  this.prefix = config.prefix
				if (message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(this.prefix)) return;
				const args = message.content.slice(this.prefix.length).trim().split(/ +/g);
				const cmd = args.shift().toLowerCase();
				const command = this.getCommand(cmd);
				if (command) return command.run(this, message, args).catch(console.error);
			}
		});
	}
}

module.exports = EPCDCLIENT;


