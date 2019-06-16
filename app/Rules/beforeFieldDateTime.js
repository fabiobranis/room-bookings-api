/**
 * Custom validator for datetime
 * For me it's not an edge case, for adonis it is
 *
 * @param data
 * @param field
 * @param message
 * @param args
 * @param get
 * @returns {Promise<void>}
 */
const beforeFieldDateTimeValidator = async (data, field, message, args, get) => {
  const value = get(data, field)
  if (!value) {
    /**
     * skip validation if value is not defined. `required` rule
     * should take care of it.
     */
    return
  }

  const first = new Date(value)

  // get the field to validate as argument
  const [fieldToValidate] = args
  const after = get(data,fieldToValidate)

  if (!after) {
    throw message
  }

  const second = new Date(after)

  // datetime comparison, according the best practices
  if (first.getTime() >= second.getTime()) {
    throw message
  }



}

module.exports = beforeFieldDateTimeValidator
