const { bot, Text } = require("../libs/libs")
const { AIchat } = require ('../libs/command')

require("dotenv").config();
const {Groq} = require("groq-sdk");

const groq = new Groq({ apiKey: `${process.env.APIKEY_GROQ}` });

const AI = () => {
    
    bot.on(Text, async (msg) => {
    const chat = msg.content.toLowerCase()
    if(AIchat.test(msg.content)){   
        if(chat !== null){
        const getGroqChatCompletion = async () => {
        return groq.chat.completions.create({
            messages: [
            {
                role: "user",
                content: chat,
            },
            ],

            model: "llama-3.3-70b-versatile",
            temperature: 0.3,
            max_completion_tokens: 500,
            top_p: 1,
            stop: null,
            stream: false,
        });
        }
        
        try {
            const chatCompletion = await getGroqChatCompletion();
            msg.channel.send(chatCompletion.choices[0]?.message?.content)
        } catch (error) {
            msg.channel.send("Terjadi kesalahan saat mengambil kompletasi chat: ", error);
        }
        }else{
            msg.channel.send("MAAF MUNGKIN FORMAT ANDA SALAH")
        }
    }
    })
}

module.exports = { AI }