import requestHandlers from './api/request_handler/RequestHandler';
import responseErrorHandlers from './response_error_handler/ResponseErrorHandler';

const middlewares = {
  requestHandlers,
  responseErrorHandlers,
};

export default middlewares;
