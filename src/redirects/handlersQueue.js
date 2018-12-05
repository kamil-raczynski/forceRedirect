const LogoutHandler = require('./handlers/logout');
const AccessDeniedHandler = require('./handlers/accessDenied');

const handlersQueue = [
  LogoutHandler,
  AccessDeniedHandler
];

module.exports = handlersQueue;