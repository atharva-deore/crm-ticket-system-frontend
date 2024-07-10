import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import PropTypes from 'prop-types';




export const Passwordreset = ({ handleOnchange,handleOnResetSubmit, formSwitcher,email }) =>{
    return(
        <Container>
            <Row>
                <Col>
                <h1>Reset Password</h1>
                <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
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
                    
                    <Button type='submit'>
                        Reset
                    </Button>
                </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#!" onClick={()=>formSwitcher('login')}>Login Now</a>
                </Col>
            </Row>
        </Container>
    )
}

Passwordreset.propTypes={
    handleOnchange:PropTypes.func.isRequired,
    handleOnResetSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    
};