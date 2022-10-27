import React from "react";
import {Wrapper, Content} from './Grid.styles'

const Grid = ({content}) => (
    <Wrapper>
        <Content>
            {content}
        </Content>
    </Wrapper>
);

export default Grid;