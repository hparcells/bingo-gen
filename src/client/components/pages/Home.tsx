import React from 'react';
import { Result, Button } from 'antd';
import { TableOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  function handleOpenCreator() {
    history.push('/creator');
  }

  return (
    <Result
      icon={<TableOutlined />}
      title='Bingo Gen'
      subTitle='Create a bingo board for any occasion. Create a bingo board or go to a link of a board. (Use a dsektop for the best experience.)'
      extra={<Button type='primary' onClick={handleOpenCreator}>Create Bingo Board</Button>}
    />
  );
}

export default Home;
