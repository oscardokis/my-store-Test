const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

app.use(express.json());
const whiteList = ['http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};
app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.send('Hello World!');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
