import { useState } from "react"

const AddTask = () => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

  return (
    <form className='add-form'>
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
            value={text}
            onChange={(event) => setReminder(event.currentTarget.checked)}/>
        </div>

        <input type='submit' value='save task' className='btn btn-block'/>
    </form>
  )
}

export default AddTask