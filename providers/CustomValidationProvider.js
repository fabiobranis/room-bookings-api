'use strict'

const {ServiceProvider} = require('@adonisjs/fold')

class CustomValidationProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    //
  }

  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  boot () {
    const Validator = use('Validator')
    const exists = require('../app/Rules/existsValidator')
    const beforeFieldDateTime = require('../app/Rules/beforeFieldDateTime')
    const afterFieldDateTime = require('../app/Rules/afterFieldDateTime')
    const bookingsCollisions = require('../app/Rules/bookingsCollisions')

    Validator.extend('exists', exists)
    Validator.extend('beforeFieldDateTime', beforeFieldDateTime)
    Validator.extend('afterFieldDateTime', afterFieldDateTime)
    Validator.extend('bookingsCollisions', bookingsCollisions)
  }



}

module.exports = CustomValidationProvider
