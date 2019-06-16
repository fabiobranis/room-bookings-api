const Database = use('Database')

/**
 * Custom validation to check if a given foreign key id exists in database
 *
 * @param data
 * @param field
 * @param message
 * @param args
 * @param get
 * @returns {Promise<void>}
 */
const existsValidator = async (data, field, message, args, get) => {
  const value = get(data, field)
  if (!value) {
    /**
     * skip validation if value is not defined. `required` rule
     * should take care of it.
     */
    return
  }

  const [table, column] = args
  const row = await Database.table(table).where(column, value).first()

  if (!row) {
    throw message
  }
}

module.exports = existsValidator
