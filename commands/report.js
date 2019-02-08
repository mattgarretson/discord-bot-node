const Discord = require("discord.js");

exports.run = async (client, msg, [mention, ...reason]) => {
  let rUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(mention));
  if (!rUser) return msg.channel.send("Couldn't find user.");

  let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reported User", `${rUser.id}`)
    .addField("Reported By", `${msg.author} with ID: ${msg.author.id}`)
    .addField("Channel", msg.channel)
    .addField("Time", msg.createdAt)
    .addField("Reason", reason);
  let reportsChannelName = "bot-test1";
  let reportsChannel = msg.guild.channels.find(channel => channel.name === reportsChannelName);
  if (!reportsChannel) return msg.channel.send("Couldn't find reports channel");

  msg.delete().catch(console.error);
  reportsChannel.send(reportEmbed);
};

exports.help = {
  name: "report"
};
