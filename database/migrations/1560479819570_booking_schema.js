'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookingSchema extends Schema {
  up () {
    this.create('bookings', (table) => {
      table.increments()
      table
        .integer('room_id')
        .unsigned()
        .references('id')
        .inTable('rooms')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.datetime('schedule_start').notNullable()
      table.datetime('schedule_end').notNullable()
      table.string('accountable').notNullable()
      table.boolean('is_coffee').notNullable()
      table.integer('participants')
      table.text('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('bookings')
  }
}

module.exports = BookingSchema
