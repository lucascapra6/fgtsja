import AbstractUrlHandler from "./AbstractUrlHandler";

class TokenNotFoundHandler extends AbstractUrlHandler {
  // eslint-disable-next-line class-methods-use-this
  accepts({ to }) {
    return (
      to.path !== "/login" &&
      !to.path.includes('public') &&
      !localStorage.getItem("Role")
    );
  }

  // eslint-disable-next-line class-methods-use-this
  process({ next }) {
    localStorage.removeItem('Authorizarion');
    next("/login");
  }
}

export default new TokenNotFoundHandler();
