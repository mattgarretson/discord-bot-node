exports.run = async (client, msg, args) => {
  if (!msg.member.hasPermission("MANAGE_ROLES")) return msg.reply("Sorry you can't do that");
  let rMember = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if (!rMember) return msg.reply("Couldn't find user");

  let role = args.join(" ").slice(22);
  if (!role) return msg.reply("Specify a role!");
  let gRole = msg.guild.roles.find(guildRole => guildRole.name === role);
  if (!gRole) return msg.reply("Couldn't find that role");

  if (rMember.roles.has(gRole.id)) return msg.reply("They don't have that role.");
  await (rMember.removeRole(gRole.id));

  try {
    rMember.send(`RIP, you have lost the ${gRole.name} role`)
  } catch (e) {
    msg.channel.send(`Oh No to <@${rMember.id}>, the role of ${gRole.name} has been removed from them.
        We tried to DM them, but their DMs are locked.`)
  }

};

exports.help = {
  name: "removerole"
};