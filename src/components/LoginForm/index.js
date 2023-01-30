import React, {useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {Wrapper, Container, StyledInput, StyledButton} from './LoginForm.styles'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <Container>
                    <label for='email'>Email</label>
                    <StyledInput
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <label for='password'>Password</label>
                    <StyledInput
                        type='text'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <ReCAPTCHA 
                        theme="light"
                     />
                </Container>
                <StyledButton onClick={handleSubmit}/>
            </form>
        </Wrapper>
    )
}

export default LoginForm;