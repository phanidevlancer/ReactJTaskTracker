import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'
import AddTask from "./components/AddTask";


function App() {

  const [taskList, setTaskList] = useState([
    {
        id : 1,
        text : 'F2 Movie',
        day : 'Feb 3rd at 2:30 PM',
        reminder : false
    },
    {
        id : 2,
        text : 'F3 Movie',
        day : 'Feb 3rd at 2:30 PM',
        reminder : false
    },
    {
        id : 3,
        text : 'F4 Movie',
        day : 'Feb 3rd at 2:30 PM',
        reminder : false
    }
    
    ])

    const deleteTaskbyID = (id) => {
      setTaskList(taskList.filter((task) => task.id !== id))
    }

    const toggleReminder = (id) => {
      console.log("Task is toggled");
      setTaskList(taskList.map((task) => task.id === id ? {...task,reminder : !task.reminder} : task))
    }

  return (
    <div className="container">
      <Header/>
      <AddTask/>
      {taskList.length > 0 ? (<Tasks taskList={taskList} deleteTask = {deleteTaskbyID} onToggle = {toggleReminder}/> ) : ('No Tasks to show!')}
    </div>
  );
}

export default App;
