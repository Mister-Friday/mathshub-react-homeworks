import React, { useContext, useEffect, useState } from 'react';
import Card from '../UI/Card/Card';
import TaskList from '../Tasks/TaskList';
import './Home.css';
import AddTask from '../Tasks/AddTask';
import ThemeContext from '../context/ThemeProviders';

function Home() {
  const contextData = useContext(ThemeContext);

  const [taskList, setTaskList] = useState([]);

  const updateIsCompletedHandler = (id) => {
    setTaskList(
      taskList.map((item) =>
        item.id === id
          ? { ...item, isCompleted: !item.isCompleted }
          : { ...item }
      )
    );
  };

  const removeTask = (id) => {
    setTaskList([...taskList].filter((t) => t.id !== id));
  };

  const addTaskHandler = (userInput) => {
    setTaskList((prevTaskList) => [
      ...prevTaskList,

      {
        id: Math.random(1, 10000).toFixed(5).toString(),
        isCompleted: true,
        title: userInput['task-title'],
        description: userInput['task-description'],
        dateCreate: userInput['task-date-create'],
        dateFinish: userInput['task-date-finish'],
        isChecked: userInput['task-level'],
      },
    ]);

    // console.log('taskList =', taskList);
  };

  useEffect(() => {
    const data = localStorage.getItem('my-task-list');
    if (data) {
      setTaskList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('my-task-list', JSON.stringify(taskList));
  });

  return (
    <Card
      className={`home ${
        contextData.lightStyle === true ? 'light_style' : 'dark_style'
      }`}
    >
      <TaskList
        onAddTasklist={taskList}
        onTaskDelete={removeTask}
        onUpdateTaskListHandler={updateIsCompletedHandler}
      />
      <AddTask onAddTask={addTaskHandler} />
    </Card>
  );
}

export default Home;
