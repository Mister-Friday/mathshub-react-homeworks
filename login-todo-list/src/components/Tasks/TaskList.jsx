import React, { useState, useEffect } from 'react';
import { BsFire } from 'react-icons/bs';

import './TaskList.css';
import Button from '../UI/Button/Button';
import ButtonReset from '../UI/Button/ButtonReset';
import exit from '../../exit.svg';
import Card from '../UI/Card/Card';

function TaskList({ onAddTasklist, onTaskDelete, onUpdateTaskListHandler }) {
  const [isActiveFiltered, setIsActiveFiltered] = useState(false);
  const [filteredList, setFilteredList] = useState(onAddTasklist);

  useEffect(() => {
    setFilteredList(onAddTasklist);
  }, [onAddTasklist]);

  useEffect(() => {
    if (isActiveFiltered === true) {
      setFilteredList(
        [...onAddTasklist].filter((t) => t.isCompleted === isActiveFiltered)
      );
    } else {
      setFilteredList(onAddTasklist);
    }
  }, [isActiveFiltered]);

  const ChangeFilterHandler = () => {
    setIsActiveFiltered(!isActiveFiltered);
  };

  let message = '';
  if (onAddTasklist < 1 || onAddTasklist === undefined) {
    message = 'Нечем заняться';
  }

  return (
    <Card>
      <div className="task_list">
        <div className="task_list_title">Список текущих задач</div>
        <div className="filter_block">
          <span className="left_bar">
            Показать активные
            <input
              type="checkbox"
              id="show-active"
              onChange={ChangeFilterHandler}
            />
          </span>

          <span className="right_bar">
            Показать важные
            <input type="checkbox" id="show-important" />
          </span>
        </div>
        <div className="message">
          {message}
          {filteredList.map((item) => (
            <div
              key={item.id}
              className={
                item.isChecked ? 'task_list_item_important' : 'task_list_item'
              }
              id="task-list-item"
            >
              <div className="info_container">
                <ButtonReset
                  type="button"
                  className="delete_task_btn"
                  onClick={() => {
                    onTaskDelete(item.id);
                  }}
                >
                  Удалить задачу&nbsp;
                  <img
                    className="mobile_menu_exit"
                    src={exit}
                    alt="exit-button"
                  />
                </ButtonReset>

                <div className={item.isChecked ? 'info' : 'info_hidden'}>
                  <BsFire /> Важная задача
                </div>
              </div>

              <div className={!item.isCompleted ? 'task_completed' : 'task'}>
                <h3
                  className={
                    !item.isCompleted ? 'task_list_item_completed' : ''
                  }
                >
                  {item.title}
                </h3>
                <hr />
                <p
                  className={
                    !item.isCompleted ? 'task_list_item_completed' : ''
                  }
                >
                  {item.description}
                </p>
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
