import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import TaskList from '../Tasks/TaskList';
import './Home.css';
import AddTask from '../Tasks/AddTask';

function Home() {
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
    console.log('taskList =', taskList);
  };
  return (
    <Card className="home">
      <TaskList
        onAddlist={taskList}
        onUpdateTaskListHandler={updateIsCompletedHandler}
      />
      <AddTask onAddTask={addTaskHandler} />
    </Card>
  );
}

export default Home;
