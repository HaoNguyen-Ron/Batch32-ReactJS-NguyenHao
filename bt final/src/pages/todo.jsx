import React from 'react';

import Add from 'components/todo/add';
import List from 'components/todo/list';
import DeleteAll from 'components/todo/action';

function TodoPage(props) {
  return (
    <div>
      <Add />
      <List />
      <DeleteAll />
    </div>
  );
}

export default TodoPage;