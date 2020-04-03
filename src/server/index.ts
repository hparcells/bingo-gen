import { app, rootRouter } from 'fullstack-system';

import { BoardData } from '../shared/types';

const boards: { [id: string]: BoardData } = {
  // TODO: Delete this.
  'h': {
    entries: ['a', 'b', 'c'],
    freeSpace: true
  }
};

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
