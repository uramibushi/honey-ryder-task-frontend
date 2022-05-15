import React, { useState } from 'react';
import { PrimaryButton } from 'components/ui-elements/Button';
import { TextField } from 'components/ui-elements/TextField';
import { TextArea } from 'components/ui-elements/TextArea';
import Stack from '@mui/material/Stack';
import { apiClient } from 'shared/web/apiClient';

export const CreateTaskForm = () => {
  type TaskType = {
    title: string,
    detail: string | undefined,
    dueDate: string | undefined
  }

  const [task, setTask] = useState<TaskType>({
    title: '',
    detail: undefined,
    dueDate: undefined,
  });

  const createNewTask : React.MouseEventHandler<HTMLButtonElement> = () => {
    apiClient.post('Tasks/CreateNewTask', task);
  };

  return (
    <div>
      <h1>Honey Ryder Task</h1>
      <div>
        <Stack spacing={2}>
          <TextField label="タスクタイトル" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />
          <TextArea
            value={task.detail}
            onChange={(e) => setTask({ ...task, detail: e.target.value })}
          />
          <TextField label="タスク期限" value={task.dueDate} onChange={(e) => setTask({ ...task, dueDate: e.target.value })} />
          <PrimaryButton onClick={createNewTask}>保存</PrimaryButton>
        </Stack>
      </div>
    </div>
  );
};
