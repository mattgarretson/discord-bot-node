const Discord = require("discord.js");

exports.run = async (client, msg, [mention, ...reason]) => {
  let kUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(mention));
  if (!kUser) return msg.channel.send("Couldn't find user");
  if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("Don't be so ambitious.");
  if (kUser.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("That person can't be kicked.");

  let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#E56B00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${msg.author.id}> with ID ${msg.author.id}`)
    .addField("Kicked In", msg.channel)
    .addField("Time", msg.createdAt)
    .addField("Reason", reason);

  let incidentsChannelName = "bot-test-2";
  let kickChannel = msg.guild.channels.find(channel => channel.name === incidentsChannelName);
  if (!kickChannel) return msg.channel.send(`Can't find incidents channel named ${incidentsChannelName}`);

  msg.guild.member(kUser).kick(reason);
  kickChannel.send(kickEmbed);
};

exports.help = {
  name: "kick"
};
