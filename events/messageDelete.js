const { MessageEmbed } = require("discord.js");

module.exports = async (message) => {
  try {
    let embed = new MessageEmbed()
      .setAuthor(`${message.author.tag}` , `${message.author.displayAvatarURL()}`)
      .setColor(`RED`)
      .setDescription(
        `**Message deleted in <#${message.channel.id}>**\n${message.content}`
      )
      .setTimestamp()
      .setFooter(`User ID: ${message.author.id}`)
    let channel = message.guild.channels.cache.find(
      (ch) => ch.id === "720997712602071098"
    );
    if (!channel) return;
    channel.send(embed);
  } catch (e) {}
};