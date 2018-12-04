const RedirectProvider = require("./redirects/redirectProvider");
const handlersQueue = require('./redirects/handlersQueue');

const chainBuilder = require('./redirects/chainBuilderService');

const redirectProvider = new RedirectProvider(chainBuilder.buildChain(handlersQueue));

const applicationState = {
  userSession: null
};

redirectProvider.getRedirect(applicationState);