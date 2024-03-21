const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const app = express();
const port = 3000;
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

app.use(express.json());
const whiteList = ['http://localhost:8080', 'https://myapp.com'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
