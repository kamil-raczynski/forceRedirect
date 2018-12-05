const BaseHandler = require('./base');

class AccessDeniedHandler extends BaseHandler {
  canHandle(applicationState) {
    // TODO add specifications
    return true
  }
  getRedirect() {
    return 'access.denieid';
  }
}

module.exports = AccessDeniedHandler;