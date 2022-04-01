const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/ygQuzYd.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot Name: BOTMWOL*
✈︎ 𝐎𝐰𝐧𝐞𝐫||𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫||𝐂𝐫𝐞𝐚𝐭𝐨𝐫
 𝑪𝒐𝒏𝒕𝒂𝒄𝒕:- https://wa.me/918547487332
 
✈︎ 𝑮𝑰𝑻𝑯𝑼𝑩 𝑳𝑰𝑵𝑲 𝑰𝑺 𝑵𝑶𝑻 𝑨𝑽𝑨𝑰𝑳𝑨𝑩𝑳𝑬

     𝑰 𝒉𝒐𝒑𝒆 𝒀𝒐𝒖 𝑬𝒏𝒋𝒐𝒚𝒆𝒅 𝑾𝒊𝒕𝒉 𝑩𝒐𝒕𝒎𝒘𝒐𝒍
               𝑻𝒉𝒂𝒏𝒌 𝒀𝒐𝒖
`}) 

}));
