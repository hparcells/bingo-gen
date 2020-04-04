import React from 'react';
import { Form, Input, Switch, PageHeader, Button } from 'antd';
import { useHistory } from 'react-router-dom';

import generateId from '../../util/generate-id';

import { BoardData } from '../../../shared/types';

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
};

function Creator() {
  const history = useHistory();

  function handleBack() {
    history.push('/');
  }
  function handleFinish(values: any) {
    values.entries = values.entries.split('\n').filter((entry: string) => {
      return entry !== '';
    });

    const readyBoardData: BoardData = {
      name: values.name,
      description: values.description || '',
      entries: values.entries,
      freeSpace: Boolean(values.freeSpace)
    };

    const id = generateId();
    fetch(
      '/api/new',
      {
        method: 'POST',
        body: JSON.stringify({
          id,
          boardData: readyBoardData
        }),
        headers: { 'Content-Type': 'application/json' }
      }
    ).then((res) => {
      if(res.ok) {
        history.push(`/b/${id}`);
      }
    });
  }

  return (
    <div>
      <PageHeader
        onBack={handleBack}
        title='Creator'
      />
      <div style={{ maxWidth: '1000px', margin: 'auto', padding: '1em' }}>
        <Form
          {...formItemLayout}
          onFinish={handleFinish}
        >
          <Form.Item
            label='Name'
            name='name'
            rules={[
              { max: 36, message: 'Length must be 36 characters or less.' },
              { required: true, message: 'Must include title.' }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Description'
            name='description'
            rules={[
              { max: 64, message: 'Length must be 64 characters or less.' }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Include Free Space?'
            name='freeSpace'
          >
            <Switch />
          </Form.Item>
          <Form.Item
            label='Possible Entries'
            name='entries'
            extra={'Place each entry on a new line. 24 or 25 (depending if you include a free space or not) is recommended so duplicate entries don\'t appear on the same board.'}
            rules={[{ required: true, message: 'Must include entries.' }]}
          >
            <Input.TextArea rows={10} />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' style={{ marginTop: '1em' }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Creator;
