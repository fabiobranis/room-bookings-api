'use strict'

const Booking = use('App/Models/Booking')

/**
 * This class handles the services for Booking entity
 */
class BookingService {

  /**
   * Store a new Booking and return a promise with this new location
   *
   * @param location_id
   * @param name
   * @param description
   * @returns {Promise<*>}
   */
  async store ({room_id, schedule_start, schedule_end, accountable, is_coffee, participants, description}) {
    return await Booking.create({
      room_id,
      schedule_start,
      schedule_end,
      accountable,
      is_coffee,
      participants,
      description
    })
  }

  /**
   * Update the Booking based on it's id
   *
   * @param location_id
   * @param name
   * @param description
   * @param id
   * @returns {Promise<*>}
   */
  async update ({room_id, schedule_start, schedule_end, accountable, is_coffee, participants, description}, id) {
    const booking = await Booking.findOrFail(id)

    booking.merge({
      room_id,
      schedule_start,
      schedule_end,
      accountable,
      is_coffee,
      participants,
      description
    })

    await booking.save()

    return booking
  }

  /**
   * Delete a Booking based on it's id
   *
   * @param id
   * @returns {Promise<void>}
   */
  async destroy (id) {
    const booking = await Booking.findOrFail(id)

    await booking.delete()

  }

  /**
   * Return the model based on the id
   *
   * @param id
   * @returns {Promise<*>}
   */
  async get (id) {
    return  await Booking.query()
      .where('id', id)
      .with('room')
      .with('room.location')
      .first()
  }

  /**
   * Return a pagination for the model
   *
   * @param page
   * @returns {Promise<*|{total, perPage, lastPage, data, page}>}
   */
  async paginate (page) {
    return await Booking.query()
      .with('room')
      .with('room.location')
      .paginate(page)
  }

  /**
   * Return an array of all bookings
   *
   * @returns {Promise<[]>}
   */
  async fetchAll () {
    return await Booking.query()
      .with('room')
      .with('room.location')
      .fetch()
  }

}


module.exports = BookingService
