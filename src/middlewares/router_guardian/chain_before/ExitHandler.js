import AbstractUrlHandler from './AbstractUrlHandler';

class PageNotFoundHandler extends AbstractUrlHandler {
  constructor() {
    super();
    this.url = '/exit';
  }

  // eslint-disable-next-line class-methods-use-this
   accepts({ to,from }) {
    return to.path==this.url;
  }

  // eslint-disable-next-line class-methods-use-this
   process({ next }) {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('Role');
    next('/');
  }
}

export default new PageNotFoundHandler();
