'use strict'

class BookingUpdate {

  /**
   * Booking service validation rules
   *
   * @returns {{room_id: string, accountable: string, is_coffee: string, schedule_end: string, schedule_start: string, participants: string}}
   */
  get rules () {
    return {
      room_id: 'exists:rooms,id',
      schedule_start: `beforeFieldDateTime:schedule_end|bookingsCollisions:bookings,room_id,schedule_end,${this.ctx.params.id}`,
      schedule_end: 'afterFieldDateTime:schedule_start',
      participants: 'required_when:is_coffee,true'
    }
  }

  /**
   * Messages would be sent in portuguese
   */
  get messages () {
    return {
      'room_id.exists': 'A sala de reunião informada não existe',
      'schedule_start.beforeFieldDateTime': 'O início da reunião deve ser antes do fim',
      'schedule_start.bookingsCollisions': 'Existe(m) agendamento(s) na faixa de horário informado para a sala informada',
      'schedule_end.afterFieldDateTime': 'O fim da reunião deve ser depois do começo',
      'participants.required_when': 'Quando tem cafézinho, informe quantas pessoas vão participar da reunião'
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

module.exports = BookingUpdate
