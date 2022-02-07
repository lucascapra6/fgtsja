/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

class AbstractUrlHandler {
  constructor() {
    this.url = null;
  }

   accepts({ to, from, next }) {}

   process({ to, from, next }) {}
}

export default AbstractUrlHandler;
