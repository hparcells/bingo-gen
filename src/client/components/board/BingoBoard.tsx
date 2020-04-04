import React, { useState, useEffect } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import generateBoard from '../../util/generate-board';

import BoardTile from './BoardTile/BoardTile';

import { BoardData } from '../../../shared/types';

function BingoBoard({ data }: { data: BoardData }) {
  const [boardData, setBoardData] = useState<string[][]>(generateBoard(data.entries));

  return (
    <div>
      <div style={{ margin: '1em 1em 0em 1em' }}>
        <h1>{data.name}</h1>
        <p style={{ marginTop: '-1em' }}>{data.description}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {
          boardData.map((row, rowIndex) => {
            return (
              <div style={{ display: 'flex' }} key={rowIndex}>
                {
                  row.map((entry, index) => {
                    return <BoardTile content={entry} key={index} />;
                  })
                }
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default BingoBoard;
