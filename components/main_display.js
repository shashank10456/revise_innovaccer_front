import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const MainDisplay =(props)=>{
    return(
        <Jumbotron>
            <h1>CodeConnekt!</h1>
            <p>It is a web application that serves you when you want to practice or see all progress that you have made in programming on different platforms all at one place.</p>
            <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>
    );
};
export default MainDisplay;