import { useState, useEffect } from "react";
import Form from "./components/Form";
import ShowTask from './components/ShowTask';
import Header from "./components/Header";


const App = () => {

  const [tasks, setTasks] = useState(() => {
    if (localStorage.getItem("tasks")) {
      return JSON.parse(localStorage.getItem('tasks'))
    }
    else {
      return []
    }
  })

  // save tasks on localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  })

  // get tasks from localStorage
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    if (tasks) {
      setTasks(tasks)
    }
  }, []);

  let add_task = (task) => {
    setTasks((tasks) => [...tasks, task])
  }

  // delete tasks
  let delete_a_task = (taskId) => {
    setTasks((tasks) => tasks.filter((task) => task.id != taskId))
  }

  let clear_list = () => {
    setTasks([])
  }

  // mark the work done
  let mark_done = (taskId) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id == taskId ? { ...task, done: 'true' } : task
      )
    )
  }

  // marking undone
  let mark_unDone = (taskId) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id == taskId ? { ...task, done: 'false' } : task
      )
    )
  }
  // update task
  let update_task = (taskId) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id == taskId.id ? { ...task, title: taskId.title, detail: taskId.detail, deadline: taskId.deadline, done: taskId.done } : task
      )
    )
  }

  return (
    <>
      <Header />
      <h1 className="text-center text-uppercase fs-3 fw-bold mt-5 mb-5">task manager</h1>

      <Form addTask={add_task} />
      <ShowTask task={tasks} deleteTask={delete_a_task} clearList={clear_list} toggleDone={mark_done} toggleUndone={mark_unDone} updateTask={update_task} />

      <footer className="pt-5 pb-5 bg-black text-light">
        <div className="container text-center text-capitalize fs-4">
          react task manager
        </div>
      </footer>
    </>
  );
};

export default App;