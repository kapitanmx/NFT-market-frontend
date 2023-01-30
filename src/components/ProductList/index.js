import React from 'react'
import { Wrapper } from './ProductList.styles';

const ProductList = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

export default ProductList;