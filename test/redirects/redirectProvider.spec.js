const RedirectProvider = require('../../src/redirects/redirectProvider');
const handlersQueue = require('../../src/redirects/handlersQueue');
const chainBuilder = require('../../src/redirects/chainBuilderService');

const applicationStateMock = {
  userSession: null
};

// Will be used for future tests
const getApplicationStateMock = () => {
  return {
    name: 'mocked user',
    applications: [
      {code: "BVA", fullAccess: true},
      {code: "BVS", fullAccess: true}
    ],
    legalDocumentationAcceptance: {},
    investor: {
      accreditation: {
        classification: {
          status: null
        }
      }
    }
  }
};

const redirectProvider = new RedirectProvider(chainBuilder.buildChain(handlersQueue));

describe('ForceRedirect should return correct state when: ', () => {
  test('user is not logged in', () => {
    expect(redirectProvider.getRedirect(applicationStateMock)).toEqual('access.denieid');
  });
});
