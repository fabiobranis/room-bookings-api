'use strict'

class SessionController {

  /**
   * Creates a token and return
   *
   * @param request
   * @param auth
   * @returns {Promise<*>}
   */
  async create ({request, auth}) {
    const {email, password} = request.all()

    const token = await auth.attempt(email, password)

    return token
  }

}

module.exports = SessionController
