import { ITask } from '../interface'
import './todolist.styles.css'
interface Props {
    task: ITask,
    completeTask(taskNameToDelete: string): void;
}

const ToDoList = ({ task, completeTask }: Props) => {
    return (
        <div className='task'>
            <div className='content'>
                <p>
                    {task.taskName}
                </p>
            </div>
            <button onClick={() => {
                completeTask(task.taskName)
            }}>x</button>
        </div>
    )
}

export default ToDoList
