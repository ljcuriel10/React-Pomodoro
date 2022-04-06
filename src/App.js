import React from "react";
import { Row } from "react-bootstrap";
import Break from "./Components/Break";
import Header from "./Components/Header";
import Layout from "./Components/Layout";
import Session from "./Components/Session";
import Timer from "./Components/Timer";


function App() {
  return (
    <>
        <Header />  
        <Layout>
          <Row className="pt-5">
            <Session />
            <Break />
          </Row>
          <Timer />
      </Layout>
    </>
  );
}

export default App;
