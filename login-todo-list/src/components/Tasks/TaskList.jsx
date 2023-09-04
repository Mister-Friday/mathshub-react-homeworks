import React from 'react';
import './TaskList.css';
import Button from '../UI/Button/Button';
import ButtonReset from '../UI/Button/ButtonReset';
import exit from '../images/exit.svg';
import Card from '../UI/Card/Card';

function TaskList({ onAddlist, onUpdateTaskListHandler }) {
  let message = '';
  if (onAddlist < 1 || onAddlist === undefined) {
    message = 'Нечем заняться';
  }

  return (
    <Card>
      <div className="task_list">
        <div className="task_list_title">Список текущих задач</div>
        <div className="message">
          {message}
          {onAddlist.map((item) => (
            <div
              key={item.id}
              className={
                !item.isCompleted
                  ? 'task_list_item_completed'
                  : 'task_list_item'
              }
              id="task-list-item"
            >
              <div className="info_container">
                <ButtonReset type="button" className="delete_task_btn">
                  Удалить задачу&nbsp;
                  <img
                    className="mobile_menu_exit"
                    src={exit}
                    alt="exit-button"
                  />
                </ButtonReset>
                <div className={item.isChecked ? 'info' : 'info_hidden'}>
                  ВАЖНАЯ ЗАДАЧА
                </div>
              </div>
              <div className="task">
                <h3 className={item.isChecked ? 'important_task' : ''}>
                  {item.title}
                </h3>
                <hr />
                <p>{item.description}</p>
                <div>
                  <div className="date_create">{item.dateCreate}</div>
                  <div className="date_finish">{item.dateFinish}</div>
                </div>
              </div>
              <Button
                type="button"
                className="task_btn"
                onClick={() => {
                  onUpdateTaskListHandler(item.id);
                }}
              >
                {!item.isCompleted ? 'Возобновить' : 'Завершить'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default TaskList;
