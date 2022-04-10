const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const Language = require('../language');
if (Config.WORKTYPE == 'private') {

kichu.addCommand({pattern: 'stiker ?(.*)', fromMe: false, deleteCommand: true, desc: Lang.MSG_DESC}, (async (message, match) => {
    var r_text = new Array ();
    r_text[1] = "Invalid Command, Use  *.sticker*  To Convert Image or Video to Sticker.";
    var i = Math.floor(2*Math.random())
    await message.client.sendMessage(
        message.jid,(r_text[i]), MessageType.text);
    }));

Kichu.addCommand({pattern: 'image (.*)', fromMe: true, deleteCommand: true, desc: Lang.MSG_DESC}, (async (message, match) => {
        var r_text = new Array ();
        r_text[1] = "Invalid Command. Use *.photo* To Convert Sticker To Image. Or  Use  *,img (name)* To Get Image From Google";
        var i = Math.floor(2*Math.random())
        await message.client.sendMessage(
            message.jid,(r_text[i]), MessageType.text);
        }));    
    }

if (Config.WORKTYPE == 'public') {

Kichu.addCommand({pattern: 'stiker (.*)', fromMe: true, deleteCommand: true, desc: Lang.MSG_DESC}, (async (message, match) => {
    var r_text = new Array ();
    r_text[1] = "Invalid Command, Use  *.sticker*  To Convert Image or Video to Sticker.";
    var i = Math.floor(2*Math.random())
    await message.client.sendMessage(
        message.jid,(r_text[i]), MessageType.text);
    }));

Kichu.addCommand({pattern: 'image (.*)', fromMe: true, deleteCommand: true, desc: Lang.MSG_DESC}, (async (message, match) => {
        var r_text = new Array ();
        r_text[1] = "Invalid Command. Use *.photo* To Convert Sticker To Image. Or  Use  *,img (name)* To Get Image From Google";
        var i = Math.floor(2*Math.random())
        await message.client.sendMessage(
            message.jid,(r_text[i]), MessageType.text);
        }));    
    }
