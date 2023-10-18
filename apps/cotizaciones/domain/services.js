// apps/component-a/domain/services.js
import { executeQuery } from '../data-access/repository.js'

export async function getUsers() {
  const sql = 'SELECT * FROM users'
  const users = await executeQuery(sql)
  return users
}

