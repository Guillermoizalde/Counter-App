import React, { useDebugValue } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ([value]) => {

    const [counter, setCounter] = useState(0);

    //handleAdd
    const handleAdd = {e} => {
        setCounter (counter + 1 );

    }

  return (
    <div>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={ {handleAdd} >+1</Button>
    </div>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp