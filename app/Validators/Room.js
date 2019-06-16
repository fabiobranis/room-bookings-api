'use strict'

const RoomUpdate = use('App/Validators/RoomUpdate')

class Room extends RoomUpdate {

  /**
   * Room service validation rules
   * Here I just use a native approach to merge the object from super class to return the rules
   *
   * @returns {{name: string, description: string, location_id: string}}
   */
  get rules () {
    return Object.assign(super.rules,{
      location_id: 'required|exists:locations,id',
      name: 'required|unique:rooms,name'
    })
  }

  /**
   * Messages would be sent in portuguese
   */
  get messages () {
    return Object.assign(super.messages, {
      'location_id.required': 'Você deve informar a qual Local esta Sala pertence',
      'location_id.exists': 'O Local informado não existe',
      'name.required': 'Você deve informar o nome da Sala',
      'name.unique': 'O nome da sala informado já está em uso'
    })
  }

}

module.exports = Room
