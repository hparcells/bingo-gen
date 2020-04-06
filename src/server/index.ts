import { app, rootRouter } from 'fullstack-system';
import bodyParser from 'body-parser';

import { BoardData } from '../shared/types';

const boards: { [id: string]: BoardData } = {};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/api/:boardId', (req, res) => {
  if(boards[req.params.boardId]) {
    res.send(boards[req.params.boardId]);
    return;
  }
  res.send('404');
});
app.get('*', (req, res, next) => {
  req.url = '/';
  rootRouter(req, res, next);
});

app.post('/api/new', (req, res) => {
  if(req.body.id && req.body.boardData) {
    boards[req.body.id] = req.body.boardData;
    res.sendStatus(200);
  }
});
