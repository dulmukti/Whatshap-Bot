exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───

 *WHATSHAPP BOT MENU *

   *AUTO CREATE STICKER * 
 1. * #sticker 
( contoh kirimkan gambar lalu beri hastag #sticker )

 *AUTO DOWNLOAD* 
1. *#ytmp3* <linkyoutube >
2. *#ytmp4* <linkyoutube>
3. *#tiktok* <linktiktok>
4. *#ig* <linkIg>
5. *#fb* <linkFb>
6. *#twt* <linkTweet>
( Contoh,kirimkan hastag #ytmp3 https://www.youtube.com/watch?v=yMIKC2VtzFA

 * FITUR PINTAR * 
1. *#wiki* <query>Wikipedia.
2. *#nulis* <teks>
3. *#quran*
4. *#pantun*
5. *#nama* <nama anda>
6. *#pasangan* <Aris & Cahya>
7. *#lirik* <nama lagu>
8. *#chord* <nama lagu>
( Contoh, #nulis <isi tulisan kamu >

 *${BotName}*
 *INFORMATION* 
1. *#sholat* <daerah>
2. *#covid*
3. *#infogempa*

 *${BotName}*
 *INFORMASI * 
1. *#info*

  *${BotName}*
*FITUR LAIN* 
1. *#tts* <teks>
2. *#quotes*
3. *#donasi*
4. *#foto cewek*
5. *#foto cowok*
6. *#pokemon*
7. *#loli*
8. *#fotoanime*
9. *#namaninja* <nama lu>
10. *#alay*  <teks>
11. *#say*  <teks>
12. *#infoig* <@dulmukti_id>


( INFO : SEMUA FITUR WAJIB GUNAKAN TANDA # )

 *${BotName}*

1. *Creator ${BotName}*
 _${whatsapplu}_
`
}
7