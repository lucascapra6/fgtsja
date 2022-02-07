import AuthenticateDoneHandler from './AuthenticateDoneHandler';

class RequestProcessor {
  constructor() {
    this.handlers = [AuthenticateDoneHandler]; // Importação e adição tratador concreto
  }

  run(requestObject, router) {
    // Chama o metodo de aceppts do tratador concreto para verificar se o tratador deve tratara a o objeto
    this.handlers.map((requestHandler) => {
      if (requestHandler.accepts(requestObject)) {
        requestHandler.process(requestObject, router);
      }
      return null;
    });
  }
}

export default new RequestProcessor();
