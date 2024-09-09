import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [Tasks, setTasks] = useState(JSON.parse(localStorage.getItem("Tasks")) || []);
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [ID, setID] = useState(null);

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(Tasks));
  }, [Tasks]);

  const handleAddOrUpdateTask = (e) => {
    e.preventDefault();

    if (!Name || !Description) {
      alert("All fields are required");
      return;
    }

    const newTask = {
      id: ID ? ID : Math.floor(Math.random() * 100000),
      name: Name,
      description: Description,
      date: new Date().toISOString().split("T")[0], 
    };

    if (ID) {
      setTasks(Tasks.map((Task) => (Task.id === ID ? newTask : Task)));
      alert("Task updated successfully.");
      setID(null);
    } else {
      setTasks([...Tasks, newTask]);
      alert("Task added successfully.")
    }
   
    setName("");
    setDescription("");
  };

  const handleEditTask = (Task) => {
    setName(Task.name);
    setDescription(Task.description);
    setID(Task.id);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = Tasks.filter((Task) => Task.id !== id);
    setTasks(updatedTasks);
    alert("Task Deleted successfully.")
  };

  return (
    <div className="app-container">
      <div className="todo-container">
        <h2 className="todo-title">TODO App</h2>

        <form className="add-Task-form" onSubmit={handleAddOrUpdateTask}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Add New Task"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Task Description"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" className="add-btn">
              {ID ? "Update Task" : "Add Task"}
            </button>
          </div>
        </form>

        <h3 className="Tasks-title">Tasks</h3>
        <div className="Tasks-list">
          {Tasks.map((Task) => (
            <div key={Task.id} className="Task-card">
              <h4>{Task.name}</h4>
              <p>{Task.date}</p>
              <p>{Task.description}</p>
              <div className="Task-actions">
                <button onClick={() => handleEditTask(Task)}>
                  <i className="fa fa-pencil"></i>
                </button>
                <button onClick={() => handleDeleteTask(Task.id)}>
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;