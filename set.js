const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'Gifted;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0dYVWdiWXNaVkJ0MTlPbUNiY0hUL2xyTEFlZmZVUVhKVmhvR0lBcFNtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMW9DT0FvREZUWHRrYzJzcURuUUlqbEFQK0dDbng0aDVSakZhcm16b1kydz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SDF0MCtMTzdJSEFHUFR3d2pOTSs2TWl6RzN3Lzkwb3hWa0JQYnhGYW1jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTVTg2d0lXY25OY3BLdEovOUdRdWJhT3lUWnZTbHJPdXFIdWxYZzl3OUJ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklEUFhac0lWMGVjekpvRFNkTFVOODVJL3YrblpndGxhMENXR2szem4xbkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY1WXA0VmVtNkJFZGUyRFRJMXh3RWhvZUwyelBCY3FPUjhwbkw0clJ4aTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY043TjRaaGUyU0JPcGxpaUExNDJZV3I0M2ZqMGhqaWxGMFUzN0dJbUhsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWdHOEI4RnZ6dWhjckN5cHVmMEk5SmMzTXQ4b0Q3UU0ySkZ2OUkveDJVdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJoeTdjUGI2ZHpyU2UyOG13TU9VZkZUSUQwZDNNN2d0Z1FrcmErYWJzQ25hQ1QyeUdmeGVuZU9xTlVoSU93d3dkK0FrZEQwN0lwSzFubjJWdmlXbGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJBMEJ5OXJhdG9TUERVaUUyMDVWdDl3SFN0Mlpxam5hYXpKV09tMXExZWo0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4V0JFYXdZalRmYTc3Y2Y1c09sQk1RIiwicGhvbmVJZCI6IjMyMzhkOGEzLTQ3YmQtNGVjZS1iYjgwLThmMjM2NTViYzIyNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiRzFxTnFMOTJyR25SY2RGakdPaFpXN3NxSXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK25MckV3bFpKek1iUmlGUStmNTNvZnFrdjQ4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldENTEyVldGIiwibWUiOnsiaWQiOiIyMzQ3MDQxNjIwNjE3OjMyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMMmk4YmdGRU92TTNiTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1MlRIajhyRmF0T2VPclpkZ1E4ckJQc3lMb0tVRjNoM0NuNmdtd1hKRmpnPSIsImFjY291bnRTaWduYXR1cmUiOiJTdWpIMmRza1ZTV1p6OThlS3MralRSWVVlL0hua0xqOFRpQVowNlcrN21IYWZERFJ6YVhvVzNRVHhyR2xzRjNtcUhvZzFYOTd1M0toRlJsK0dEcndEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTWI1dCtRYytaVFJCN0tOL1NkdkwxMEpCNTBST2p3Nk03RzZDTFhHdjhPVlBYV093bGNmNG5VdUVQaG4xUzdjeFNsRGtpbTdlci9zMXBXZmtRWEhOalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQxNjIwNjE3OjMyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJ0a3g0L0t4V3JUbmpxMlhZRVBLd1Q3TWk2Q2xCZDRkd3Arb0pzRnlSWTQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTkxMDEwNDcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRTFiIn0=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Gifted Tech",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "254762016957,254728782591", 
             
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
AUTOREAD_MESSAGES: process.env.AUTO_READ_MESSAGES || "no",
CHATBOT: process.env.CHAT_BOT || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ɢɪғᴛᴇᴅ-ᴍᴅ',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '5' ,
    PRESENCE : process.env.PRESENCE || 'online',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

