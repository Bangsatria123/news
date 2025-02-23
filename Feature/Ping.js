const {bot, isAdmin, Text, maaf}=require(`../libs/libs`)
const {Ping} =require(`../libs/command`)
const Pings = () => {
    bot.on(Text , (msg) => {
        if (Ping.test(msg.content)) {
        const senderRoles = msg.member.roles.cache.map(role => role.id).join(", ")
        if(senderRoles.includes(isAdmin)){
            msg.channel.send(`Pong! 🏓 ${msg.author.toString()}`);
        }
        else{
            msg.channel.send(maaf)
        }
        }
    })
}

module.exports= {Pings}