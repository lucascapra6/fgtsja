import tokenNotFoundHandler from './TokenNotFoundHandler';
import redirectToHome from './RedirectToHome';
import pageNotFoundHandler from "./PageNotFoundHandler";
import validateHandler from "./ValidateHandler";
import exitHandler from "./ExitHandler";
class UrlProcessor {
  constructor() {
    this.handlers = [pageNotFoundHandler];
  }

  run({ to, from, next }) {
    let handled = false;
    this.handlers.map((urlHandler) => {
      if (urlHandler.accepts({ to, from, next })) {
        handled = true;
        urlHandler.process({ to, from, next });
      }
      return null;
    });

    if (!handled) next();
  }
}

export default new UrlProcessor();
