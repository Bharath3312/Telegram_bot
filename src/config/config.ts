import dotenvFlow from 'dotenv-flow'

dotenvFlow.config()

export const config = {
    environment: process.env.ENVIRONMENT || 'development',
    port: process.env.PORT || 3000,
    serverUrl: process.env.SERVER_URL || `http://localhost:${process.env.PORT || 3000}`,
    dbUrl: process.env.DB_URL || '',
    botToken: process.env.BOT_TOKEN || ''
}
