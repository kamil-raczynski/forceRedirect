class ChainBuilderService {
  constructor() {
    this.handlersHead = false;
    this.handlersTail = false;
  }

  buildChain(handlers) {
    this.handlers = handlers;
    this.handlers.forEach((handler) => {
      this.addHandler(handler);
    });

    return this.handlersHead;
  }

  addHandler(handlerClass) {
    const handler = new handlerClass();

    if(this.handlersTail) {
      this.handlersTail.setParent(handler);
      this.handlersTail = handler;
    } else {
      this.handlersHead = this.handlersTail = handler;
    }
  };
}

module.exports = new ChainBuilderService();