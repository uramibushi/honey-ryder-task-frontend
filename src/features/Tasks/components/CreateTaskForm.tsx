import React, { useState } from 'react';
import { PrimaryButton } from 'components/ui-elements/Button';
import { InputField } from 'components/ui-elements/InputField';
import Stack from '@mui/material/Stack';
import { apiClient } from 'shared/web/apiClient';

const CreateTaskForm = () => {
  type TaskType = {
    title: string,
    detail: string | undefined,
    dueDate: string | undefined
  }

  const [task, setTask] = useState<TaskType>({
    title: '',
    detail: undefined,
    dueDate: undefined
  });

  const createNewTask : React.MouseEventHandler<HTMLButtonElement> = () => {
    apiClient.post('Tasks/CreateNewTask', task);
  };

  return (
    <div>
      <h1>Honey Ryder Task</h1>
      <div>
        <Stack spacing={2}>
          <InputField label="タスクタイトル" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />
          <InputField label="タスク詳細" value={task.detail} onChange={(e) => setTask({ ...task, detail: e.target.value })} />
          <InputField label="タスク期限" value={task.dueDate} onChange={(e) => setTask({ ...task, dueDate: e.target.value })} />
          <PrimaryButton onClick={createNewTask}>保存</PrimaryButton>
        </Stack>
      </div>
    </div>
  );
};

export default CreateTaskForm;
