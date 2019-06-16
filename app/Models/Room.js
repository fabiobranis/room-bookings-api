'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Room extends Model {

  /**
   * Booking relation
   *
   * @returns {HasMany}
   */
  booking () {
    return this.hasMany('App/Models/Booking')
  }

  /**
   * Room relation
   *
   * @returns {BelongsTo}
   */
  location () {
    return this.belongsTo('App/Models/Location')
  }

}

module.exports = Room
