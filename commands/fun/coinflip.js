/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');
const prefix = process.env.prefix;


module.exports = {
	name: 'coinflip',
	category: 'fun',
	description: 'Flip a coin and see what you get. Heads or Tails?',
	aliases: ['cf', 'coinf'],
	usage: `${prefix}coinflip`,
	run: async (client, message, args) => {
		const responses = ['Heads', 'Tails'];
		const response =
		responses[Math.floor(Math.random() * responses.length)];
		message.channel.send(' Flipping...').then((msg) => {
			const Embed = new MessageEmbed()
				.setTitle('You filpped a . .')
				.setColor('BLUE')
				.setDescription(
					`${response}!`,
				);
			msg.edit(Embed);
		});
	},
};