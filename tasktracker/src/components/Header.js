import Button from './Button'
import PropTypes from 'prop-types'

const Header = (props) => {

  return (
    <header className='header'>
        <h1> Task Tracker  </h1>
        <Button onClick={props.onAdd} color={props.showAddTask ? 'green' : 'black'} text={props.showAddTask ? 'Hide' : 'Add'} />
    </header>
  )
}

Header.defaultTitle = {
    title : 'Task Tracker',
}

Header.propTypes = {
    title : PropTypes.string,
}

export default Header