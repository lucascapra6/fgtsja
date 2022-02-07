/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

class AbstractErrorHandler {
  constructor() {
    this.requestStatus = null;
    this.requestFailCode = null;
  }

  accepts(errorObject) {
    if (
      this.requestStatus === errorObject.status &&
      this.requestFailCode &&
      this.requestFailCode == errorObject.data.error_code
    ) {
      errorObject.handled = true;
      return true;
    }
    return false;
  }

  process(_errorObject, router) {}
}

export default AbstractErrorHandler;

// Classe abstrata serve para definir os metodos e o contrutor que as classes filhas deverão ter
