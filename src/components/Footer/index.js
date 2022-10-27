import React from "react";
import {Wrapper, Content} from './Footer.styles'

const Footer = ({text}) => (
    <Wrapper>
        <Content>
            {text}
        </Content>
    </Wrapper>
);

export default Footer