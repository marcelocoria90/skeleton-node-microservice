import pkg from 'oracledb'
const { getConnection, OUT_FORMAT_OBJECT } = pkg

export async function executeQuery (sql, bindParams = []) {
  let connection
  try {
    connection = await getConnection()
    const result = await connection.execute(sql, bindParams, {
      outFormat: OUT_FORMAT_OBJECT
    })
    return result.rows
  } catch (error) {
    console.error('Error executing Oracle DB query:', error)
    throw error
  } finally {
    if (connection) {
      try {
        await connection.close()
      } catch (error) {
        console.error('Error closing Oracle DB connection:', error)
      }
    }
  }
}
