const Database = use('Database')

/**
 * Check if a given datetime from a booking (start and end) collides with an
 * existing booking
 *
 * @param data
 * @param field
 * @param message
 * @param args
 * @param get
 * @returns {Promise<void>}
 */
const bookingsCollisions = async (data, field, message, args, get) => {
  const scheduleStart = get(data, field)
  if (!scheduleStart) {
    throw message
  }

  const [table, room_column, end_column, bookingId] = args
  const id = bookingId || null

  const scheduleEnd = get(data, end_column)

  if (!scheduleEnd) {
    throw message
  }

  const room = get(data, room_column)

  if (!room) {
    throw message
  }

  // query for the row based on the start and end of schedule in the room
  let query = `select id from ${table} where `

  if (bookingId) {
    query += 'id <> ? and '
  } else {
    query += 'id is not ? and '
  }

  query += `${room_column} = ?
        and
      ((
        ${field} <= ? 
        and ${field} > ?
      )
      or
      (
        ${end_column} > ? 
        and ${end_column} <= ?
       ))`


  const row = await Database.raw(query, [
    id,
    room,
    scheduleStart,
    scheduleEnd,
    scheduleStart,
    scheduleEnd
  ])

  // if there's row, then there's a collision, so we throw an error
  if (row.length > 0) {
    throw message
  }
}

module.exports = bookingsCollisions
