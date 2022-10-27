import React from "react";
import {Wrapper, Content} from './Breadcrumb.styles';
import { Link } from 'react-router-dom';

const Breadcrumb = ({title}) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{title}</span>
        </Content>
    </Wrapper>
);

export default Breadcrumb;