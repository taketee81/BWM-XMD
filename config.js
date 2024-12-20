const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU2Y7iOBT9lZZfm2rIRlJIJU02CIQlhLCO+sFJnGCyYjtAUuLfR6lFVQ/TNTVvlpdzj8859z6DvMAU2agGg2dQEnyBDLVLVpcIDIBWRREioANCyCAYAF73upbc93hN13aScDH1xF7n43UkaRLXJVoq+LPtUPrpm+ITuHdAWfkpDr4AnGm3TNQbTCT10KU1d7HHEMsTXQtOgYd69BwRdb2/VeG2eAL3FhFigvPYLI8oQwSmNqodiMn36J+HxebmorKSN1U9R9NzGrn1Zdc8Pi4vrMp0dvSNPdtKSZp8j/5wEvhRtXSln+r8mnIrnnj9eNq4saPG28CJbKgKHgdz2TNf6VMc5ygchyhnmNXf1l21r+515S9tyzOmtwXrr0fLXSIqepn3r75jcdE5z+L+xt2Mv0c88MPLhtt55THoaSP3NBw6a6Mek8VSOuzOPDITeXlcbik9KZ+JO+Q9K8n/0b0eOeinX96qsQGdYFEIGRMOdL+fmOJsxnZD3xUPQjAXuhn9Hv21hJPDyO5Kcm4x6mmL7sI/eZNMdOqpOoroUHZ7elO4p3j2QR+yinzF0mlWXoa162nlN6tyvZ2NcLU9l901Ygc6HHqarp1cera3sr2whXA9j8lq1pzHN+E8Objj6nSs+Zl4oZE1LR2LGsgJN7r69PKjBNXjEAy4ewcQFGPKCGS4yNs9nlM6AIaXFQoIYi/ygsMBWWJkpQuuF4uPbjNPTOLXWejkpcfs0dWqR9fekKVxt/cEOqAkRYAoRaGFKStIPUOUwhhRMPj7dwfk6MZejWvLCVwHRJhQts6rMi1g+O7q+yEMgqLK2arOA71dIAIGvY9txBjOY9rqWOWQBEd8QfoRMgoGEUwpundAiC44QC0ecHz91iS8s3o827O9co1mSy+9tpSPRf56pScjsYdk5UEUeuGDGAnhg+8H/kNf4ZW+AgVFCiHoAPzWM+2bP1p4yEVxIZnGeb4drbfpSqDDunx8lFRWvNjwqj0iKAQDRirUAT4Mkqr0igTlX+C6xXxuXuJiUcxPNzpylvrpdpmT9UTZf8J99RQMnj/mlF6ELZ7KTThvKixBB2QvEcTtz3mBl0VRVDihNxCUv+iva6sjLMtfOWKgA3LYXgYz8sODCfrhIdTWejOiRQkRgzilYAD0GTaKcGaYcy9NCB2N1H2s6rEKPox774DXhC12p65tUGvhOwp/io1x5BuptTwPe5uzMwnp0lWSRdWMxkv16V9AwABUVN45hi+Il76lyNd52j3g4WPgH262qprWjqBpcyjtfcDqUli42+s5wrVGcdbP9UKvRb8wj2lPd8puIO1SY30J61y9PrXVXgP0udiO5ZybI+lUu4UTKHWpDJPJ3i8tH/ryppr7/a0UOAYaj5WG704ySQ/TeYU2qHQndkMvU3tJxqWGSrXh0yRSpv1ENt5682U2pG8zGb90zfNb3CKMXkbcmxP/ZdhH8Hv3zieIt5n5h3BpXip261jWmqzpzgtRrS3+Krk9+xgO4ane+aYZTQxCb9hUwf3+uwPKFLKoIBkYAJr5bXekkDL1o3E9nCHKYFaCAScLYl/i+yJ//wfpBTs77gcAAA==',
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

