class RedirectProvider {
  constructor(handler) {
    this.handler = handler;
  }

  getRedirect(applicationState) {
    if (this.handler) {
      return this.handler.handle(applicationState);
    }
  }
}

module.exports = RedirectProvider;