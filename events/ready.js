module.exports = async client => {
  console.log(`The bot ${client.user.username} has arrived!`);
  client.user.setActivity("im (mildly) useless sorry").catch(console.error)
};
