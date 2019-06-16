'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const LocationService = use('App/Services/LocationService')

/**
 * Resourceful controller for interacting with locations
 */
class LocationController {

  constructor () {
    this.locationService = new LocationService
  }

  /**
   * Show a list of all locations.
   * GET locations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({request, response, view}) {

    if (request.input('page')) {
      return await this.locationService.paginate(request.input('page'))
    }
    return this.locationService.fetchAll()
  }

  /**
   * Create/save a new location.
   * POST locations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({request, response}) {
    return await this.locationService.store(request.only(['name', 'description']))
  }

  /**
   * Display a single location.
   * GET locations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({params, request, response, view}) {
    return await this.locationService.get(params.id)
  }

  /**
   * Update location details.
   * PUT or PATCH locations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({params, request, response}) {
    return await this.locationService.update(request.only(['name', 'description']), params.id)
  }

  /**
   * Delete a location with id.
   * DELETE locations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({params, request, response}) {
    return await this.locationService.destroy(params.id)
  }
}

module.exports = LocationController
