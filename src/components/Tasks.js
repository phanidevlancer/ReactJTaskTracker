import Task from "./Task"


const Tasks = ({taskList, deleteTask,onToggle}) => {

    

  return (
    <div>
        {taskList.map((task) => (<Task key={task.id} task={task} deleteTask = {deleteTask} onToggle = {onToggle}/>))}
    </div>
  )
}

export default Tasks