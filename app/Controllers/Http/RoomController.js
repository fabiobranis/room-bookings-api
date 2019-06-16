'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const RoomService = use('App/Services/RoomService')

/**
 * Resourceful controller for interacting with rooms
 */
class RoomController {

  constructor () {
    this.roomService = new RoomService
  }

  /**
   * Show a list of all rooms.
   * GET rooms
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({request, response, view}) {
    if (request.input('page')) {
      return await this.roomService.paginate(request.input('page'))
    }
    return await this.roomService.fetchAll()

  }

  /**
   * Create/save a new room.
   * POST rooms
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({request, response}) {
    return await this.roomService.store(request.only(['location_id', 'name', 'description']))
  }

  /**
   * Display a single room.
   * GET rooms/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({params, request, response, view}) {
    return await this.roomService.get(params.id)
  }

  /**
   * Update room details.
   * PUT or PATCH rooms/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({params, request, response}) {
    return await this.roomService.update(request.only(['location_id', 'name', 'description']), params.id)
  }

  /**
   * Delete a room with id.
   * DELETE rooms/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({params, request, response}) {
    return await this.roomService.destroy(params.id)
  }
}

module.exports = RoomController
