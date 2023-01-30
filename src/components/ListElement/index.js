import React from "react";
import {Wrapper, Content} from './ListElement.styles'

const ListElement = ({title, price}) => (
    <Wrapper>
        <Content>
            <h2>{title}</h2>
            <p>{price}</p>
        </Content>
    </Wrapper>
);

export default ListElement;