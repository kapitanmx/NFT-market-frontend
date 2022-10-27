import React from 'react';
import {Wrapper, Content, TextBox} from './Hero.styles';

const Hero = ({title, subtitle, text}) => (
    <Wrapper>
        <Content>
            <TextBox>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{text}</p>
            </TextBox>
        </Content>
    </Wrapper>
);

export default Hero;