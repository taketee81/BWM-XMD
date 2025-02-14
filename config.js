const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW4+qSBj8L/2Kc7ijmEyy4HgBREEU0c1m00IjrdxsGhEn/vcNc8mZhz1nZ3nqAF1dXV9VvYK8wBWyUAuGr6Ak+Aop6pa0LREYAr2OY0RAD0SQQjAEmn7048qMb8V9MFiPfGo3zbIcnzgzj+eLbBCVY6c4znU1GzyDRw+U9SHF4W8Ak8bfkYPQ77PHeYt41h0dRI9fXnR0FVbsxl36peGyJNzr52fw6BAhJjg/jssEZYjA1EKtAzH5Hn1pIuThorE0zTJxVCVBdXEUK5Yhl5yMe7DU+E3qSm3FTHffo2+fGVZj/JUQb5wFqiT9vn2p+o5EoT6xA3Td9M9os58Z5234Tr/CxxxFRoRyimn7bd2V5YKeozm52+SWLltra5zvs5kdHaJQcieVussy6vPtsuGN7xFXrNtyO2Eh6+z9uJ5uT4rSn7oOPVU+k9FR41snrlYSg4rFV+IO+fTK+f/oro2vja8xL2OPuZpOA2+n47pZy+keMhMuiG2N8atCIvzSl75H39dMbztKGVHilkpg7Bw729MppLOTsL3V2WHc14yN5JHTV/qQ1uR3LGfElBxP3Vm+wNn+xr8M6Dmw0oPCNQ31kkutm8xorQiLmyks9rLprKTxbR70J+7hftqQNuVjNJUFmkjmgp6bl2zXuon2/HajM2qNCAz5Rw8QdMQVJZDiIn97p/A9AKOrh0KC6Ju8oF45UGpZdnB5kRfuams2nqrqM1aOHF8ho5W3g7c9PV/ktfQMeqAkRYiqCkUzXNGCtDaqKnhEFRj++VcP5OhG3wfXHSfyPRBjUtFNXpdpAaPPqX5+hGFY1Dn12jwcdQtEwJD7+RpRivNj1elY55CECb6iUQJpBYYxTCv06IEIXXGIOjwwRWs78JTV+t5KVRs58d/FfX/sKCdF/v4LEqWDxAvyExeJ4ZMk8ocnFSrqkypGSiwPOAUKMegB/JGZbs+v68Rsk+RscHI01/pTppXtwZ0oWuIU77l41x4RFIEhJTXqgQMMz3W5Ls4o/11xZCrOM48xM2UZaIbdTMZbkYmElvuK+z5TMHz92VOjIurwnPV0YU3GJuiB7M2CuLu5IAp9SZIGvMgN5cEf1Y+m0xGW5Y8c0Q72Q/NuQ4QoxGkFhmBkXoqBb7uskilXd7fTWk2zNK3zweeMPs3+bqZLNPNuUJ4FaR0LSRvEC82YqE22GTmOdy037GFUz127xcHu30DAEPB8JRSGJbo3J+XGM+d0nDaRnguzqqBiVLPjhpelBulGslgTqq9s94yt/U5MNuc0SdTNOgnm97V3y8vY88aGcypYVe+S8emVr4et8lJbKKsdP19xc42Zzk+r1hMyW7XJcoDhtIAeH/E7tgjQxsoGVetM+6yecTLdWwyO60G4kowJ88JRHEzujINjEmD3PYZvNZB+1C9+C8jrh7NijN7aLIfdhP5jNl89zj16XyA+6vEXPtJhvuKqbb3i5UOuFmEq3t2RHodmqp3uHFF8R2gI5l7sIhXA4/FXD5QppHFBMjAEMI9IgSPQAymsqPYzpmucoYrCrARDvi+qkiopyqAHslYrS49C+pluoHWP1Z+Cxz+CTs2C+QcAAA=='
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Take Tee",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Take Tee",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

