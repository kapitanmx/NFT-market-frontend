import React from 'react';
// Styles
import {Wrapper, Content, TextBox} from './Hero.styles';
import SearchBar from '../SearchBar';
// Background
import HeroBackground from '../../assets/HeroBackground.jpg';

const Hero = ({title, subtitle, text}) => (
    <Wrapper background={HeroBackground}>
        <Content>
            <TextBox>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{text}</p>
                <SearchBar />
            </TextBox>
        </Content>
    </Wrapper>
);

export default Hero;