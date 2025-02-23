const {bot, Text, prefix, isAdmin, maaf } = require(`../libs/libs`)
const {Help} = require(`../libs/command`)

const Helps = () => {
    bot.on(Text, (msg) => {
        if (Help.test(msg.content.toLowerCase())) {
            const user = msg.member.roles.cache.map(role => role.id).join(", ")
            if (user.includes(isAdmin)){
                const embed = {
                    color: 0x0099ff,
                title: 'Bantuan Bot',
                description: 'Berikut adalah beberapa perintah yang dapat Anda gunakan:',
                author : {
                name : `HELP FOR 𝑬𝑵𝑰𝑮𝑴𝑨 OFFICIAL BOT`,
                icon_url : "https://cdn.discordapp.com/attachments/1332249146089799791/1332250086062821407/download.png?ex=67a46414&is=67a31294&hm=bb3292dcd16452877ace3bea320e7981f406079ec7e6a995748e6918735b7d98&"},
                fields: [
                    {
                        name: `${prefix}ping`,
                        value: 'Menampilkan respons bot.',
                    },
                    {
                        name: `${prefix}make`,
                        value: 'Membuat voice channel di <#1337021363902218303> dengan maksimal billng adalah 24 jam. contoh penggunaan {&make NAMA 2 JAM } maka anda membuat room dengan billing 2 jam ',
                    },
                    {
                        name: `${prefix}admin`,
                        value: 'Menampilkan informasi admin.',
                    },
                    {
                        name: `${prefix}warn`,
                        value: 'Memberikan peringatan kepada pengguna.',
                    },
                    {
                        name: `${prefix}ar`,
                        value: 'Menambahkan role kepada pengguna. contoh penggunaan {&ar @USER @ROLE}',
                    },
                    {
                        name : `${prefix}rm`,
                        value : `Menghapus role kepada pengguna. contoh penggunaan {&rm @USER @ROLE}`,
                    }
                ],
                timestamp: new Date(),
                footer: {
                    text: 'Terima kasih telah menggunakan bot kami!',
                },
            };
            msg.channel.send({ embeds: [embed] });
            }
            else{
            msg.channel.send(maaf)
            }
        }
    })
}

module.exports= {Helps}