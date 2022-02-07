import AbstractUrlHandler from './AbstractUrlHandler';

class PageNotFoundHandler extends AbstractUrlHandler {
  constructor() {
    super();
    this.url = '/page-not-found';
  }

  // eslint-disable-next-line class-methods-use-this
   accepts({ to }) {
    return !to.name && to.path!="/";
  }

  // eslint-disable-next-line class-methods-use-this
   process({ next }) {
    next(this.url);
  }
}

export default new PageNotFoundHandler();
