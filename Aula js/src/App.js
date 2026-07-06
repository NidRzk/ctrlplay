import { useEffect, useState } from "react";

function App() {
  // React Hooks - Funções que permitem utilizar estados e outras
  // funcionalidades dentro de componentes funcionais.

  // O useState permite que o componente guarde informações que 
  // podem mudar.
  const [taskList, setTaskList] = useState([])
  const [task, setTask] = useState('')

  function handleAddTask() {
    const taskToBeAdded = {
      tarefa: task,
      completa: false,
      id: taskList.length + 1
    }

    const newTaskList = [...taskList, taskToBeAdded]
    setTaskList(newTaskList)
    setTask('')
  }

  function handleDeleteTask(id) {
    const newTaskList = taskList.filter(t => t.id !== id)
    setTaskList(newTaskList)
  }

  function handleGetTaskFromLocalStorage() {
    const tasks = localStorage.getItem('tasks')
    return tasks
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList))
  }, [taskList])

  useEffect(() => {
    const taskListFromStorage = handleGetTaskFromLocalStorage()
    if (taskListFromStorage) {
      setTaskList(JSON.parse(taskListFromStorage))
    }
  }, [])

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>

      <h2>Adicione sua tarefa</h2>
      <div>
        <input type="text" placeholder="Tarefa" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={() => handleAddTask()}>Add</button>
      </div>

      <div className="task-container">
        {/* Renderizar as tasks */}
      </div>
    </div>
  );
}

export default App;