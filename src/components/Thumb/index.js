import React from 'react';
import {Wrapper, Content} from './Thumb.styles';

const Thumb = ({ title, text, price }) => (
    <Wrapper>
        <Content>
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
                <h3>{price}</h3>
            </div>
        </Content>
    </Wrapper>
);

export default Thumb;