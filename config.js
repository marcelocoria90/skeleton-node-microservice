export const remoteDB = process.env.REMOTE_DB || false
export const api = {
  port: process.env.API_PORT || 3000
}
export const post = {
  port: process.env.POST_PORT || 3002
}
export const jwt = {
  secret: process.env.JWT_SECRET || 'notasecret!',
  expiresIn: '1h'
}
export const oracle = {
  host: process.env.ORACLE_CONNECTION_STRING || 'localhost:1521/ORCL',
  user: process.env.ORACLE_USER || 'web',
  password: process.env.ORACLE_PASSWORD || 'web'
}
export const mysqlService = {
  host: process.env.MYSQL_SRV_HOST || 'localhost',
  port: process.env.MYSQL_SRV_PORT || 3001
}
export const cacheService = {
  host: process.env.MYSQL_SRV_HOST || 'localhost',
  port: process.env.MYSQL_SRV_PORT || 3003
}
export const redis = {
  host: process.env.REDIS_HOST || 'redis-13556.c14.us-east-1-3.ec2.cloud.redislabs.com',
  port: process.env.REDIS_PORT || 13556,
  password: process.env.REDIS_PASS || '9sWIItAvlPbkoTcwOXstNm9hDFv7AU2F'
}
