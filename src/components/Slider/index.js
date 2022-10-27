import React, {useState} from 'react';
import { Wrapper, Content, ArrowLeft, ArrowRight} from './Slider.styles';

const Slider = ({element}) => {
    const [prev, setPrev] = useState();
    const [next, setNext] = useState();
    const slides = [...element];
    return (
        <Wrapper>
            <ArrowLeft onClick={() => setPrev()}/>
            {slides.map(slide => (
                <Content>
                    <h1>{slide.title}</h1>
                    <h2>{slide.subtitle}</h2>
                </Content>
            ))}
            <ArrowRight onClick={() => setNext()}/>
        </Wrapper>
    );  
}

export default Slider;