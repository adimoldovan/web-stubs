import React, {Component} from 'react';
import {Button, Col, Container, Form, FormControl, InputGroup, Row} from 'react-bootstrap';
import PageTitle from './page-title'
import {FaKey, FaSignInAlt, FaUser} from "react-icons/all";
import PageDescription from "./page-description";
import {Formik} from 'formik';
import * as yup from 'yup';

export default class Login extends Component {
    render() {
        const schema = yup.object({
            username: yup.string().required("Username is required!"),
            password: yup.string().required("Password is required!")
        });
        return (
            <Container>
                <PageTitle page_title="Authentication"/>
                <PageDescription page_description="Valid usernames: dinosaur, dingo, camel, zebra. The password
                            is the username + 'password' word. E.g. 'dinosaurpassword'"/>
                <Container>
                    <Row>
                        <Container className="text-center">
                            <Formik
                                validationSchema={schema}
                                initialValues={{username: "", password: ""}}
                                onSubmit={{}}
                            >
                                {({
                                      handleSubmit,
                                      handleChange,
                                      handleBlur,
                                      values,
                                      touched,
                                      errors,
                                  }) => (
                                    <Form id="login-form" className="form" noValidate onSubmit={handleSubmit}>
                                        <Form.Group as={Row}>
                                            <Form.Label className="form-label" column lg={true}
                                                        htmlFor="input-login-username">Username</Form.Label>
                                            <Col lg={true}>
                                                <InputGroup>
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text><FaUser/></InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl id="input-login-username" name="username"
                                                                 placeholder="Username"
                                                                 className="form-control"
                                                                 value={values.username}
                                                                 onChange={handleChange}
                                                                 onBlur={handleBlur}
                                                                 isInvalid={!!errors.username && touched.username}
                                                    />
                                                    <Form.Control.Feedback type="invalid" className="text-left">
                                                        {errors.username}
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} lg={true}>
                                            <Form.Label className="form-label" column
                                                        htmlFor="input-login-password">Password</Form.Label>
                                            <Col lg={true}>
                                                <InputGroup>
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text><FaKey/></InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl id="input-login-password" name="password"
                                                                 type="password"
                                                                 placeholder="Password"
                                                                 value={values.password}
                                                                 onChange={handleChange}
                                                                 onBlur={handleBlur}
                                                                 isInvalid={!!errors.password && touched.password}
                                                    />
                                                    <Form.Control.Feedback type="invalid" className="text-left">
                                                        {errors.password}
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Col lg={true}>&nbsp;</Col>
                                            <Col className="text-left" lg={true}>
                                                <Button type="submit"><FaSignInAlt/> Submit</Button>
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                )}
                            </Formik>
                        </Container>
                    </Row>
                </Container>
            </Container>
        )
    }
}