import React from 'react';

import classes from './BoardTile.module.scss';

function BoardTile(
  {
    content
  }:
  {
    content: string
  }
) {
  return (
    <div className={classes.root}>
      <p>{content}</p>
    </div>
  );
}

export default BoardTile;
