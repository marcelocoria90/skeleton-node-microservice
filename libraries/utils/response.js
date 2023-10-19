/* eslint-disable no-unused-vars */

export const success = (req, res, message, status) => {
  const statusCode = status || 200
  const statusMessage = message || ''

  res.status(statusCode).send({
    error: false,
    status,
    body: message
  })
}

export const error = (req, res, message, status) => {
  const statusCode = status || 500
  const statusMessage = message || 'Internal server error'

  res.status(statusCode).send({
    error: true,
    status,
    body: message
  })
}
