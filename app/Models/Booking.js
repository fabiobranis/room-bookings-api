'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Booking extends Model {

  /**
   * Room relation
   *
   * @returns {BelongsTo}
   */
  room () {
    return this.belongsTo('App/Models/Room')
  }

}

module.exports = Booking
