import React from 'react'
import { Col } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FiMinus } from 'react-icons/fi';
import { BsPlus } from 'react-icons/bs';


const Break = ({breakDuration, setBreakDuration, minutesToDuration, secondsToDuration}) => { 
  
    const minusHandler = () => {
        const newTime = breakDuration - 60;
        newTime < 0 ? setBreakDuration(0) : setBreakDuration(newTime)
    }

    const plusHandler = () => {
        const newTime = breakDuration + 60;
        newTime > 300 ? setBreakDuration(300) : setBreakDuration(newTime)
    }
    
    return(
    <>
    <IconContext.Provider value={{ color: "White", size:'1.5em'}}>
    <Col>
    <div className='d-flex justify-content-end p-2'>
        <div className='input-group input-group-lg mb-2'>
            <span className='input-group-text py-1'>Break Duration: {secondsToDuration(breakDuration)}</span>
            <div className='input-group-append'>
                <button type='button' className='btn py-2' style={{backgroundColor: '#28536B'}} onClick={minusHandler}><FiMinus /></button>
                <button type='button' className='btn py-2' style={{backgroundColor: '#C2948A'}} onClick={plusHandler}><BsPlus /></button>
            </div>
        </div>
    </div>
    </Col>
    </IconContext.Provider>
    </>
  )
 }

export default Break;