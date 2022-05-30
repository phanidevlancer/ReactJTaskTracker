import Button from "./Button"

const Header = ({title}) => {

  const headerAddOnclick = () => {
    console.log('Header add click called');
  }

  return (
    <header className='header'>
       <h1>{title}</h1> 
       <Button title='Add' color='green' onClick={headerAddOnclick}/>
        </header>
  )
}

Header.defaultProps = {
    title : 'Task Tracker Default'
}

// Header.propTypes = {
//     title : PropTypes.string,
// }

export default Header