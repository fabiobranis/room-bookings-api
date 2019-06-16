'use strict'

const Location = use('App/Models/Location')

/**
 * This class handles the services for location entity
 */
class LocationService {

  /**
   * Store a new location and return a promise with this new location
   *
   * @param name
   * @param description
   * @returns {Promise<*>}
   */
  async store ({name, description}) {
    return await Location.create({
      name,
      description
    })
  }

  /**
   * Update the location based on it's id
   *
   * @param name
   * @param description
   * @param id
   * @returns {Promise<*>}
   */
  async update ({name, description}, id) {
    const location = await Location.findOrFail(id)
    location.merge({
      name,
      description
    })

    await location.save()

    return location
  }

  /**
   * Delete a location based on it's id
   *
   * @param id
   * @returns {Promise<void>}
   */
  async destroy (id) {
    const location = await Location.findOrFail(id)

    await location.delete()

  }

  /**
   * Return the model based on the id
   *
   * @param id
   * @returns {Promise<*>}
   */
  async get (id) {
    return await Location.findOrFail(id)
  }

  /**
   * Return a pagination for the model
   *
   * @param page
   * @returns {Promise<*|{total, perPage, lastPage, data, page}>}
   */
  async paginate (page) {
    return await Location.query().paginate(page)
  }

  /**
   * Return an array of all locations
   *
   * @returns {Promise<[]>}
   */
  async fetchAll () {
    return await Location.all()
  }

}

module.exports = LocationService
