const TelegramBot = require("node-telegram-bot-api")
const { init, video } = require("./command")
const axios = require("axios")
require(`dotenv`).config()
const TOKEN = `${process.env.TELEGRAM_TOKEN}`
const apikey = `${process.env.APIKEY_OMDB}`
const bot = new TelegramBot(TOKEN, {polling: true})
const getMovieData = async (query) => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${query}`);
    return response.data;
}
const getMovieDatas = async(query) => {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&t=${query}`);
    return res.data
}

const Telegram = () => {
    bot.onText(init, async (msg) => {
        const Chatid = msg.chat.id;
        bot.sendMessage(Chatid, "helloworld");
        const movieName = msg.text.split(" ")[1];
        const movieData = await getMovieData(movieName);
        
        if (movieData && movieData.Search) {
            for(let i = 0; i < movieData.Search.length; i++){
                const url = movieData.Search[i].Poster;
                const Datas = await getMovieDatas(movieData.Search[i].imdbID)
                console.log(Datas)
                bot.sendPhoto(Chatid, url, {caption: movieData.Search[i].Title});

            }
        } else {
            bot.sendMessage(Chatid, "Film tidak ditemukan.");
        }
    })
}

module.exports = { Telegram };

