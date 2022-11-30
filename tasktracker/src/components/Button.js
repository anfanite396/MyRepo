import PropTypes from 'prop-types'

const Button = (props) => {
  // const onClick = () => {
  //   console.log("Hello");
  // }

  return (
    <div>
        <button onClick={props.onClick} style={{backgroundColor : props.color}} className='btn'> {props.text} </button>
    </div>
  )
}

Button.default = {
    color : 'steelblue',
}

Button.propTypes = {
    text : PropTypes.string,
    color : PropTypes.string,
    onClick : PropTypes.func,
}

export default Button