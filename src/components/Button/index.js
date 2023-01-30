import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({text}) => (
    <StyledButton>
        <p>{text}</p>
    </StyledButton>
);

export default Button;