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
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/tWKPqI7.jpeg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_20_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5LFxuICAgICAgICAwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgODIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY2LFxuICAgICAgICA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUwLFxuICAgICAgICA5NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NCxcbiAgICAgICAgNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDgwLFxuICAgICAgICA5LFxuICAgICAgICA0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDk4LFxuICAgICAgICAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVYL1AyUldjZUlGdWtTQkdHa3RWREExMWxVTlNGcHpwS1lyb1Vja0dhYWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI1NzEyNTg4NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQwMDZFMTk3MkYyQTYzMjA5RDE4OUREN0FEN0VDODU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDg4NDg0MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxVWJobzdNVFRqT2tEeDZfN0dLNUx3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjViNzA0ZTUxLWQ2ODQtNGIyOS04Y2QxLTE4NzkxODBmNTgyN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NixcbiAgICAgIDExNixcbiAgICAgIDc0LFxuICAgICAgMTExLFxuICAgICAgMTUxLFxuICAgICAgMTg1LFxuICAgICAgNjQsXG4gICAgICAyMjMsXG4gICAgICA0MSxcbiAgICAgIDEwLFxuICAgICAgNzcsXG4gICAgICA0OCxcbiAgICAgIDEzMyxcbiAgICAgIDE5OSxcbiAgICAgIDQwLFxuICAgICAgMjEwLFxuICAgICAgODAsXG4gICAgICAyMjIsXG4gICAgICA1MCxcbiAgICAgIDIxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzLFxuICAgICAgOTYsXG4gICAgICA4LFxuICAgICAgMTg3LFxuICAgICAgMTE5LFxuICAgICAgMjI2LFxuICAgICAgMTU5LFxuICAgICAgNzMsXG4gICAgICA2NCxcbiAgICAgIDE1OSxcbiAgICAgIDE1MixcbiAgICAgIDI0LFxuICAgICAgMTEwLFxuICAgICAgMTYxLFxuICAgICAgMzEsXG4gICAgICAxODYsXG4gICAgICAxMzIsXG4gICAgICAyMjIsXG4gICAgICAxMjYsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzJGVDhaWlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTcxMjU4ODc5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExMDgyNzY3MTY1ODU3MDo2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1vaSDwn5iOXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEs0aU9zRkVOL3ByTGtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiNVNkM1ljelR5UHE2R3h0UTFuQi94WjBLZW9OTlNIWVRyQW5UWGVwelRNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlo1aFdPOWxwQVVBMCtVMU9rdjZpVFVRaW8yY3VkK2ZXcjJqa3M4cW8vbEJLaGhvTTJyTmNsODhXSzIxdGdpYndLejYzaXdSd0k4cXh4d1QyNjl3N0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVvQ1ZKeHcyc1I1b21Sa3VwR0IyWTR2MjV3M1Z2ak1OWDJzeDN1SFFQMkRwdmNaSzE1TWl4OWZFVVZzNlk1WVVZS1Z6Q3dXWkZMOWVmdXZNMkFUcmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTcxMjU4ODc5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwODg0ODM1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRi9RXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGL1EuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
