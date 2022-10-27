import React from 'react'
import { Wrapper, Content } from './Section.styles'

const Section = ({title, children}) => {
    return (
        <Wrapper>
            <h2>{title}</h2>
            <Content>
                {children}
            </Content>
        </Wrapper>
    );
};

export default Section;