import React, { useState } from 'react'
import {Button, ButtonGroup } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { FaPlay, FaStop } from 'react-icons/fa'



const Timer = ({sessionDuration, setSessionDuration, minutesToDuration, secondsToDuration}) => {
    const focusMessage = `Focusing For ${secondsToDuration(sessionDuration)} Minutes!`
    const breakMessage = `Take a break for minutes`

  return (
    <div className='d-flex justify-content-center pt-5'>
      <IconContext.Provider value={{size: '1.5em'}} >
        <ButtonGroup>
            <Button style={{backgroundColor: "#8FC0A9", border:"none"}}><FaPlay /></Button>
            <Button style={{backgroundColor: '#6B2737'}}><FaStop /></Button>
        </ButtonGroup>
        <h3>{focusMessage}</h3>
     </IconContext.Provider>
    </div>
  )
}

export default Timer