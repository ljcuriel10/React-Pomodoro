import React from 'react'
import { Nav, Row } from 'react-bootstrap';
import { GiTomato } from 'react-icons/gi'

const Header = () => (
    <>
     <Nav className= 'd-flex justify-content-center pb-5 ' style={{backgroundColor:"#28536B"}}>
        <Row className='ml-4'>
            <h1 className='text-center fw-bold pt-5' style={{color: '#C2948A'}}>Pomodoro Timer <GiTomato /></h1>
            <h5 className='text-center' style={{color: '#F6F0ED'}}>Created by Luis Javier Curiel</h5>
        </Row>
     </Nav>
    </>
  )


export default Header;