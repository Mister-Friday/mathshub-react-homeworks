import React, { useState, useRef } from 'react';
import Button from '../UI/Button/Button';
import ModalError from '../UI/ModalError/ModalError';
import './AddTask.css';

function AddTask({ onAddTask }) {
  const taskTitleRef = useRef();
  const taskDescriptionRef = useRef();
  const taskDateCreateRef = useRef();
  const taskDateFinishRef = useRef();
  const taskLevelCheckedRef = useRef();

  const [error, setError] = useState(null);

  const AddNewTask = (event) => {
    event.preventDefault();

    const currentTitle = taskTitleRef.current.value;
    const currentDescription = taskDescriptionRef.current.value;
    const currentDateCreate = taskDateCreateRef.current.value;
    const currentDateFinish = taskDateFinishRef.current.value;
    const currentlevelChecked = taskLevelCheckedRef.current.checked;

    if (+currentDateCreate <= 0 || +currentDateFinish <= 0) {
      setError({
        title: 'Ошибка',
        massage: 'Не указаны сроки задачи.',
      });
      return;
    }

    const userInput = {
      'task-title': currentTitle,
      'task-description': currentDescription,
      'task-date-create': currentDateCreate,
      'task-date-finish': currentDateFinish,
      'task-level': currentlevelChecked,
    };

    onAddTask(userInput);
    taskTitleRef.current.value = '';
    taskDescriptionRef.current.value = '';
    taskDateCreateRef.current.value = '';
    taskDateFinishRef.current.value = '';
    taskLevelCheckedRef.current.checked = false;
  };

  const ErrorHandler = () => {
    setError(null);
    taskTitleRef.current.value = '';
    taskDescriptionRef.current.value = '';
    taskDateCreateRef.current.value = '';
    taskDateFinishRef.current.value = '';
    taskLevelCheckedRef.current.checked = false;
  };

  return (
    <>
      {error && (
        <ModalError
          title={error.title}
          massage={error.massage}
          onClose={ErrorHandler}
        />
      )}

      <form className="form" action="" onSubmit={AddNewTask}>
        <div className="container">
          <div className="task_input_container">
            <input
              className="task_input"
              type="text"
              id="task-title"
              ref={taskTitleRef}
              placeholder="Название задачи"
              required
            />
          </div>

          <div className="task_input_container">
            <input
              className="task_input"
              type="text"
              id="task-description"
              ref={taskDescriptionRef}
              placeholder="Описание задачи"
              required
            />
          </div>
          <div className="task_input_container">
            <div>Дата начала задачи:</div>
            <input
              className="task_input"
              type="datetime-local"
              id="task-date-created"
              ref={taskDateCreateRef}
            />
          </div>

          <div className="task_input_container">
            <div>Дата окончания задачи:</div>
            <input
              className="task_input"
              type="datetime-local"
              id="task-date-finish"
              ref={taskDateFinishRef}
            />
          </div>

          <div className="task_input_container">
            <div>
              Важная задача
              <input
                type="checkbox"
                id="task-level"
                ref={taskLevelCheckedRef}
              />
            </div>
          </div>
        </div>
        <Button type="submit">Добавить задачу</Button>
      </form>
    </>
  );
}

export default AddTask;
