import {webp2mp4} from '../lib/webp2mp4.js';
import {ffmpeg} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `[❗] 𝗥𝗲𝗽𝗼𝗻𝗱𝗲 𝗮𝗹 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 𝗽𝗮𝗿𝗮 𝗰𝗼𝗻𝘃𝗲𝗿𝘁𝗶𝗿 𝗮 𝘃𝗶𝗱𝗲𝗼 𝘂𝘀𝗮 ${usedPrefix + command}`;
  const mime = m.quoted.mimetype || '';
  if (!/webp/.test(mime)) throw `[❗] 𝗥𝗲𝘀𝗽𝗼𝗻𝗱𝗲 𝗮𝗹 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 𝗽𝗮𝗿𝗮 𝗰𝗼𝗻𝘃𝗲𝗿𝘁𝗶𝗿 𝗮 𝘃𝗶𝗱𝗲𝗼 𝘂𝘀𝗮 ${usedPrefix + command}`;
  const media = await m.quoted.download();
  let out = Buffer.alloc(0);
  if (/webp/.test(mime)) {
    out = await webp2mp4(media);
  } else if (/audio/.test(mime)) {
    out = await ffmpeg(media, [
      '-filter_complex', 'color',
      '-pix_fmt', 'yuv420p',
      '-crf', '51',
      '-c:a', 'copy',
      '-shortest',
    ], 'mp3', 'mp4');
  }
  await conn.sendFile(m.chat, out, 'error.mp4', '*DONE*', m, 0, {thumbnail: out});
};
handler.help = ['tovideo'];
handler.tags = ['sticker'];
handler.command = ['tovideo', 'tomp4', 'mp4', 'togif'];
export default handler;
