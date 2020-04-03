import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Creator from './Creator';
import Board from './Board';

function App() {
  return (
    <Switch>
      <Route path='/' exact children={<Home />} />
      <Route path='/creator' children={<Creator />} />
      <Route path='/b/:boardId' children={<Board />} />
    </Switch>
  );
}

export default App;
