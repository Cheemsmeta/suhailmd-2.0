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
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/MdK0nLW.jpeg" // "image" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_42_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDc2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUsXG4gICAgICAgIDUsXG4gICAgICAgIDQ2LFxuICAgICAgICA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMTQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMixcbiAgICAgICAgODAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDksXG4gICAgICAgIDk5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1LFxuICAgICAgICA1NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MixcbiAgICAgICAgOTksXG4gICAgICAgIDE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDYxLFxuICAgICAgICAzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDU5LFxuICAgICAgICA3NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDc3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwLFxuICAgICAgICAzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsZE8rOTY2M3lwUHQreXNYL3g3YkNJTjRYOXNKODFHNzlKRDNzZCtyc2dFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyVHE4Q2JSclQzeWJtbmRMbTZ2TFl3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQwYWFhYjViLTRiOGUtNDExZC05ZWRhLWVkMTFlMWQ1MGY2NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4LFxuICAgICAgMjQzLFxuICAgICAgNDUsXG4gICAgICA3LFxuICAgICAgNDUsXG4gICAgICAyMjIsXG4gICAgICAxMzEsXG4gICAgICAzNyxcbiAgICAgIDIyNixcbiAgICAgIDE3NyxcbiAgICAgIDg3LFxuICAgICAgNDcsXG4gICAgICA3LFxuICAgICAgMjQwLFxuICAgICAgNzIsXG4gICAgICAyMjAsXG4gICAgICAxMzMsXG4gICAgICAxNTksXG4gICAgICAxNzksXG4gICAgICAxNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTIsXG4gICAgICAyMTcsXG4gICAgICAxMzIsXG4gICAgICA4OSxcbiAgICAgIDE4NyxcbiAgICAgIDY3LFxuICAgICAgMTI0LFxuICAgICAgNTEsXG4gICAgICAxNSxcbiAgICAgIDEwMCxcbiAgICAgIDE2LFxuICAgICAgMTcsXG4gICAgICAyMzEsXG4gICAgICA4OSxcbiAgICAgIDE1MCxcbiAgICAgIDIxLFxuICAgICAgMjE1LFxuICAgICAgMTE2LFxuICAgICAgMTA5LFxuICAgICAgNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNEhIUjE5U1lcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyMzg5NTIwOTQ2OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MDE0MDc5NzkzMTYyMDoyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKNjZsYThERUtES29ya0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImYxTHp2Z1RPcmxUWGRPWEJ3eW1xbGdDcElWSC96c0Q0d3dFZ2pjQTRrMGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidFlvSHEyU05oVEd0bHp6cmRLWkpodzVKL0M2bklWTmxZRUVMQ1RPQUlaZHNMTlJPZkRwNU5NdXQ2YXRaWDhBd0V4V3I2MDhpdXdjRVdRTExNcWdhQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicUxXRG1SeCtqdE1leEE1azlpUzcyOGlWbGVERHJxMkJGcERzYVcyTlUxR0psYU5KTUZGWkM3OEYwU2JEVmVBOEg0blVkL3cyeE9MV0N1U0UwUGNFaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIzODk1MjA5NDY6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNzE2OTY0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "DEVILOUS",
  packname: process.env.PACK_NAME || "SYMPA",
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
