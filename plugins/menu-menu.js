import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {        
let vn = './media/menu.mp3'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
  let pp = './Menu2.jpg'
//let pp = gataVidMenu.getRandom()
await conn.sendMessage(m.chat, {
        text: `*Hey* @${m.sender.split`@`[0]}
𝗘𝗻𝘃𝗶𝗮𝗻𝗱𝗼 𝗺𝗲𝗻𝘂📍. . . 👀

𝙎𝙚𝙗𝙖𝙨𝘽𝙤𝙩-𝙈𝘿.`,
        contextInfo: { 
          mentionedJid: [m.sender],
        }
      }, { quoted: m })

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let menu = `┏━━━━━━━━━━━━━━━━┓
┣┅✣ 𝗛𝗼𝗹𝗮⚡, @user ⚡
┣┅✣ 𝗘𝗻 𝗴𝗿𝘂𝗽𝗼𝘀: 𝙾𝚆𝙽𝙴𝚁  
┣┅✣ 𝗢𝘄𝗻𝗲𝗿: 𝚂𝙴𝙱𝙰𝚂
┣┅✣ 𝘾𝙧𝙚𝙖𝙙𝙤𝙧:𝙺𝙰𝚁𝙸𝙼
┣┅✣ 𝗡𝘂𝗺𝗲𝗿𝗼:+591 68683798
┣┅✣ 𝗙𝗲𝗰𝗵𝗮: ${date}
┣┅✣ 𝙃𝙚𝙧𝙢𝙤𝙨𝙤 𝗱𝗶𝗮 𝗽𝗮𝗿𝗮 𝘁𝗶
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃⏤͟͟͞𝑰𝑵𝑭𝑶 𝑫𝑬𝑳 𝑼𝑺𝑼𝑨𝑹𝑰𝑶 
┣━━━━━━━━━━━━━━━
┣🕹️𝙉𝙞𝙫𝙚𝙡: ${level}
┣✨𝙀𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖: ${exp}
┣🌐𝙍𝙖𝙣𝙜𝙤: ${role}
┣💎𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨: ${limit}
┣⚡𝙎𝙚𝙗𝙖𝙨𝘾𝙤𝙞𝙣𝙨: ${money}
┣🔮𝙏𝙤𝙠𝙚𝙣𝙨: ${joincount}
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃⏤͟͟͞͞𝙎𝙊𝙇𝙐𝘾𝙄𝙊𝙉 𝙊 𝙀𝙍𝙍𝙊𝙍𝙀𝙎
┣━━━━━━━━━━━━━━━
┣🗃 𝐌𝐞𝐧𝐬𝐚𝐣𝐞𝐬 𝐞𝐧 𝐞𝐬𝐩𝐞𝐫𝐚
┣🗃 𝐅𝐢𝐦𝐠𝐞𝐱𝐢𝐦𝐚𝐠𝐞𝐬
┣🗃 𝐌𝐞𝐧𝐬𝐚𝐣𝐞𝐬 𝐞𝐧 𝐞𝐬𝐩𝐞𝐫𝐚 (𝚘𝚠𝚗𝚎𝚛)
┣🗃 𝐝𝐬𝐨𝐰𝐧𝐞𝐫
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞𝑰𝑵𝑭𝑶 𝑩𝑶𝑻
┣━━━━━━━━━━━━━━━
┣📋 𝐡𝐞𝐥𝐩
┣📋 𝐓𝐲𝐜
┣📋 𝐆𝐫𝐮𝐩𝐨𝐬
┣📋 𝐄𝐬𝐭𝐚𝐝𝐨
┣📋 𝐈𝐧𝐟𝐨𝐛𝐨𝐭
┣📋 𝐒𝐩𝐞𝐞𝐝𝐭𝐞𝐬𝐭
┣📋 𝐃𝐨𝐧𝐚𝐫
┣📋 𝐎𝐰𝐧𝐞𝐫
┣📋 𝐒𝐜𝐫𝐢𝐩𝐭
┣📋 𝐁𝐨𝐭 (𝙿𝚛𝚎𝚏𝚒𝚓𝚘 ".")
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃⏤͟͟͞͞𝑰𝑵𝑺𝑻𝑨𝑳𝑨𝑹 𝑬𝑳 𝑩𝑶𝑻
┣━━━━━━━━━━━━━━━
┣🚀 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫𝐛𝐨𝐭
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝑺𝑬𝑹𝑩𝑶𝑻 - 𝑱𝑨𝑫𝑰𝑩𝑶𝑻
┣━━━━━━━━━━━━━━━
┣💻 𝐒𝐞𝐫𝐛𝐨𝐭
┣💻 𝐒𝐭𝐨𝐩
┣💻 𝐁𝐨𝐭𝐬
┗━━━━━━━━━━━━━━━━┛
 
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝙅𝙐𝙀𝙂𝙊𝙎
┣━━━━━━━━━━━━━━━
┣🎪𝐅𝐚𝐤𝐞 𝚃𝚎𝚡𝚝𝚘𝟷 @𝚝𝚊𝚐 𝚝𝚎𝚡𝚝𝚘𝟸
┣🎪𝐏𝐩𝐭 𝙿𝚊𝚙𝚎𝚛 𝚙𝚒𝚎𝚍𝚛𝚊 𝚝𝚒𝚔𝚎𝚛𝚊
┣🎪𝐏𝐫𝐨𝐬𝐭𝐢𝐭𝐮𝐭𝐨 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪𝐏𝐫𝐨𝐬𝐭𝐢𝐭𝐮𝐭𝐚 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪𝐆𝐚𝐲𝟐  𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪𝐋𝐞𝐬𝐛𝐢𝐚𝐧𝐚 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪𝐏𝐚𝐣𝐞𝐫𝐨 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪𝐏𝐚𝐣𝐞𝐫𝐚 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪𝐏𝐮𝐭𝐨 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪𝐏𝐮𝐭𝐚 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪𝐌𝐚𝐧𝐜𝐨 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪𝐌𝐚𝐧𝐜𝐚 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪𝐑𝐚𝐭𝐚 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪𝐋𝐨𝐯𝐞 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪𝐃𝐨𝐱𝐞𝐚𝐫 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪𝐏𝐫𝐞𝐠𝐮𝐧𝐭𝐚 𝚃𝚎𝚡𝚝𝚘
┣🎪𝐒𝐮𝐢𝐭𝐩𝐯𝐩 @𝚝𝚊𝚐
┣🎪𝐒𝐥𝐨𝐭 𝙰𝚙𝚞𝚎𝚜𝚝𝚊
┣🎪𝐓𝐭𝐭 𝙽𝚘𝚖𝚋𝚛𝚎 𝚜𝚊𝚕𝚊
┣🎪𝐃𝐞𝐥𝐭𝐭𝐭
┣🎪𝐀𝐜𝐞𝐫𝐭𝐢𝐣𝐨
┣🎪𝐒𝐢𝐦𝐢 𝚃𝚎𝚡𝚝𝚘
┣🎪𝐓𝐨𝐩 𝚃𝚎𝚡𝚝𝚘
┣🎪𝐓𝐨𝐩𝐠𝐚𝐲𝐬
┣🎪𝐓𝐨𝐩𝐨𝐭𝐚𝐤𝐮𝐬
┣🎪𝐅𝐨𝐫𝐦𝐚𝐫𝐩𝐚𝐫𝐞𝐣𝐚
┣🎪𝐕𝐞𝐫𝐝𝐚𝐝
┣🎪𝐑𝐞𝐭𝐨
┣🎪𝐂𝐚𝐧𝐜𝐢𝐨𝐧
┣🎪𝐏𝐢𝐬𝐭𝐚
┣🎪𝐀𝐤𝐢𝐧𝐚𝐭𝐨𝐫
┣🎪𝐖𝐨𝐫𝐝𝐟𝐢𝐧𝐝
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃⏤͟͟͞͞𝑻𝑹𝑼𝑬 - 𝑭𝑨𝑳𝑺𝑬
┣━━━━━━━━━━━━━━━
┣🌹 𝗧𝗿𝘂𝗲 𝐰𝐞𝐥𝐜𝐨𝐦𝐞
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐰𝐞𝐥𝐜𝐨𝐦𝐞
┣🌹 𝗧𝗿𝘂𝗲 𝐦𝐨𝐝𝐨𝐡𝐨𝐫𝐧𝐲
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐦𝐨𝐝𝐨𝐡𝐨𝐫𝐧𝐲
┣🌹 𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤
┣🌹 𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤𝟐
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤𝟐
┣🌹 𝗧𝗿𝘂𝗲 𝐝𝐞𝐭𝐞𝐜𝐭
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐝𝐞𝐭𝐞𝐜𝐭
┣🌹 𝗧𝗿𝘂𝗲 𝐚𝐮𝐝𝐢𝐨𝐚
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐚𝐮𝐝𝐢𝐨𝐬
┣🌹 𝗧𝗿𝘂𝗲 𝐚𝐮𝐭𝐨𝐬𝐭𝐢𝐜𝐤𝐞𝐫
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐚𝐮𝐭𝐨𝐬𝐭𝐢𝐜𝐤𝐞𝐫
┣🌹 𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐯𝐢𝐞𝐰𝐨𝐧𝐜𝐞
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐯𝐢𝐞𝐰𝐨𝐧𝐜𝐞
┣🌹 𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐭𝐨𝐱𝐢𝐜
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐭𝐨𝐱𝐢𝐜
┣🌹 𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐭𝐫𝐚𝐛𝐚
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐭𝐫𝐚𝐛𝐚
┣🌹 𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐚𝐫𝐚𝐛𝐞𝐬
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐚𝐫𝐚𝐛𝐞𝐬
┣🌹 𝗧𝗿𝘂𝗲 𝐦𝐨𝐝𝐨𝐚𝐝𝐦𝐢𝐧
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐦𝐨𝐝𝐨𝐚𝐝𝐦𝐢𝐧
┣🌹 𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐝𝐞𝐥𝐞𝐭𝐞
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐝𝐞𝐥𝐞𝐭𝐞
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┣ ⏤͟͟͞͞𝑹𝑬𝑷𝑶𝑹𝑻𝑬𝑺 
┣━━━━━━━━━━━━━━━
┣ 🖥 𝐑𝐞𝐩𝐨𝐫𝐭𝐞 𝚝𝚎𝚡𝚝𝚘
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝑫𝑬𝑺𝑪𝑨𝑹𝑮𝑨𝑺
┣━━━━━━━━━━━━━━━
┣🛰 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 𝚎𝚗𝚕𝚊𝚌𝚎
┣🛰 𝐌𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞 𝚎𝚗𝚕𝚊𝚌𝚎
┣🛰 𝐆𝐢𝐭𝐜𝐥𝐨𝐧𝐞 𝚎𝚗𝚕𝚊𝚌𝚎
┣🛰 𝐓𝐢𝐤𝐭𝐨𝐤 𝚎𝚗𝚕𝚊𝚌𝚎
┣🛰 𝐓𝐢𝐤𝐭𝐨𝐤𝐢𝐦𝐠 𝚎𝚗𝚕𝚊𝚌𝚎
┣🛰 𝐗𝐧𝐱𝐱𝐝𝐥 𝚎𝚗𝚕𝚊𝚌𝚎
┣🛰 𝐗𝐯𝐢𝐝𝐞𝐨𝐬𝐝𝐥 𝚎𝚗𝚕𝚊𝚌𝚎
┣🛰 𝐓𝐰𝐢𝐭𝐭𝐞𝐫 𝚎𝚗𝚕𝚊𝚌𝚎
┣🛰 𝐅𝐛 𝚎𝚗𝚕𝚊𝚌𝚎
┣🛰 𝐘𝐭𝐬𝐡𝐨𝐫𝐭 𝚎𝚗𝚕𝚊𝚌𝚎
┣🛰 𝐘𝐭𝐦𝐩𝟑 𝚎𝚗𝚕𝚊𝚌𝚎
┣🛰 𝐘𝐭𝐦𝐩𝟒 𝚎𝚗𝚕𝚊𝚌𝚎
┣🛰 𝐘𝐭𝐦𝐩𝟑𝐝𝐨𝐜 𝚎𝚗𝚕𝚊𝚌𝚎
┣🛰 𝐘𝐭𝐦𝐩𝟒𝐝𝐨𝐜 𝚎𝚗𝚕𝚊𝚌𝚎
┣🛰 𝐕𝐢𝐝𝐞𝐨𝐝𝐨𝐜 𝚎𝚗𝚕𝚊𝚌𝚎
┣🛰 𝐃𝐚𝐩𝐤𝟐 𝚎𝚗𝚕𝚊𝚌𝚎
┣🛰 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐩𝐚𝐜𝐤  𝚎𝚗𝚕𝚊𝚌𝚎
┣🛰 𝐏𝐥𝐚𝐲 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐏𝐥𝐚𝐲𝟐 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐏𝐥𝐚𝐲.𝟏𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐏𝐥𝐚𝐲.𝟐𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐏𝐥𝐚𝐲𝐝𝐨𝐱 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐏𝐥𝐚𝐲𝐝𝐨𝐜𝟐 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐒𝐩𝐨𝐭𝐢𝐟𝐲 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐑𝐢𝐧𝐠𝐭𝐨𝐧𝐞 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐒𝐨𝐮𝐧𝐝𝐜𝐥𝐨𝐧𝐞 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐈𝐦𝐚𝐠𝐞 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐏𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐖𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐩𝐩𝐭𝐢𝐤𝐭𝐨𝐤 𝚗𝚘𝚖𝚋𝚛𝚎 𝚍𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘
┣🛰 𝐈𝐠𝐬𝐭𝐚𝐥𝐥 𝚗𝚘𝚖𝚋𝚛𝚎 𝚍𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘
┣🛰 𝐢𝐠𝐬𝐭𝐨𝐫𝐲 𝚗𝚘𝚖𝚋𝚛𝚎 𝚍𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘
┣🛰 𝐓𝐢𝐤𝐭𝐨𝐤𝐬𝐭𝐚𝐥𝐥 𝚞𝚜𝚎𝚛𝚗𝚊𝚖𝚎
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝑩𝑼𝑺𝑪𝑨𝑫𝑶𝑹𝑬𝑺
┣━━━━━━━━━━━━━━━
┣🔎 𝐆𝐢𝐭𝐡𝐮𝐛𝐬𝐞𝐚𝐫𝐜𝐡 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐏𝐞𝐥𝐢𝐬𝐩𝐥𝐮𝐬 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐌𝐨𝐝𝐚𝐩𝐤 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬𝐞𝐚𝐫𝐜𝐡 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬𝐞𝐚𝐫𝐜𝐡𝟐 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐗𝐧𝐱𝐱𝐬𝐞𝐚𝐫𝐜𝐡 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐀𝐧𝐢𝐦𝐞𝐢𝐧𝐟𝐨 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐆𝐨𝐨𝐠𝐥𝐞 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐋𝐞𝐭𝐫𝐚 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐖𝐢𝐤𝐢𝐩𝐞𝐝𝐢𝐚 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐘𝐭𝐬𝐞𝐚𝐫𝐜𝐡 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐏𝐥𝐚𝐲𝐬𝐭𝐨𝐫𝐞 𝚝𝚎𝚡𝚝𝚘
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝑮𝑹𝑼𝑷𝑶𝑺 𝑨𝑱𝑼𝑺𝑻𝑬𝑺
┣━━━━━━━━━━━━━━━
┣⚙️ 𝐀𝐝𝐝 𝚗𝚞𝚖𝚎𝚛𝚘
┣⚙️ 𝐊𝐢𝐜𝐤 @𝚝𝚊𝚐
┣⚙️ 𝐊𝐢𝐜𝐤𝟐 @𝚝𝚊𝚐
┣⚙️ 𝐋𝐢𝐬𝐭𝐚𝐧𝐮𝐦 𝚝𝚎𝚡𝚝𝚘
┣⚙️ 𝐊𝐢𝐜𝐤𝐧𝐮𝐦 𝚝𝚎𝚡𝚝𝚘
┣⚙️ 𝐆𝐫𝐮𝐩𝐨 𝚊𝚋𝚛𝚒𝚛 / 𝚌𝚎𝚛𝚛𝚊𝚛
┣⚙️ 𝐆𝐫𝐨𝐮𝐩𝐭𝐢𝐦𝐞 𝚘𝚙𝚌𝚒𝚘𝚗 𝚝𝚒𝚎𝚖𝚙𝚘
┣⚙️ 𝐏𝐫𝐨𝐦𝐨𝐭𝐞 @𝚝𝚊𝚐
┣⚙️ 𝐃𝐞𝐦𝐨𝐭𝐞 @𝚝𝚊𝚐
┣⚙️ 𝐀𝐝𝐦𝐢𝐧𝐬 𝚝𝚎𝚡𝚝𝚘
┣⚙️ 𝐃𝐞𝐦𝐨𝐭𝐞 @𝚝𝚊𝚐
┣⚙️ 𝐈𝐧𝐟𝐨𝐠𝐫𝐨𝐮𝐩
┣⚙️ 𝐑𝐞𝐬𝐞𝐭𝐥𝐢𝐧𝐤
┣⚙️ 𝐋𝐢𝐧𝐤
┣⚙️ 𝐒𝐞𝐭𝐧𝐚𝐦𝐞 𝚝𝚎𝚡𝚝𝚘
┣⚙️ 𝐒𝐞𝐭𝐝𝐞𝐬𝐜 𝚝𝚎𝚡𝚝𝚘
┣⚙️ 𝐈𝐧𝐯𝐨𝐜𝐚𝐫 𝚝𝚎𝚡𝚝𝚘
┣⚙️ 𝐒𝐞𝐭𝐰𝐞𝐥𝐜𝐨𝐦𝐞 𝚝𝚎𝚡𝚝𝚘
┣⚙️ 𝐒𝐞𝐭𝐛𝐲𝐞 𝚝𝚎𝚡𝚝𝚘
┣⚙️ 𝐇𝐢𝐝𝐞𝐭𝐚𝐠 𝚝𝚎𝚡𝚝𝚘
┣⚙️ 𝐇𝐢𝐝𝐞𝐭𝐚𝐠 𝚊𝚞𝚍𝚒𝚘
┣⚙️ 𝐇𝐢𝐝𝐞𝐭𝐚𝐠 𝚟𝚒𝚍𝚎𝚘
┣⚙️ 𝐇𝐢𝐝𝐞𝐭𝐚𝐠 𝚒𝚖𝚊𝚐𝚎𝚗
┣⚙️ 𝐖𝐚𝐫𝐧 @𝚝𝚊𝚐
┣⚙️ 𝐔𝐧𝐰𝐚𝐫𝐧 @𝚝𝚊𝚐
┣⚙️ 𝐋𝐢𝐬𝐭𝐰𝐚𝐫𝐧
┣⚙️ 𝐅𝐚𝐧𝐭𝐚𝐬𝐦𝐚𝐬
┣⚙️ 𝐃𝐞𝐬𝐭𝐫𝐚𝐛𝐚
┣⚙️ 𝐒𝐞𝐭𝐩𝐩𝐩 𝚒𝚖𝚊𝚐𝚎𝚗
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑰𝑫𝑶𝑹𝑬𝑺
┣━━━━━━━━━━━━━━━
┣🧶 𝐓𝐨𝐢𝐦𝐚𝐠𝐞 𝚒𝚖𝚊𝚐𝚎𝚗
┣🧶 𝐓𝐨𝐠𝐢𝐟𝐚𝐮𝐝 𝚟𝚒𝚍𝚎𝚘
┣🧶 𝐓𝐨𝐢𝐦𝐠 𝚜𝚝𝚒𝚌𝚔𝚎𝚛
┣🧶 𝐓𝐨𝐦𝐩𝟑 𝚟𝚒𝚍𝚎𝚘
┣🧶 𝐓𝐨𝐦𝐩𝟑 𝚗𝚘𝚝𝚊 𝚍𝚎 𝚟𝚘𝚣
┣🧶 𝐓𝐨𝐩𝐩 𝚟𝚒́𝚍𝚎𝚘 / 𝚊𝚞𝚍𝚒𝚘
┣🧶 𝐓𝐨𝐯𝐢𝐝𝐞𝐨 𝚜𝚝𝚒𝚌𝚔𝚎𝚛
┣🧶 𝐓𝐨𝐮𝐫𝐥 𝚟𝚒𝚍𝚎𝚘 / 𝚒𝚖𝚊𝚐𝚎𝚗 / 𝚊𝚞𝚍𝚒𝚘
┣🧶 𝐓𝐭𝐬 𝚒𝚍𝚒𝚘𝚖𝚊 𝚝𝚎𝚡𝚝𝚘
┣🧶 𝐓𝐭𝐬 𝚎𝚏𝚎𝚌𝚝𝚘 𝚝𝚎𝚡𝚝𝚘
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝑳𝑶𝑮𝑶𝑺-𝑬𝑭𝑬𝑪𝑻𝑶𝑺
┣━━━━━━━━━━━━━━━
┣🖼 𝐋𝐨𝐠𝐨𝐬 𝚎𝚏𝚎𝚌𝚝𝚘 𝚝𝚎𝚡𝚝𝚘
┣🖼 𝐋𝐨𝐠𝐨𝐜𝐡𝐫𝐢𝐬𝐦𝐚𝐬𝐭 𝚝𝚎𝚡𝚝𝚘
┣🖼 𝐋𝐨𝐠𝐨𝐜𝐨𝐫𝐚𝐳𝐨𝐧 𝚝𝚎𝚡𝚝𝚘
┣🖼 𝐘𝐭𝐜𝐨𝐦𝐦𝐞𝐧𝐭 𝚝𝚎𝚡𝚝𝚘_
┣🖼 𝐇𝐨𝐫𝐧𝐲𝐜𝐚𝐫𝐝 @𝚝𝚊𝚐
┣🖼 𝐒𝐢𝐦𝐩𝐜𝐚𝐫𝐝 @𝚝𝚊𝚐
┣🖼 𝐋𝐨𝐥𝐢𝐜𝐞 @𝚝𝚊𝚐
┣🖼 𝐢𝐭𝐬𝐬𝐨𝐬𝐭𝐮𝐩𝐢𝐝
┣🖼 𝐏𝐢𝐱𝐞𝐥𝐚𝐫
┣🖼 𝐁𝐥𝐮𝐫
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞𝑷𝑰𝑹𝑶𝑷𝑶𝑺
┣━━━━━━━━━━━━━━━
┣✏️ 𝐏𝐢𝐫𝐨𝐩𝐨
┣✏️ 𝐂𝐨𝐧𝐬𝐞𝐣𝐨
┣✏️ 𝐅𝐫𝐚𝐬𝐞𝐫𝐨𝐦𝐚𝐧𝐭𝐢𝐜𝐚
┣✏️ 𝐇𝐢𝐬𝐭𝐨𝐫𝐢𝐚𝐫𝐨𝐦𝐚𝐧𝐭𝐢𝐜𝐚
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞𝑹𝑨𝑵𝑫-𝑨𝑵𝑰𝑴𝑬𝑺
┣━━━━━━━━━━━━━━━
┣📓 𝐌𝐞𝐧𝐮𝐚𝐧𝐢𝐦𝐞𝐬
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝑹𝑨𝑵𝑫𝑶𝑴
┣━━━━━━━━━━━━━━━
┣📺  𝐊𝐩𝐨𝐩 𝙱𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔 / 𝚎𝚡𝚘 / 𝚋𝚝𝚜
┣📺 𝐜𝐫𝐢𝐬𝐭𝐢𝐚𝐧𝐨𝐫𝐨𝐧𝐚𝐥𝐝𝐨
┣📺 𝐦𝐞𝐬𝐬𝐢
┣📺 𝐜𝐚𝐭
┣📺 𝐝𝐨𝐠
┣📺 𝐦𝐞𝐦𝐞
┣📺 𝐢𝐭𝐳𝐲
┣📺 𝐛𝐥𝐚𝐜𝐤𝐩𝐢𝐧𝐤
┣📺 𝐧𝐚𝐯𝐢𝐝𝐚𝐝
┣📺 𝐰𝐩𝐦𝐨𝐧𝐭𝐚𝐧̃𝐚
┣📺 𝐩𝐮𝐛𝐠
┣📺 𝐰𝐩𝐠𝐚𝐦𝐢𝐧𝐠
┣📺 𝐰𝐩𝐚𝐞𝐬𝐭𝐡𝐞𝐭𝐢𝐜
┣📺 𝐰𝐩𝐚𝐞𝐬𝐭𝐡𝐞𝐭𝐢𝐜𝟐
┣📺 𝐰𝐩𝐫𝐚𝐧𝐝𝐨𝐦
┣📺 𝐰𝐚𝐥𝐥𝐡𝐩
┣📺𝐰𝐩𝐯𝐞𝐡𝐢𝐜𝐮𝐥𝐨
┣📺 𝐰𝐩𝐦𝐨𝐭𝐨
┣📺 𝐜𝐨𝐟𝐟𝐞𝐞
┣📺 𝐩𝐞𝐧𝐭𝐨𝐥
┣📺 𝐜𝐚𝐫𝐢𝐜𝐚𝐭𝐮𝐫𝐚
┣📺 𝐜𝐢𝐛𝐞𝐫𝐞𝐬𝐩𝐚𝐜𝐢𝐨
┣📺 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲
┣📺 𝐝𝐨𝐫𝐚𝐞𝐦𝐨𝐧
┣📺 𝐡𝐚𝐜𝐤𝐞𝐫
┣📺 𝐩𝐥𝐚𝐧𝐞𝐭𝐚
┣📺 𝐫𝐚𝐧𝐝𝐨𝐦𝐩𝐫𝐨𝐟𝐢𝐥𝐞
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞𝑪𝑶𝑴 +𝟏𝟖
┣━━━━━━━━━━━━━━━
┣📒 𝐋𝐚𝐛𝐢𝐛𝐥𝐢𝐚
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞𝑬𝑭𝑬𝑪𝑻-𝑨𝑼𝑫𝑰𝑶
┣━━━━━━━━━━━━━━━
┃𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉
┣🔊 𝐛𝐚𝐬𝐬
┣🔊 𝐛𝐥𝐨𝐰𝐧
┣🔊 𝐝𝐞𝐞𝐩
┣🔊 𝐞𝐚𝐫𝐫𝐚𝐩𝐞
┣🔊 𝐟𝐚𝐬𝐭
┣🔊 𝐟𝐚𝐭
┣🔊 𝐧𝐢𝐠𝐡𝐭𝐜𝐨𝐫𝐞
┣🔊 𝐫𝐞𝐯𝐞𝐫𝐬𝐞
┣🔊 𝐫𝐨𝐛𝐨𝐭
┣🔊 𝐬𝐥𝐨𝐰
┣🔊 𝐬𝐦𝐨𝐨𝐭𝐡
┣🔊 𝐭𝐮𝐩𝐚𝐢
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝑪𝑯𝑨𝑻 𝑨𝑵𝑶𝑵𝑰𝑴𝑶
┣━━━━━━━━━━━━━━━
┣✔️ 𝐒𝐭𝐚𝐫𝐭
┣✔️ 𝐍𝐞𝐱𝐭
┣✔️ 𝐋𝐞𝐚𝐯𝐞
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝑨𝑼𝑫𝑰𝑶𝑺
┣━━━━━━━━━━━━━━━
┣📕 𝐌𝐞𝐧𝐮𝐚𝐮𝐝𝐢𝐨𝐬
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞𝑯𝑬𝑹𝑹𝑨𝑴𝑰𝑬𝑵𝑻𝑨𝑺
┣━━━━━━━━━━━━━━━
┣⚒️ 𝐂𝐡𝐚𝐭𝐠𝐩𝐭 𝚝𝚎𝚡𝚝𝚘
┣⚒️ 𝐝𝐞𝐥𝐜𝐡𝐚𝐭𝐠𝐩𝐭
┣⚒️ 𝐠𝐩𝐭𝐯𝐨𝐳 𝚝𝚎𝚡𝚝𝚘
┣⚒️ 𝐝𝐚𝐥𝐥-𝐞 𝚝𝚎𝚡𝚝𝚘
┣⚒️ 𝐬𝐩𝐚𝐦𝐰𝐚 𝚗𝚞𝚖𝚎𝚛𝚘 𝚝𝚎𝚡𝚝𝚘 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┣⚒️ 𝐭𝐚𝐦𝐚𝐧̃𝐨 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍 𝚒𝚖𝚊𝚐𝚎𝚗 𝚟𝚒𝚍𝚎𝚘
┣⚒️ 𝐫𝐞𝐚𝐝𝐯𝐢𝐞𝐰𝐨𝐧𝐜𝐞 𝚒𝚖𝚊𝚐𝚎𝚗  𝚟𝚒𝚍𝚎𝚘
┣⚒️ 𝐜𝐥𝐢𝐦𝐚 𝚙𝚊𝚒́𝚜 𝚌𝚒𝚞𝚍𝚊𝚍
┣⚒️ 𝐞𝐧𝐜𝐮𝐞𝐬𝐭𝐚 𝚝𝚎𝚡𝚝𝚘𝟷 𝚝𝚎𝚡𝚝𝚘𝟸
┣⚒️ 𝐚𝐟𝐤 𝚖𝚘𝚝𝚒𝚟𝚘
┣⚒️ 𝐨𝐜𝐫 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗
┣⚒️ 𝐡𝐝 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗
┣⚒️ 𝐚𝐜𝐨𝐫𝐭𝐚𝐫 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣⚒️ 𝐜𝐚𝐥𝐜 𝚘𝚙𝚎𝚛𝚊𝚌𝚒𝚘𝚗 𝚖𝚊𝚝𝚑
┣⚒️ 𝐝𝐞𝐥 𝚖𝚎𝚗𝚜𝚊𝚓𝚎
┣⚒️ 𝐰𝐡𝐚𝐭𝐦𝐮𝐬𝐢𝐜 𝚊𝚞𝚍𝚒𝚘
┣⚒️ 𝐫𝐞𝐚𝐝𝐪𝐫 𝚒𝚖𝚊𝚐𝚎𝚗 𝚀𝚁
┣⚒️ 𝐪𝐫𝐜𝐨𝐝𝐞 𝚝𝚎𝚡𝚝𝚘
┣⚒️ 𝐫𝐞𝐚𝐝𝐦𝐨𝐫𝐞 𝚃𝚎𝚡𝚝𝚘𝟷 𝚝𝚎𝚡𝚝𝚘𝟸
┣⚒️ 𝐬𝐭𝐲𝐥𝐞𝐭𝐞𝐱𝐭 𝚝𝚎𝚡𝚝𝚘
┣⚒️ 𝐭𝐫𝐚𝐝𝐮𝐜𝐢𝐫 𝚝𝚎𝚡𝚝𝚘
┣⚒️ 𝐧𝐨𝐰𝐚 𝚗𝚞𝚖𝚎𝚛𝚘
┣⚒️ 𝐜𝐨𝐯𝐢𝐝 𝚙𝚊𝚒́𝚜
┣⚒️ 𝐡𝐨𝐫𝐚𝐫𝐢𝐨
┣⚒️ 𝐝𝐝𝐫𝐨𝐩𝐦𝐚𝐢𝐥
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝑹𝑷𝑮-𝑳𝑰𝑴𝙄𝙏𝑬𝑺-𝑬𝑪𝑶𝑵𝑶𝑴𝑰𝑪𝑨
┣━━━━━━━━━━━━━━━
┣🎪 𝐚𝐝𝐯𝐞𝐧𝐭𝐮𝐞𝐞
┣🎪 𝐜𝐚𝐳𝐚𝐫
┣🎪 𝐜𝐨𝐟𝐫𝐞
┣🎪 𝐛𝐚𝐥𝐚𝐧𝐜𝐞
┣🎪 𝐜𝐥𝐚𝐢𝐦
┣🎪 𝐡𝐞𝐚𝐥
┣🎪 𝐥𝐛
┣🎪 𝐥𝐞𝐯𝐞𝐥𝐮𝐩
┣🎪 𝐦𝐲𝐧𝐬
┣🎪 𝐩𝐞𝐫𝐟𝐢𝐥
┣🎪 𝐰𝐨𝐫𝐤
┣🎪 𝐦𝐢𝐧𝐚𝐫
┣🎪 𝐦𝐢𝐧𝐚𝐫𝟐
┣🎪 𝐛𝐮𝐲
┣🎪 𝐛𝐮𝐲𝐚𝐥𝐥
┣🎪 𝐯𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐫
┣🎪𝐫𝐨𝐛𝐚𝐫 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍 @𝚝𝚊𝚐
┣🎪 𝐭𝐫𝐚𝐧𝐬𝐟𝐞𝐫 𝚝𝚒𝚙𝚘 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍 @𝚝𝚊𝚐
┣🎪 𝐮𝐧𝐫𝐞𝐠 𝚗𝚞𝚖𝚎𝚛𝚘 𝚍𝚎 𝚜𝚎𝚛𝚒𝚎
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎
┣━━━━━━━━━━━━━━━
┣🍭 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 𝚘 𝚟𝚒𝚍𝚎𝚘
┣🍭 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝚎𝚗𝚕𝚊𝚌𝚎 / 𝚕𝚒𝚗𝚔 / 𝚞𝚛𝚕
┣🍭  𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝟐 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 𝚟𝚒𝚍𝚎𝚘 
┣🍭  𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝟐 𝚎𝚗𝚕𝚊𝚌𝚎 / 𝚕𝚒𝚗𝚔 / 𝚞𝚛𝚕
┣🍭 𝐬 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 𝚘 𝚟𝚒𝚍𝚎𝚘
┣🍭 𝐬 𝚎𝚗𝚕𝚊𝚌𝚎 / 𝚕𝚒𝚗𝚔 / 𝚞𝚛𝚕
┣🍭 𝐬𝟐 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 𝚘 𝚟𝚒𝚍𝚎𝚘
┣🍭 𝐬𝟐 𝚎𝚗𝚕𝚊𝚌𝚎 / 𝚕𝚒𝚗𝚔 / 𝚞𝚛𝚕
┣🍭 𝐞𝐦𝐨𝐣𝐢𝐦𝐢𝐱 𝚎𝚖𝚘𝚓𝚒𝟷 𝚎𝚖𝚘𝚓𝚒𝟸
┣🍭 𝐬𝐜𝐢𝐫𝐜𝐥𝐞 𝚒𝚖𝚊𝚐𝚎𝚗
┣🍭 𝐬𝐫𝐞𝐦𝐨𝐯𝐞𝐛𝐪 𝚒𝚖𝚊𝚐𝚎𝚗
┣🍭 𝐬𝐞𝐦𝐨𝐣𝐢 𝚝𝚒𝚙𝚘 𝚎𝚖𝚘𝚓𝚒
┣🍭 𝐪𝐜 𝚝𝚎𝚡𝚝𝚘
┣🍭 𝐚𝐭𝐭𝐩 𝚝𝚎𝚡𝚝𝚘
┣🍭 𝐚𝐭𝐭𝐩𝟐 𝚝𝚎𝚡𝚝𝚘
┣🍭 𝐚𝐭𝐭𝐩𝟑 𝚝𝚎𝚡𝚝𝚘
┣🍭 𝐭𝐭𝐩 𝚝𝚎𝚡𝚝𝚘
┣🍭 𝐭𝐭𝐩𝟐 𝚝𝚎𝚡𝚝𝚘
┣🍭 𝐭𝐭𝐩𝟑 𝚝𝚎𝚡𝚝𝚘
┣🍭 𝐭𝐭𝐩𝟒 𝚝𝚎𝚡𝚝𝚘
┣🍭 𝐭𝐭𝐩𝟓 𝚝𝚎𝚡𝚝𝚘
┣🍭 𝐩𝐚𝐭 @𝚝𝚊𝚐
┣🍭 𝐬𝐥𝐚𝐩 @𝚝𝚊𝚐
┣🍭 𝐤𝐢𝐬𝐬 @𝚝𝚊𝚐
┣🍭 𝐝𝐚𝐝𝐨
┣🍭 𝐰𝐦 𝚙𝚊𝚌𝚔𝚗𝚊𝚖𝚎 𝚊𝚞𝚝𝚑𝚘𝚛
┣🍭 𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐦𝐚𝐫𝐤𝐞𝐫 𝚎𝚏𝚎𝚌𝚝𝚘 <𝚒𝚖𝚊𝚐𝚗
┣🍭 𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐟𝐢𝐥𝐭𝐞𝐫 𝚎𝚏𝚎𝚌𝚝𝚘 𝚒𝚖𝚊𝚐𝚎𝚗
┣🍭 𝐜𝐚𝐫𝐭𝐨𝐨𝐧 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗
┗━━━━━━━━━━━━━━━━┛`.trim()
//conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
let img = await (await fetch(`https://telegra.ph/file/a41a6f1ab57f829887fec.jpg`)).buffer()  
await conn.sendMessage(m.chat, {
text: menu,
contextInfo: { 
mentionedJid: [m.sender],
forwardingScore: 9, 
externalAdReply: {
title: '❑— 𝙎𝙚𝙗𝙖𝙨𝘽𝙤𝙩-𝙈𝘿 —❑\nWʜᴀᴛꜱᴀᴘᴘ Bᴏᴛ - Mᴜʟᴛɪ Dᴇᴠɪᴄᴇ',
//body: 'Wʜᴀᴛꜱᴀᴘᴘ Bᴏᴛ - Mᴜʟᴛɪ Dᴇᴠɪᴄᴇ',
thumbnail: img,
sourceUrl: 'https://chat.whatsapp.com/LcFTUnvu0Tw1tCnA2ybdR6',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
await m.react('✅')        
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)        
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menú|menu|menuu|allm\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}