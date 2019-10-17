import React from 'react'
import './Controls.css'

const Controls = wtf => (
  /* <> are react fragments */
  <>
    <button className="next-button" onClick={() => wtf.handleIncrement()}> Next ></button>
    <button className="previous-button" onClick={() => wtf.handleDecrement()}> {'< Previous'}  </button>
  </>
)

export default Controls