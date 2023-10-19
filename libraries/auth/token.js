// libraries/authenticator/token.js

import { sign, verify } from 'jsonwebtoken'
import { jwt } from './config.js'

const { secret, expiresIn } = jwt

export const generateToken = (data) => {
  // Genera un token JWT con los datos proporcionados
  return sign(data, `${secret}`, `${expiresIn}`)
}

export const verifyToken = (token) => {
  // Verifica y decodifica un token JWT
  try {
    return verify(token, `${secret}`)
  } catch (error) {
    return null // El token es inválido o ha expirado
  }
}
