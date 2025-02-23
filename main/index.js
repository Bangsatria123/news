const { bot , Start } = require("../libs/libs");
const { Helps } = require("../Feature/help");
const {Addrole, RemoveRole} = require("../Feature/role");
const { Pings } = require("../Feature/Ping");
const { addVoices } = require("../Feature/addVoice");
const { Telegram } = require("../libs/tele");
const { AI } = require("../Feature/AI");

const begin = () => {


Start();
bot.once("ready", () => {
  console.log(`✅ Bot ${bot.user.tag} sudah online!`);
});

Pings()
Addrole()
RemoveRole()
Helps()
addVoices()
AI()
}

module.exports = {begin}
// NOTE MENAMBAH FUNGSI FUNGSI ADMIN SERTI NAMBAH DAN MELEPAS ROLE DAN FUNGSI FUNGSI LAIN