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


global.devs = "50948362874" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "50948362874";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50948362874";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_46_11_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAwLFxuICAgICAgICA1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyLFxuICAgICAgICAxOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODksXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc4LFxuICAgICAgICA5MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI5LFxuICAgICAgICA1NixcbiAgICAgICAgNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU3LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUwLFxuICAgICAgICA0NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcwLFxuICAgICAgICAyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzLFxuICAgICAgICA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDksXG4gICAgICAgIDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrZnh0SDE3d3ZaYmErQ0t0WDZEaFZZVi82VUxWRUQwNmQ3SFI0SFI1RXJRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY4Mzg0MDc4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzI1NUY5RTc2MEZFQzNCNTU4ODNBNDE1MjZEN0U2OEZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxOTM3NTc1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFfR1RpUGwyUVJ5ZGFIWWpZc2JIVVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2YyNGYwNTQtMmJkYS00M2U5LWFlNjMtMTllMTMwYWVjMTJiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDIyNyxcbiAgICAgIDIwNyxcbiAgICAgIDI1LFxuICAgICAgMTYsXG4gICAgICAxODEsXG4gICAgICAyNDIsXG4gICAgICA3MixcbiAgICAgIDUsXG4gICAgICA4OCxcbiAgICAgIDEwNCxcbiAgICAgIDI0MixcbiAgICAgIDI2LFxuICAgICAgNTcsXG4gICAgICAyNDQsXG4gICAgICAxNjMsXG4gICAgICAxNjgsXG4gICAgICAxMDcsXG4gICAgICAxOTQsXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTEsXG4gICAgICA5MixcbiAgICAgIDI1NSxcbiAgICAgIDg5LFxuICAgICAgMTc4LFxuICAgICAgNjQsXG4gICAgICA0NixcbiAgICAgIDE3NCxcbiAgICAgIDE1NSxcbiAgICAgIDYxLFxuICAgICAgMTEsXG4gICAgICA2MixcbiAgICAgIDEwNCxcbiAgICAgIDExNCxcbiAgICAgIDEyOSxcbiAgICAgIDE5NixcbiAgICAgIDAsXG4gICAgICAyMTIsXG4gICAgICAyNDMsXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNlNOU1RDRjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY4Mzg0MDc4MjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzMxOTkyMDM1MzI5MTA6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQMmdodHNHRUp1Szdia0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9JRktuK3BIZE1FZEtHRDRUcFdpcDNGeUduNVJMNlR1ZDl1bXM0blJpbTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiREZ2K2FwdDlvb2Z2amZlZHpNbStUU056UEJLNmFmaWdabzNqN3pGN1JocU5BZVRwdU01b0VWcVZkNTdyYzJhT0V1NkFwQUxzMHh0czhzeVdQOVhQQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUUVBTzR0aE0vMERRUzkwdUNub2tKRXEvL004UlNyNGFHNVF4MHlvcWpid1VNZUdIRTVEeFRTMjg1bjM3QWFkK3J6dE41YktneVZ5MGRQYkFCOVVvQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjgzODQwNzgyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTkzNzU2OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUkxbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSTFsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYVc1WW5IOW9BYUlQVEZYV1dvZG56dy9IWTZ2alN3NDhHREVpcENid1N1dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODAxNTU2MDkzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE5MzMyODk4MzNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "BRICE",
  packname: process.env.PACK_NAME || "😁",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "BRICE",


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
