const Discord = require("discord.js");

exports.run = (client, msg) => {
  let botEmbed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .addField("Bot Name", client.user.username)
    .addField("What am I", "A dick")
    .addField("Created On", client.user.createdAt);
  return msg.channel.send(botEmbed)
};
