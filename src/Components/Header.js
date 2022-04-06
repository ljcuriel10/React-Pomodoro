import React from 'react'
import { Nav, Row } from 'react-bootstrap';
import { GiTomato } from 'react-icons/gi'

const Header = () => (
    <>
     <Nav className= 'pb-5' style={{backgroundColor:"#28536B"}}>
        <Row className='d-flex justify-content-center'>
            <h1 className=' mt-5 fw-bold' style={{color: '#C2948A'}}>Pomodoro Timer <GiTomato /></h1>
            <h5 className='' style={{color: '#F6F0ED'}}>Created by Luis Javier Curiel</h5>
        </Row>
     </Nav>
    </>
  )


export default Header;