import React from 'react';
import {Checkbox, FormGroup} from 'react-bootstrap';
import ControlLabel from "react-bootstrap/es/ControlLabel";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/es/Button";
import Col from "react-bootstrap/es/Col";
import Form from "react-bootstrap/es/Form";


const RegisterForm = ()=> {
    return(
        <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                    Email
                </Col>
                <Col sm={10}>
                    <FormControl type="email" placeholder="Email" />
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                    Password
                </Col>
                <Col sm={10}>
                    <FormControl type="password" placeholder="Password" />
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Checkbox>Remember me</Checkbox>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Button type="submit">
                        Sign in
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    )
};

export default RegisterForm;
