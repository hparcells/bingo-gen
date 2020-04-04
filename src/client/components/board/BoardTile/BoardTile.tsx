import React, { useState } from 'react';
import classNames from 'classnames';

import classes from './BoardTile.module.scss';

function BoardTile(
  {
    content
  }:
  {
    content: string
  }
) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div className={classNames(
        classes.root,
        isClicked ? classes.clicked : null
      )}
      onClick={handleClick}
    >
      <p>{content}</p>
    </div>
  );
}

export default BoardTile;
