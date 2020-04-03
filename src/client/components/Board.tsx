import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetch from 'node-fetch';
import { BoardData } from '../../shared/types';

function Board() {
  const { boardId } = useParams();
  const [boardData, setBoardData] = useState<BoardData | 404>();

  useEffect(() => {
    fetch(`/api/${boardId}`).then((res) => {
      return res.text();
    }).then((data) => {
      setBoardData(JSON.parse(data));
    });
  }, []);

  return (
    <div>
      {
        boardData
          ? boardData === 404
            ? 'Not found :('
            : JSON.stringify(boardData)
          : 'loading'
      }
    </div>
  );
}

export default Board;
