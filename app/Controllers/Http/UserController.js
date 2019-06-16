'use strict'

const User = use('App/Models/User')

class UserController {

  /**
   * Just a simple method to store an User
   *
   * @param request
   * @returns {Promise<void>}
   */
  async create ({request}) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
