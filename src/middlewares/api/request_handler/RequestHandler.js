import requestProcessor from './RequestProcessor';

const run = (request, router) => {
  requestProcessor.run(request, router);
};

export default run;
