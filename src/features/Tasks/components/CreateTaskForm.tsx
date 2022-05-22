import React from 'react';
import { PrimaryButton } from 'components/ui-elements/Button';
import {
  DateField,
  TextArea,
  TextField,
} from 'components/ui-elements/TextField';
import Stack from '@mui/material/Stack';
import { useCreateNewTask } from 'features/Tasks/hooks';
import { ErrorMessage } from 'components/ui-elements/Message';

export const CreateTaskForm = () => {
  const { task, setTask, createNewTask } = useCreateNewTask();
  return (
    <div>
      <h1>Honey Ryder Task</h1>
      <ErrorMessage />
      <div>
        <Stack spacing={2}>
          <TextField
            label="タスクタイトル"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
          <TextArea
            label="タスク詳細"
            value={task.detail}
            onChange={(e) => setTask({ ...task, detail: e.target.value })}
          />
          <DateField
            label="タスク期限"
            value={task.dueDate}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          />
          <PrimaryButton onClick={createNewTask}>保存</PrimaryButton>
        </Stack>
      </div>
    </div>
  );
};
