exports.run = async (client, msg) => {
  let user = msg.author;
  user.send("oi");
  console.log(`sent ${user.username} a pm`)
};
