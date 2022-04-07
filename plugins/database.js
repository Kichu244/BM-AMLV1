const WhatsAlexa = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

WhatsAlexa.addCommand({pattern: 'bot', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message! Kichu.
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: "🇴 🇼 🇳 🇪 🇷 \n\n𝑪𝒓𝒆𝒂𝒕𝒐𝒓:- 𝑲𝒊𝒄𝒉𝒖.\n𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 :-𝑲𝒊𝒄𝒉𝒖, 𝑨𝒇𝒏𝒂𝒏 𝑷𝑳𝑲, 𝑨𝒎𝒂𝒍𝒔𝒆𝒓.\n\n𝑨𝒏𝒚 𝑫𝒐𝒖𝒃𝒕𝒔 𝑶𝒓 𝑰𝒔𝒔𝒖𝒆𝒔, 𝑫𝒐𝒏'𝒕 𝑭𝒐𝒓𝒈𝒆𝒕 𝑻𝒐 𝑪𝒐𝒏𝒕𝒂𝒄𝒕 𝑪𝒓𝒆𝒂𝒕𝒐𝒓.\n\n𝑻𝒚𝒑𝒆 *.owner* 𝑭𝒐𝒓 𝑶𝒘𝒏𝒆𝒓 𝑫𝒆𝒕𝒂𝒊𝒍𝒔.\n\n𝑻𝒚𝒑𝒆 *.alive* 𝑭𝒐𝒓 𝑺𝒐𝒎𝒆 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏.\n\n𝑻𝒚𝒑𝒆 *.menu* 𝑶𝒓 *.list* 𝑭𝒐𝒓 𝑪𝒐𝒎𝒎𝒂𝒏𝒅 𝑳𝒊𝒔𝒕.\n\n\n         𝗧𝗛𝗔𝗡𝗞 𝗬𝗢𝗨"}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: "🇬 🇮 🇹  🇱 🇮 🇳 🇰 \n\n✈︎ 𝑯𝒆𝒍𝒍𝒐 𝑩𝒓𝒐/𝑺𝒊𝒔,\n        𝑰'𝒎 𝑹𝒆𝒂𝒍𝒍𝒚 𝑺𝒐𝒓𝒓𝒚.\n\n⭑ 𝑮𝑰𝑻 𝑳𝑰𝑵𝑲 𝑰𝑺 𝑵𝑶𝑻 𝑨𝑽𝑨𝑰𝑳𝑨𝑩𝑳𝑬 ⭑\n\n𝑩𝒐𝒕𝒎𝒘𝒐𝒍 𝑮𝒊𝒕 𝑰𝒔 𝑷𝒓𝒊𝒗𝒂𝒕𝒆,𝑶𝒏𝒍𝒚 𝑪𝒓𝒆𝒂𝒕𝒐𝒓 𝑪𝒂𝒏 𝑨𝒄𝒄𝒆𝒔𝒔 𝑶𝒓 𝑫𝒆𝒑𝒍𝒐𝒚.\n\n" }, type: 1},
        {buttonId: 'id3', buttonText: {displayText: "🇧 🇴 🇹 \n\n𝑩𝒐𝒕𝒎𝒘𝒐𝒍 𝑰𝒔 𝑨 𝑴𝒐𝒅𝒊𝒇𝒊𝒆𝒅 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 𝑶𝒇 𝑨𝒎𝒂𝒍𝒔𝒆𝒓 𝑨𝒏𝒅 𝑾𝒉𝒂𝒕𝒔𝒂𝒔𝒆𝒏𝒂.\n   𝑰'𝒎 𝑨 𝑷𝒖𝒃𝒍𝒊𝒄 𝑩𝒐𝒕 𝒃𝒖𝒕 𝑮𝒊𝒕 𝑰𝒔 𝑷𝒓𝒊𝒗𝒂𝒕𝒆.\n\n✈︎  𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 𝑲𝒊𝒄𝒉𝒖\n✈︎  𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒅 𝑩𝒚 𝑲𝒊𝒄𝒉𝒖, 𝑨𝒇𝒏𝒂𝒏 𝑷𝑳𝑲, 𝑨𝒎𝒂𝒍𝒔𝒆𝒓.\n\n" }, type:1},
      ]
      
      const buttonMessage = {
          contentText: 'ꪶ  ⭑  𝛫 ͓͢     𝛪      𝐶      𝛨      𝑈  ⭑  ꫂ\n*~====================================~*\n\n🃏 ᴛɪᴍᴇ   : ```' + plk_say + '```\n🍒 ᴅᴀᴛᴇ : ```' + plk_here + '```\n\n🃏 ᴄʟɪᴄᴋ ᴍᴇɴᴜ ᴀɴᴅ ᴇɴᴊᴏʏ ᴛʜᴇ ʙᴏᴛ\n',
          footerText: '⭑ 𝑩𝒐𝒕𝒎𝒘𝒐𝑳 ⭑',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));

