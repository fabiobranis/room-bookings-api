'use strict'

class LocationUpdate {

  /**
   * Location service validation rules
   *
   * @returns {{name: string, description: string}}
   */
  get rules () {
    return {
      description: 'required'
    }
  }

  /**
   * Messages would be sent in portuguese
   */
  get messages () {
    return {
      'description.required': 'Você deve informar a descrição do Local'
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

module.exports = LocationUpdate
