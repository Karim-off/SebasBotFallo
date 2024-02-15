import moment from 'moment-timezone';
import fetch from 'node-fetch';
const handler = async (m, { conn, args }) => {
   const res = await fetch('https://api.github.com/repos/Ender-GB-Isis777/LOBO-BOT-MD');
   const json = await res.json();
   let txt = ` ◉ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐭𝐞𝐫𝐦𝐮𝐱 ◉
𝙇𝘼𝙈𝙀𝙉𝙏𝘼𝘽𝙇𝙀𝙈𝙀𝙉𝙏𝙀 𝙀𝙇 𝘽𝙊𝙏 𝙀𝙎 𝘿𝙀 𝙐𝙎𝙊 𝙀𝙓𝘾𝙇𝙐𝙎𝙄𝙑𝙊 𝙎𝙊𝙇𝙊 𝙋𝘼𝙍𝘼 𝙐𝙉𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙔 𝙉𝙊 𝙀𝙇 𝘽𝙊𝙏 𝙉𝙊 𝙀𝙎 𝘿𝙀 𝘼𝘾𝘾𝙀𝙎𝙊 𝙋𝙐𝘽𝙇𝙄𝘾𝙊
    🔮 𝐓𝐢𝐞𝐧𝐞𝐬 𝐝𝐮𝐝𝐚𝐬 ? 𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐚 𝐚𝐥 𝐞𝐪𝐮𝐢𝐩𝐨 𝐜𝐫𝐞𝐚𝐝𝐨𝐫 𝐮𝐬𝐚 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 #𝙾𝚆𝙽𝙴𝚁︎ 🔮  `;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": global.md, "sourceUrl": global.md}}}, {quoted: m});
};
handler.help = ['scbot'];
handler.tags = ['info'];
handler.command = /^(instalarbot|descargarbot)$/i;
export default handler;
