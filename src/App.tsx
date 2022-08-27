import { useState, FC, ChangeEvent } from 'react'
import ToDoList from './Components/todolist'
import { ITask } from './interface'
import './App.css'

const App: FC = () => {
  const [task, setTask] = useState<string>("")
  const [toDoList, setToDoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value)
  }
  const addTask = (): void => {
    const newTask = { taskName: task };
    setToDoList([...toDoList, newTask])
    console.log(toDoList)
    setTask("")
  }

  const completeTask = (taskNameToDelete: string): void => {
    setToDoList(
      toDoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div>
      <div className='header'>
        <div className="input-container">
          <input type="text" className='input' placeholder='What should I do...' value={task} onChange={handleChange} />
          <button className='addbtn' onClick={() => { addTask() }}>add</button>
        </div>
      </div>
      <div className='todolist'>
        {toDoList.map((task: ITask, key: number) => {
          return <ToDoList task={task} key={key} completeTask={completeTask}/>
        })}
      </div>
    </div>
  )
}

export default App
