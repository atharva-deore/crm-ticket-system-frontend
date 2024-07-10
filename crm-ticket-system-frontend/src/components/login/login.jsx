import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import PropTypes from 'prop-types';




export const Login = ({ handleOnchange,handleOnSubmit,formSwitcher, email,password }) =>{
    return(
        <Container>
            <Row>
                <Col>
                <h1>Client Login</h1>
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>
                            Email Address
                        </Form.Label>
                        <Form.Control
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleOnchange}
                        placeholder='Enter Email'
                        required
                       />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control
                        type='password'
                        name='password'
                       value={password}
                       onChange={handleOnchange}
                        placeholder='password'
                        required
                       />
                    </Form.Group>
                    <Button type='submit'>
                        Login
                    </Button>
                </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#!" onClick={()=>formSwitcher('rest')}>Forgot Password?</a>
                </Col>
            </Row>
        </Container>
    )
}

Login.propTypes={
    handleOnchange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    password :PropTypes.string.isRequired
};