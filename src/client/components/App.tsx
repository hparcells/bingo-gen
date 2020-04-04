import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Creator from './pages/Creator';
import Board from './pages/Board';
import NotFound from './NotFound';

function App() {
  return (
    <Switch>
      <Route path='/' exact children={<Home />} />
      <Route path='/creator' children={<Creator />} />
      <Route path='/b/:boardId' children={<Board />} />
      <Route children={<NotFound />} />
    </Switch>
  );
}

export default App;
