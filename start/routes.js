'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/auth', 'SessionController.create')

Route.resource('locations', 'LocationController')
  .apiOnly()
  .middleware('auth')
  .validator(new Map([
    [['locations.store'], ['Location']],
    [['locations.update'], ['LocationUpdate']]
  ]))

Route.resource('rooms', 'RoomController')
  .apiOnly()
  .middleware('auth')
  .validator(new Map([
    [['rooms.store'], ['Room']],
    [['rooms.update'], ['RoomUpdate']]
  ]))

Route.resource('bookings', 'BookingController')
  .apiOnly()
  .middleware('auth')
  .validator(new Map([
    [['bookings.store'], ['Booking']],
    [['bookings.update'], ['BookingUpdate']]
  ]))
