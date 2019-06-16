'use strict'

const LocationUpdate = use('App/Validators/LocationUpdate')

class Location extends LocationUpdate {

  /**
   * Location service validation rules
   *
   * @returns {{name: string, description: string}}
   */
  get rules () {
    return Object.assign(super.rules, {
      name: 'required|unique:locations,name',
      description: 'required'
    })
  }

  /**
   * Messages would be sent in portuguese
   */
  get messages () {
    return Object.assign(super.messages, {
      'name.required': 'Você deve informar o nome do Local',
      'name.unique': 'O nome do local informado já está em uso',
      'description.required': 'Você deve informar a descrição do Local'
    })
  }
}

module.exports = Location
