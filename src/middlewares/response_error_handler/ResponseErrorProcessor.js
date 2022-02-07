import TokenExpiresHandler from './TokenExpiresHandler';

class ErrorProcessor {
  constructor() {
    this.handlers = [TokenExpiresHandler]; // Importação e adição tratador concreto
  }

  run(errorObject, router) {
    // Chama o metodo de acept do tratador concreto para verificar se o tratador deve tratara a o objeto
    let handled = false;
    this.handlers.map((errorHandler) => {
      if (errorHandler.accepts(errorObject)) {
        handled = true;
        errorHandler.process(errorObject, router);
      }
      return null;
    });
    return handled;
  }
}

export default new ErrorProcessor();
