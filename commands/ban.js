const Discord = require("discord.js");

exports.run = async (client, msg, [mention, ...reason]) => {
  let bUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(mention));
  if (!bUser) return msg.channel.send("Couldn't find user");
  if (!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("No can do paL!");
  if (bUser.hasPermission("BAN_MEMBERS")) return msg.channel.send("That person can't be kicked.");

  let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#BC0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${msg.author.id}> with ID ${msg.author.id}`)
    .addField("Banned In", msg.channel)
    .addField("Time", msg.createdAt)
    .addField("Reason", reason);

  let incidentsChannelName = "bot-test-2";
  let banChannel = msg.guild.channels.find(channel => channel.name === incidentsChannelName);
  if (!banChannel) return msg.channel.send(`Can't find incidents channel named ${incidentsChannelName}`);

  msg.guild.member(bUser).ban(reason).catch(console.error);
  banChannel.send(banEmbed);
};
