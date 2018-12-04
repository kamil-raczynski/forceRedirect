class BaseHandler {

  setParent(parent) {
    this.parentHandler = parent;
  };

  handle(applicationState) {
    if (this.canHandle(applicationState)) {
      return this.getRedirect(applicationState);
    } else {
      return this.callHandleFromNext(applicationState);
    }
  };

  callHandleFromNext(applicationState) {
    return this.parentHandler.handle(applicationState);
  }

  canHandle() {
    throw new Error("The canHandle method needs to be implemented");
  }

  getRedirect() {
    throw new Error('The getRedirect method needs to be implemented');
  }

}

module.exports = BaseHandler;

