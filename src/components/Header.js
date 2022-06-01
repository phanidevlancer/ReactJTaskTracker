import Button from "./Button"

const Header = ({title,visibiltyChange,formVisibility}) => {

  const headerAddOnclick = () => {
    console.log('Header add click called');
    visibiltyChange()
  }

  return (
    <header className='header'>
       <h1>{title}</h1> 
       <Button title={formVisibility ? 'Close' : 'Add'} color={formVisibility ? 'red' : 'green'} onClick={headerAddOnclick}/>
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