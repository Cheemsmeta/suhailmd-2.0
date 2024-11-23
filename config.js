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


global.devs = "243892829921" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "50948362874;243892829921;22389520946";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50948362874;22389520946";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_46_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDc3LFxuICAgICAgICA2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgNCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDk5LFxuICAgICAgICA2NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDk4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MixcbiAgICAgICAgMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk1LFxuICAgICAgICA4NixcbiAgICAgICAgMjUxLFxuICAgICAgICA0LFxuICAgICAgICA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0LFxuICAgICAgICAzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODksXG4gICAgICAgIDEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDc1LFxuICAgICAgICAyLFxuICAgICAgICA0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxODcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVm5kSnd6UzVjbDhzODBaZjJpbW9VRy9iWUVCcnpSa0FzZnBsVXZWM1BkQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYkhobVRkTjdTZEtHcldvTVpDd2FoUVwiLFxuICBcInBob25lSWRcIjogXCI3NDg0ODM2NC1iZTU4LTQxNDQtYmQ5ZC00MDg0MTBlNDU3OGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTExLFxuICAgICAgMTY4LFxuICAgICAgMjQxLFxuICAgICAgMTMxLFxuICAgICAgMTUyLFxuICAgICAgMjMxLFxuICAgICAgMTU2LFxuICAgICAgMTMzLFxuICAgICAgMjM1LFxuICAgICAgMzMsXG4gICAgICA0NixcbiAgICAgIDQ1LFxuICAgICAgMTI0LFxuICAgICAgNDYsXG4gICAgICAxNzUsXG4gICAgICAyMDUsXG4gICAgICA0NyxcbiAgICAgIDIwMCxcbiAgICAgIDUsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDcsXG4gICAgICAzOSxcbiAgICAgIDE5NyxcbiAgICAgIDY0LFxuICAgICAgODYsXG4gICAgICAyMzAsXG4gICAgICAyMzEsXG4gICAgICAxODksXG4gICAgICAxNTEsXG4gICAgICAyMjcsXG4gICAgICAyMjksXG4gICAgICAxNDgsXG4gICAgICAzOSxcbiAgICAgIDEzMCxcbiAgICAgIDc2LFxuICAgICAgMTQsXG4gICAgICAyMjMsXG4gICAgICAyMDQsXG4gICAgICAxNjUsXG4gICAgICAxMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1MxRTFTTlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTcxMjU4ODc5OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExMDgyNzY3MTY1ODU3MDo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xLNGlPc0ZFSzJhaWJvR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYjVTZDNZY3pUeVBxNkd4dFExbkIveFowS2VvTk5TSFlUckFuVFhlcHpUTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiTFRhYXJFTmF6Vyt4eGJKcjVmbGxPM3Z6RWJsclhmUjBNU0xlY2o3SjBNNFY2S2xmM1N4RFVXb1h3RGYreTNGOEc5OXRyMFo5aWxVcFlpRThQdjBEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2OTRhNklEbDNxbXc2SVdGbk1VTzErSVVBNE0vVG5ic2szRjF2bzVRaDgyVFphemlkMUhkSStZVVFlaDFwcTI1YjJHWGpKSFZSOFI3UGRvWTVBdDNCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU3MTI1ODg3OTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjM5ODM4NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Emma",
  packname: process.env.PACK_NAME || "IMA",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "IMA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
