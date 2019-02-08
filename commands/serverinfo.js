const Discord = require("discord.js");

exports.run = async (client, msg) => {
  let serverIcon = msg.guild.iconURL;
  let serverEmbed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(serverIcon)
    .addField("Server Name", msg.guild.name)
    .addField("Server ID", msg.guild.id)
    .addField("Created On", msg.guild.createdAt)
    .addField("You Joined", msg.member.joinedAt)
    .addField("Total Members", msg.guild.memberCount);
  return msg.channel.send(serverEmbed);
};
