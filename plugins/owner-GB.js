let handler = (m) => m;
handler.all = async function (m) {
  

  if (/^karimDios|dios|Dios|karim|karim|karim$/i.test(m.text)) {
    var GB = `ᴏᴡɴᴇʀ  @${global.suittag} ᴛᴇ ᴀ ɪɴᴠᴏᴄᴀᴅᴏ`;

    m.reply(GB, m.chat, { mentions: conn.parseMention(GB)});
    //sem prefixo
    /*conn.reply(
      m.chat,
      `ᴏᴡɴᴇʀ @${global.suittag} ᴛᴇ ᴀ ɪɴᴠᴏᴄᴀᴅᴏ`,
      m
    );*/ //wm, null, [['Menu', '#menu']], m) botones :V
  }
  return !0;
};
export default handler;
