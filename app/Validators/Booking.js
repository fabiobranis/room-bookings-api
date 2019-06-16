'use strict'

const BookingUpdate = use('App/Validators/BookingUpdate')

class Booking extends BookingUpdate{

  /**
   * Booking service validation rules
   *
   * @returns {{room_id: string, accountable: string, is_coffee: string, schedule_end: string, schedule_start: string, participants: string}}
   */
  get rules () {
    return Object.assign(super.rules, {
      room_id: 'required|exists:rooms,id',
      schedule_start: 'required|beforeFieldDateTime:schedule_end|bookingsCollisions:bookings,room_id,schedule_end',
      schedule_end: 'required|afterFieldDateTime:schedule_start',
      accountable: 'required',
      is_coffee: 'required'
    })
  }

  /**
   * Messages would be sent in portuguese
   */
  get messages () {
    return Object.assign(super.messages, {
      'room_id.required': 'Você deve informar a sala de reunião',
      'schedule_end.required': 'Você deve informar a data e hora de fim da reunião',
      'is_coffee.required': 'Você deve informar se vai ter cafézinho na reunião',
    })
  }
}

module.exports = Booking
