import React, {useState} from "react";
import { Row } from "react-bootstrap";
import Break from "./Components/Break";
import Header from "./Components/Header";
import Layout from "./Components/Layout";
import Session from "./Components/Session";
import Timer from "./Components/Timer";
import {minutesToDuration, secondsToDuration} from './utils/index'



function App() {

  const [sessionDuration, setSessionDuration] = useState(1500);
  const [breakDuration, setBreakDuration] = useState(300);


  return (
    <>
        <Header />  
        <Layout>
          <Row className="pt-5">
            <Session 
              sessionDuration={sessionDuration} 
              setSessionDuration={setSessionDuration} 
              minutesToDuration={minutesToDuration} 
              secondsToDuration={secondsToDuration}
            />
            <Break 
              breakDuration={breakDuration} 
              setBreakDuration={setBreakDuration} 
              minutesToDuration={minutesToDuration} 
              secondsToDuration={secondsToDuration}
            />
          </Row>
          <Row>
            <Timer 
              sessionDuration={sessionDuration} 
              setSessionDuration={setSessionDuration} 
              minutesToDuration={minutesToDuration} 
              secondsToDuration={secondsToDuration} 
            />
          </Row>
      </Layout>
    </>
  );
}

export default App;
