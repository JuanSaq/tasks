import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Pie from "./Baja-Blast-Pie.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Hello World! Juan Saquino.</p>
            <Container>
                <Row>
                    <Col>
                        <h1>In the beginning...</h1>
                        <ul>
                            <li> There was nothing</li>
                            <li>Then a light appeared</li>
                            <li>Life flourished...</li>
                            <li>So a Baja Blast Pie could be made</li>
                        </ul>
                        <div style={(width:"200px", height:"300px", backgroundColor:"red")}></div>
                    </Col>
                    <Col>
                        <img
                            src={Pie}
                            alt="The upcoming Baja Blast Pie from Taco Bell"
                            width="500"
                        />
                    </Col>
                </Row>
                <Button onClick={() => console.log("Log Hello World")}>
                    Hello World!
                </Button>
            </Container>
        </div>
    );
}

export default App;
