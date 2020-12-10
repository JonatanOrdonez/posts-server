import express from 'express';
import Loader from './loaders';
import config from './config';

const startServer = async () => {
  const app = express();
  await new Loader(app).init();

  app.listen(config.port, () => {
    return console.log(`server is listening on http://localhost:${config.port}`);
  });
}

startServer();