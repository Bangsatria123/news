const {Add, Remove} = require(`../libs/command`)
const {bot, isAdmin, Text} = require(`../libs/libs`)

const Addrole = () => {
    bot.on(Text , (msg) => {
        if(Add.test(msg.content)) {
        const a = msg.content.split(" ")[2]
        console.log(a)
        const b = a.match(/<@&(\d+)>/)
        const isMention = msg.mentions.members.first()
        const roles = msg.member.roles.cache.map(role => role.id).join(", ")
        if(roles.includes(isAdmin)){
            isMention.roles.add(`${b[1]}`)
            msg.channel.send(`berhasil menambahkan role ${a} ke ${isMention.toString()}`)
        }
        else{
            msg.channel.send("MAAF ANDA BUKAN BAGIAN DARI ADMIN")
        }
        }
    })
}

const RemoveRole = () => {   
    bot.on(Text, (msg) => {
        if(Remove.test(msg.content)) {
            const isMessage = msg.content.split(" ")
            const isMention = msg.mentions.members.first()
            const isSender = msg.member.roles.cache.map(role => role.id).join(", ")

            if(isSender.includes(isAdmin)) {
                const isRoles = isMention.roles.cache.map(role => role.id).join(", ")
                const isRemoved = isMessage[2].match(/<@&(\d+)>/)[1]
                console.log(isRemoved)
                if(isRoles.includes(isAdmin)){
                    msg.channel.send("MAAF PENGGUNA MEMILIKI AKSES ADMIN DAN TIDAK DAPAT DILEPAS MENGGUNAKAN BOT!!")
                }
                else if(isRoles.includes(isRemoved)){   
                    isMention.roles.remove(isRemoved)
                    msg.channel.send(`BERHASIL MENGHAPUS ROLE ${isMessage[2]} DARI ${isMention}`)
                }
                else if (!isRoles.includes(isRemoved)) {
                    msg.channel.send(`MAAF TERJADI KESALAHAN DALAM MELEPAS ROLE PASTIKAN ROLE TERSEBUT DIMILIKI OLEH PENGUNA ATAU FORMAT ANDA SALAH,ANDA DAPAT MENGGUNAKAN FORMAT ${prefix}rm @ROLE @MENTION . ATAU JIKA ERROR MASIH BERLANJUT SILAHKAN HUBUNGI <@379860075721785345>`)
                }
            }
            
        }
    })
}

module.exports = {Addrole, RemoveRole}