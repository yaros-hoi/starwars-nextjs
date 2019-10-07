// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const express = require('express');
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const next = require('next');

// eslint-disable-next-line no-undef
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.static('static'));

    server.get('/film/:filmId', (req, res) => {
      const actualPage = '/film';
      const queryParams = { ...req.params };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/:filmId/characters/:characterId', (req, res) => {
      const actualPage = '/character';
      const queryParams = { ...req.params };
      app.render(req, res, actualPage, queryParams);
    });

    server.get(
      '/:filmId/characters/:characterId/planets/:planetId',
      (req, res) => {
        const actualPage = '/planet';
        const queryParams = { ...req.params };
        app.render(req, res, actualPage, queryParams);
      }
    );

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    // eslint-disable-next-line no-undef
    process.exit(1);
  });

