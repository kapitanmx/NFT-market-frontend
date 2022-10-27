import React from "react";
import {Wrapper, Content} from './ListElement.styles'

const ListElement = ({title}) => (
    <Wrapper>
        <Content>
            {title}
        </Content>
    </Wrapper>
)

export default ListElement;