'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Location extends Model {

  /**
   * Room relation
   *
   * @returns {HasMany}
   */
  room () {
    return this.hasMany('App/Models/Room')
  }

}

module.exports = Location
