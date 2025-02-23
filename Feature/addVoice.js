const { addVoice } = require("../libs/command")
const {bot, Text}= require(`../libs/libs`)


const addVoices = () => {
    bot.on(Text, (msg) => {
        if (addVoice.test(msg.content)){
            const isName = msg.content.split(" ")
            const isChannelId = msg.channelId
            if(isChannelId === "1337021363902218303" && isName !== undefined && isName[2] < 25){
                msg.guild.channels.create( {
                    name : `${isName[1]}`,
                    type: 2,
                    parent: "1332237836820414614",
                    userLimit : 2
                }).then(
                    msg.channel.send(`berhasil membuat room bernama ${isName[1]} dengan billing ${isName[2]} jam`)
                ).catch(err => {
                    console.error(err);
                }).then(
                    channel => {
                        
                            if (channel.members.size === 0) {
                                setTimeout(() => {   
                                    channel.delete();
                                    msg.channel.send(`Channel ${isName[1]} telah dihapus karena billing sudah habis.`);
                                }, isName[2] * 3600000)
                        }}
                ).catch(err => {
                    console.error(err);
                    msg.channel.send("Terjadi kesalahan saat bergabung ke channel: " + err.message)}
                    )   
                }else{
                    msg.channel.send("terjadi kesalahan saat membuat channel: maksimal billing adalah 24 jam atau Gunakan &help untuk bantuan lebih lanjut " )
                }
            }
        }
    )   
}
module.exports= {addVoices}