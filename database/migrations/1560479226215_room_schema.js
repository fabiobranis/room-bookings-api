'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoomSchema extends Schema {
  up () {
    this.create('rooms', (table) => {
      table.increments()
      table
        .integer('location_id')
        .unsigned()
        .references('id')
        .inTable('locations')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name').notNullable()
      table.text('description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('rooms')
  }
}

module.exports = RoomSchema
