/* eslint-disable no-debugger */
/* eslint-disable class-methods-use-this */
import AbstractErrorHandler from './AbstractErrorHandler';

class TokenExpiresHandler extends AbstractErrorHandler {
  constructor() {
    super();
    this.requestStatus = 401;
    this.requestFailCode = 101;
  }

  process(_errorObject, router) {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('Role');
    router.push('/login');
  }
  
}

export default new TokenExpiresHandler();
