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
// send a buttons message! Amalser.
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: "OWN\n\n*I'm A Public Bot*\n\n*Created By Kichu*\n\n*Bot Name: Bot Mwol*\n\n*Developer :- Amalser*\n\n*I'm A Modified Version Of Amalser.*\n\n*Git Link of Bot Mwol :- Not Available*\n*Any Doubts, Contact My Creator.*\n\n*Type .owner for Creator Details*\n\n*Type .alive for Some Information*\n\n*Type .menu for Command List*\n\n*Thank You By BOT MWOL*\n\n "}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: "GIT\n\n```*Helo Bro/Sis*```\n\n```Git Hub Link Is Not Available```\n\n```_Because Bot Mwol Is Private Now._```\n\n```*Kichu(Creator)Only Can Use Me,Sorry*```\n"  }, type: 1},

      ]
      
      const buttonMessage = {
          contentText: ' ʜʏ ᴅᴜᴅᴇ....👋🏻\n\n```BOT NAME:``` *'+Config.BOT+'*\n\n🃏 ᴛɪᴍᴇ   : ```' + plk_say + '```\n🍒 ᴅᴀᴛᴇ : ```' + plk_here + '```\n\n🃏 ᴄʟɪᴄᴋ ᴍᴇɴᴜ ᴀɴᴅ ᴇɴᴊᴏʏ ᴛʜᴇ ʙᴏᴛ\n',
          footerText: '© BotMwol',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));

