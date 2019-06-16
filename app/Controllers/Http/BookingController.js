'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/** @typedef {import('@adonisjs/framework/src/View')} View */

const BookingService = use('App/Services/BookingService')

/**
 * Resourceful controller for interacting with bookings
 */
class BookingController {

  constructor () {
    this.bookingService = new BookingService
  }

  /**
   * Show a list of all bookings.
   * GET bookings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({request, response, view}) {
    if (request.input('page')) {
      return await this.bookingService.paginate(request.input('page'))
    }
    return this.bookingService.fetchAll()
  }

  /**
   * Create/save a new booking.
   * POST bookings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({request, response}) {
    return await this.bookingService.store(request.only([
      'room_id',
      'schedule_start',
      'schedule_end',
      'accountable',
      'is_coffee',
      'participants',
      'description'])
    )
  }

  /**
   * Display a single booking.
   * GET bookings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({params, request, response, view}) {
    return await this.bookingService.get(params.id)
  }

  /**
   * Update booking details.
   * PUT or PATCH bookings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({params, request, response}) {
    return await this.bookingService.update(request.only([
        'room_id',
        'schedule_start',
        'schedule_end',
        'accountable',
        'is_coffee',
        'participants',
        'description']
      ),
      params.id)
  }

  /**
   * Delete a booking with id.
   * DELETE bookings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({params, request, response}) {
    return await this.bookingService.destroy(params.id)
  }
}

module.exports = BookingController
