const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Bamako";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "22390633817";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22389520946";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/sinnaa.jpeg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_54_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgOTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDczLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDY1LFxuICAgICAgICA0MyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY4LFxuICAgICAgICA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzksXG4gICAgICAgIDM3LFxuICAgICAgICAyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MSxcbiAgICAgICAgODMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU4LFxuICAgICAgICA0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg2LFxuICAgICAgICA0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI4LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMixcbiAgICAgICAgNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDM1LFxuICAgICAgICA2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDMwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImdnZktxTEhhWUFXS1JDdndrZUpqQXlqL1U0Z25zRkhNM05mc0ZCTUUrS2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdDcTR3OVB2VDctbEw5b0pjODJEb3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWY3OTcwYzYtMTNjMi00N2RhLWI3MmItZWFlMTU3NjhiMjkxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MSxcbiAgICAgIDEwMSxcbiAgICAgIDQzLFxuICAgICAgNzIsXG4gICAgICAyMTcsXG4gICAgICAxMjksXG4gICAgICAyNTEsXG4gICAgICAyNDUsXG4gICAgICAzOCxcbiAgICAgIDI1NCxcbiAgICAgIDE2NCxcbiAgICAgIDIyNSxcbiAgICAgIDI1MCxcbiAgICAgIDE5MyxcbiAgICAgIDEyNixcbiAgICAgIDIwLFxuICAgICAgMjQ0LFxuICAgICAgMjE2LFxuICAgICAgMTUsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgOTIsXG4gICAgICAxNzAsXG4gICAgICAxNDAsXG4gICAgICAxNzksXG4gICAgICAyNDUsXG4gICAgICAxNjYsXG4gICAgICAxOTQsXG4gICAgICAxOCxcbiAgICAgIDQ3LFxuICAgICAgMjI5LFxuICAgICAgMTcwLFxuICAgICAgMTAwLFxuICAgICAgMjUxLFxuICAgICAgMjQ5LFxuICAgICAgMTUxLFxuICAgICAgMjI4LFxuICAgICAgNjIsXG4gICAgICAxOTEsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRTZOTjQyTlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTA1MDMzMjk1MzQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEyMDA0NzEwNzkzMjQ2OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHordUowQkVLNm10YmtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1eWlxTVZyRHgxT0thd0Z6UlJxU3o5R1hzUVNGQ0V5VExIKzJQYXd2dW1jPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlowTzlyeHpteGZsT055TDlVSFpoa0Vzc2pNclEyUFV5K2FJQ0xubGcvMVZQa0tSdUYvK05ubS9RZkpPZEppcGNJUHhmNGs5WjNzVEJWT05XYldpNEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImU0L2xQYUhlZVpnRXhzK081YnRPMmcwV2hFWWNFS05lRVVlTHR0MS9aQTRCN3h5ZlZ6cTBRQmVkVUFMaEJqdnVlTUp5S291MEQ5d1RWdCtiUHFvM0J3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTA1MDMzMjk1MzQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMDIzNjY3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXk0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJeTQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjQXgvZy90QW1SdGh3bW0yb1BudEUwcDRHUEpRK243bWlDRkRnRFNrYzg4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMzMDE4NjU1NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMDkxNTkwNjIwNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "DEVI SYMPA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
