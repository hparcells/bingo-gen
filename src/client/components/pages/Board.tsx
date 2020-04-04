import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import fetch from 'node-fetch';
import { Result, Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import NotFound from '../NotFound';

import { BoardData } from '../../../shared/types';
import BingoBoard from '../board/BingoBoard';

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
            ? <NotFound />
            : <BingoBoard data={boardData} />
          : null
      }
    </div>
  );
}

export default Board;
