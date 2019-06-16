'use strict'

class RoomUpdate {

  /**
   * Room service validation rules
   *
   * @returns {{name: string, description: string, location_id: string}}
   */
  get rules () {
    return {
      location_id: 'exists:locations,id',
      description: 'required'
    }
  }

  /**
   * Messages would be sent in portuguese
   */
  get messages () {
    return {
      'location_id.exists': 'O Local informado não existe',
      'description.required': 'Você deve informar a descrição da Sala',
    }
  }

  /**
   *
   * @param errorMessages
   * @returns {Promise<boolean | void>}
   */
  async fails (errorMessages) {
    return this
      .ctx
      .response
      .status(422)
      .send(errorMessages)
  }
}

module.exports = RoomUpdate
