// apps/component-a/domain/logic.js
import { getUsers } from './services.js'

export async function getAllUsers () {
  const users = await getUsers()
  return users
}
