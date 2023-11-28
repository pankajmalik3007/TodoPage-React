
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import AddTask from './Components/AddTask/AddTask';
import ShowTask from './Components/ShowTask/ShowTask';
import Home from './Components/Home/Home';
import ImportantTask from './Components/ImportanatTask/ImportantTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskDetails) => {
    setTasks([...tasks, taskDetails]);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask onAddTask={handleAddTask} />} />
          <Route path="/show-task" element={<ShowTask tasks={tasks} />} />
          <Route path="/important-task" element={<ImportantTask />} />
          {/* Other routes if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
