const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/ygQuzYd.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot Name: Botmwol*

*Creator number : wa.me/918547487332?text=Hi%20Kichu%20Mon.%20*

 *To check update .update   To update Bot .update now*
     
 *𝐈𝐧𝐭𝐚𝐠𝐫𝐚𝐦 𝐈𝐝: https://www.instagram.com/invites/contact/?i=1iehqmafm9pdc&utm_content=mktgo1n*


 𝐆𝐢𝐭𝐇𝐮𝐛 𝐋𝐢𝐧𝐤 𝐍𝐨𝐭 𝐀𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞.

 *Botmwol is a chatbot.Enjoy with BotMwol🥰*
`}) 

}));
