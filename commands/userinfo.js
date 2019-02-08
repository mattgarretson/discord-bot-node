/*
Going to use the user_id's to better communicate with specific people in the future
this is probably going to get changed a lot

 */
const db = require("../database");

exports.run = async (client, msg) => {
  msg.guild.members.map(x => {
    let sql = `INSERT IGNORE INTO users (username, user_id, guild_name) 
        VALUES ('${x.user.username}', '${x.user.id}', '${x.guild.name}')`;
    db.query(sql, (err, res) => {
      if (err) throw err;
      console.log(res.affectedRows)
    });
  });
  msg.delete().catch(console.error)
};
