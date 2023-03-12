const chalk = import('chalk');
const moment = require("moment");
const Discord = require("discord.js");
const settings = require("../settings.json");

var prefix = settings.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("online");
  var oyun = [
    "League of Legends",
   

  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setPresence({
        activity: {
          name: oyun[random],
        },
        status: 'online',
      });
      
  }, 2 * 2500);
};