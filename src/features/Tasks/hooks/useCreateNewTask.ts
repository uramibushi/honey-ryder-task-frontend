import { useState } from 'react';
import { TaskType } from 'features/Tasks/types';
import { apiClient } from 'shared/web/apiClient';

export const useCreateNewTask = () => {
  const [ task, setTask ] = useState<TaskType>({
    title: '',
    detail: undefined,
    dueDate: undefined,
  });

  const createNewTask = () => {
    apiClient.post('Tasks/CreateNewTask', task);
  };

  return { task, setTask, createNewTask };
}
