require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const bot = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const isAdmin = process.env.ADMIN

const prefix = "&"

const Token = process.env.TOKEN
const Start = () => {
    bot.login(Token)
}

const Text = "messageCreate"
const maaf = `🚫👮‍♂️ Maaf, akses bot hanya bisa digunakan oleh ADMIN 👮‍♂️🚫`;



module.exports = {bot, prefix, Token, isAdmin, Start ,Text, maaf};

