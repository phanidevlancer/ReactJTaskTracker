import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState, useEffect} from 'react'
import AddTask from "./components/AddTask";


function App() {

  const [taskList, setTaskList] = useState([])

  useEffect(() => {

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTaskList(tasksFromServer)
    }

    getTasks()

  },[])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

    const [formVisibility,setFormVisibilty] = useState(false)

    const toggleAddFormVisibility = () => {
        setFormVisibilty(!formVisibility)
    }

    const deleteTaskbyID = async (id) => {

      await fetch(`http://localhost:5000/tasks/${id}`, {
        method : 'DELETE'
      })

      setTaskList(taskList.filter((task) => task.id !== id))
    }

    const toggleReminder = (id) => {
      console.log("Task is toggled");
      setTaskList(taskList.map((task) => task.id === id ? {...task,reminder : !task.reminder} : task))
    }

    const addTask =  async (task) => {

      const res = fetch('http://localhost:5000/tasks', {
        method : 'POST',
        headers : {
          'Content-type' : 'application/json',
        },
        body : JSON.stringify(task),
      }) 

      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id,...task}
      setTaskList([...taskList,newTask])
    }

  return (
    <div className="container">
      <Header visibiltyChange = {toggleAddFormVisibility} formVisibility = {formVisibility}/>
      {formVisibility && <AddTask onAddTask = {addTask}/>}
      {taskList.length > 0 ? (<Tasks taskList={taskList} deleteTask = {deleteTaskbyID} onToggle = {toggleReminder} /> ) : ('No Tasks to show!')}
    </div>
  );
}

export default App;
