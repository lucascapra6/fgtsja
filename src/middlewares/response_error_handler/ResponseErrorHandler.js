import responseErrorProcessor from './ResponseErrorProcessor';

const run = (response, router) => {
  return responseErrorProcessor.run(response, router);
};

export default run;
