import AbstractRequestHandler from './AbstractRequestHandler';

class AuthenticateDoneHandler extends AbstractRequestHandler {
  // eslint-disable-next-line class-methods-use-this
  accepts(request) {
    // eslint-disable-next-line prettier/prettier
    return !!(!request.url.includes('public') && !localStorage.getItem('Authorization'))
  }

  // eslint-disable-next-line class-methods-use-this
  process(request, router) {
    router.push({ name: 'Login' });
  }
}

export default new AuthenticateDoneHandler();
