import auth from '../libraries/auth/token.js'

export const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const decoded = auth.verifyToken(token)
  if (!decoded) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  req.user = decoded
  next()
}
