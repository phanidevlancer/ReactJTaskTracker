import { useState } from "react"

const AddTask = ({onAddTask}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please provide task text!')
            return
        }

        if(!day){
            alert('Please Day & time')
            return
        }

        onAddTask({text,day,reminder})

        setDay('')
        setText('')
        setReminder(false)


    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add a title'
            value={text}
            onChange={(event) => setText(event.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Day & time</label>
            <input type='text' placeholder='Add a date and time'
            value={day}
            onChange={(event) => setDay(event.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox'
            checked={reminder}
            onChange={(event) => setReminder(event.currentTarget.checked)}/>
        </div>

        <input type='submit' value='save task' className='btn btn-block'/>
    </form>
  )
}

export default AddTask