import mysql from 'mysql2/promise'

//creamos la conexions
const connection = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    port: process.env.DB_PORT || 5306,
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'bot_cent_profe',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
})

//console.log(connection)

export default connection