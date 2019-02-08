const ms = require("ms");

exports.run = async (client, msg, args) => {
  let toMute = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if (!toMute) return msg.reply("Couldn't find user");
  if (toMute.hasPermission("MANAGE_MESSAGES")) return msg.reply("Can't mute this user.");
  let muteRole = msg.guild.roles.find(role => role.name === "muted");
  if (!muteRole) {
    try {
      muteRole = await msg.guild.createRole({
        name: "muted",
        color: "#FFFFFF",
        permissions: []
      });
      msg.guild.channels.forEach(async channel => {
        await channel.overwritePermissions(muteRole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e)
    }
  }

  let muteTime = args[1];
  if (!muteTime) return msg.reply("You didn't specify a mute time!");

  await (toMute.addRole(muteRole.id));
  msg.reply(`<@${toMute.id}> has been muted for ${ms(muteTime)}`);

  setTimeout(function () {
    toMute.removeRole(muteRole.id).catch(console.error);
    msg.channel.send(`<@${toMute.id}> has been unmuted!`);
  }, ms(muteTime))
};

exports.help = {
  name: "tempmute"
};
