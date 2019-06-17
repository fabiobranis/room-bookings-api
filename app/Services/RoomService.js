'use strict'

const Room = use('App/Models/Room')

/**
 * This class handles the services for room entity
 */
class RoomService {

  /**
   * Store a new room and return a promise with this new location
   *
   * @param location_id
   * @param name
   * @param description
   * @returns {Promise<*>}
   */
  async store ({location_id, name, description}) {
    return await Room.create({
      location_id,
      name,
      description
    })
  }

  /**
   * Update the room based on it's id
   *
   * @param location_id
   * @param name
   * @param description
   * @param id
   * @returns {Promise<*>}
   */
  async update ({location_id, name, description}, id) {
    const room = await Room.findOrFail(id)

    room.merge({
      location_id,
      name,
      description
    })

    await room.save()

    return room
  }

  /**
   * Delete a room based on it's id
   *
   * @param id
   * @returns {Promise<void>}
   */
  async destroy (id) {
    const room = await Room.findOrFail(id)

    await room.delete()

  }

  /**
   * Return the model based on the id
   *
   * @param id
   * @returns {Promise<*>}
   */
  async get (id) {
    const room = await Room.findOrFail(id)
    await room.load('location')
    return room
  }

  /**
   * Return a pagination for the model
   *
   * @param page
   * @returns {Promise<*|{total, perPage, lastPage, data, page}>}
   */
  async paginate (page) {
    return await Room.query()
      .with('location')
      .paginate(page)
  }

  /**
   * Return an array of all rooms
   *
   * @returns {Promise<[]>}
   */
  async fetchAll () {
    return await Room.query()
      .with('location')
      .fetch()
  }

}

module.exports = RoomService
