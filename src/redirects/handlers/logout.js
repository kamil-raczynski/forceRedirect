const BaseHandler = require('./base');

class LogoutHandler extends BaseHandler {

  canHandle(applicationState) {
    // TODO add specifications
    return false
  }
  getRedirect() {
    return 'correct.redirect';
  }
}

module.exports = LogoutHandler;