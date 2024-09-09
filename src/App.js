import React from 'react';
import './App.css';

function App() {
  const tasksToDo = ['Task 1', 'Task 2', 'Task 3'];
  const tasksInProgress = ['Task 4'];
  const tasksDone = ['Task 5'];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kanban Board</h1>
      </header>
      <div className="kanban-container">
        <div className="kanban-column">
          <h2>To-Do</h2>
          <ul>
            {tasksToDo.map(task => <li key={task}>{task}</li>)}
          </ul>
        </div>
        <div className="kanban-column">
          <h2>In Progress</h2>
          <ul>
            {tasksInProgress.map(task => <li key={task}>{task}</li>)}
          </ul>
        </div>
        <div className="kanban-column">
          <h2>Done</h2>
          <ul>
            {tasksDone.map(task => <li key={task}>{task}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;