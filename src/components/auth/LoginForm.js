import React, {useState} from 'react'
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Card,
    Spinner,
  } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginForm = () => {

    const [loading, setloading] = useState(false);

    const initialValues = {
        email: "",
        password: "",
    }

    const validationSchema = Yup.object({
        email: Yup.string().email().required("Please Enter your amail"),
        password: Yup.string().required("Please enter your password")
    })

    const onSubmit = (values) => {
        console.log(values);
    }

    const formik = useFormik({
        initialValues, validationSchema, onSubmit
    })

    return (
        <Container>
            <Row>
                <Col md={{span:6, offset:3}} lg={{span:4, offset:4}}>
                    <Card>
                        <Card.Body>
                            <Form noValidate onSubmit={formik.handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    {...formik.getFieldProps("email")}
                                    isInvalid={!!formik.errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    {...formik.getFieldProps("password")}
                                    isInvalid={!!formik.errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                                <Button variant="primary" type="submit" disabled={loading}>
                                    {loading && <Spinner animation="border" size="sm" />} Login
                                </Button>

                                <Link to="/register">Create new user</Link>
                            </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginForm
