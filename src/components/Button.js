import PropTypes from 'prop-types'

const Button = ({title,color, onClick}) => {

    return <button onClick={onClick} className="btn" style={{backgroundColor : color}}>{title}</button>
}

Button.defaultProps = {
    title : 'Default!',
    color : 'grey'
}

Button.propTypes = {
    title : PropTypes.string,
    color : PropTypes.string
}

export default Button