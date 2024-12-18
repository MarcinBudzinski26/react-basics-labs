import Task from './components/Task';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { title: "Dishes", description: "Empty dishwasher", deadline: "Today" },
      { title: "Laundry", description: "Fold Clothes and put away", deadline: "Tommorow" },
      { title: "Tidy Up", deadline: "Today" }
    ]
  });


  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title={taskState.tasks[0].title} deadline={taskState.tasks[0].deadline} description={taskState.tasks[0].description} />
      <Task title={taskState.tasks[1].title} deadline={taskState.tasks[1].deadline} description={taskState.tasks[1].description} />
      <Task title={taskState.tasks[2].title} deadline={taskState.tasks[2].deadline} description={taskState.tasks[2].description} />
    </div>
  );
}

export default App;
