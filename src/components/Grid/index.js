import React from "react";
import {Wrapper, Content} from './Grid.styles'

const Grid = ({title, content}) => (
    <Wrapper>
        <h1>{title}</h1>
        <Content>
            {content}
        </Content>
    </Wrapper>
);

export default Grid;