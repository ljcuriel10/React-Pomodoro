import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import {BsPlus} from 'react-icons/bs'
import { FiMinus } from 'react-icons/fi'

const Session = (props) => { 

    const { sessionDuration, setSessionDuration, minutesToDuration, secondsToDuration } = props;

    const minusHandler = () => {
        const newTime = sessionDuration - 300;
        newTime < 0 ? setSessionDuration(0) : setSessionDuration(newTime);
    };

    const plusHandler = () => {
        const newTime = sessionDuration + 300;
        newTime > 1500 ? setSessionDuration(1500) : setSessionDuration(newTime);
    };


    return (
    <>
    <IconContext.Provider value={{ color: "White", size:'1.5em'}}>
    <Col className='d-flex justify-content-start'>
        <div className='p-2'>
            <div className='input-group input-group-lg mb-2'>
                <span className='input-group-text py-1'>Focus Duration: {secondsToDuration(sessionDuration)}</span>
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

export default Session;