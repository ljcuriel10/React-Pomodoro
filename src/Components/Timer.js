import React, { useEffect, useState } from 'react'
import {Button, ButtonGroup, Col, Row, ProgressBar } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { FaPlay, FaStop, FaPause } from 'react-icons/fa'
import useInterval from '../utils/useInterval'



const Timer = ({sessionDuration, setSessionDuration, minutesToDuration, secondsToDuration, breakDuration, setBreakDuration}) => {
    
    const [session, setSession] = useState('');
    const [timer, setTimer] = useState(sessionDuration);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [count, setCount] = useState(1)
    
    const focusMessage = `Focusing For ${secondsToDuration(sessionDuration)} Minutes!`;
    const breakMessage = `Take a break for ${secondsToDuration(breakDuration)} minutes!`;


    useEffect(() => {
      setTimer(sessionDuration);
      setSession(focusMessage);
    }, [focusMessage, sessionDuration])

    useInterval(() => {
      setCount(count+1)
      setTimer(prevTime => {
        const newTime = prevTime - 1;
        if(newTime >= 0) {
          return prevTime - 1
        }
      
      if(session === breakMessage){
        setTimer(breakDuration)
        
      } else if (session === focusMessage) {
        setSession(breakMessage)
        setTimer(sessionDuration)
      }
    })
    }, 
      isTimerRunning ? 1000 : null
    );

    const playPause = () => {
      setIsTimerRunning((prevState) => !prevState)
    }

    const stopHandler = () => {
      setIsTimerRunning(false)
      setBreakDuration(300)
      setSessionDuration(1500)
      setTimer(1500)
      setCount(0)
    }
  return (
    <div className='d-flex justify-content-center pt-5'>
      <IconContext.Provider value={{size: '1.5em'}} >
      <Row>
      <Col>
      <h3 className='text-center'>{session}</h3>
      <p className='lead text-center'>{secondsToDuration(timer)} remaining!</p>
      <ProgressBar animated max={sessionDuration} variant='danger' className='mt-3 mb-5' now={count} />
      </Col>
        <ButtonGroup className='mb-5'>
            <Button onClick={playPause} style={{backgroundColor: "#8FC0A9", border:"none"}}>{ isTimerRunning ? <FaPause /> :<FaPlay />}</Button>
            <Button onClick={stopHandler} style={{backgroundColor: '#6B2737'}}><FaStop /></Button>
        </ButtonGroup>
        
        </Row>
     </IconContext.Provider>
    </div>
  )
}

export default Timer