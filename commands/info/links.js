/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'links',
	category: 'Info',
	description: 'Returns the bot\'s links.',
	aliases: ['link', 'invite'],
	usage: 'links',
	run: async (client, message, args) => {
		const pEmbed = new MessageEmbed()
			.setTitle(`${client.user.username}'s Links`)
			.setDescription(`Here are all the related links to${client.user.username}!`)
			.setColor('BLUE')
			.addFields(
				{ name: 'Invite link', value: '[Invite](http://tiny.cc/TavernKeeper)', inline: true },
				{ name: 'Website', value: '[Website](http://tavernkeeper.ml/)', inline:true },
				{ name: 'Support Server', value: '[Discord Server](https://discord.gg/jMpw3jw)', inline: true },
				{ name: 'Discord Boats', value: '[Vote](https://discord.boats/bot/722054700308103200)', inline:true },
				{ name: 'Discord Bots', value: '[Vote](https://discord.bots.gg/bots/722054700308103200)', inline:true },
				{ name: 'DBots', value: '[Vote](https://dbots.co/bots/722054700308103200)', inline:true },
			);
		message.channel.send(pEmbed);
	},
};