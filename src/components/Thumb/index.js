import React from 'react';
import { Link } from 'react-router-dom';
import {Wrapper, Img} from './Thumb.styles'

const Thumb = ({ title, text, price }) => (
    <>
        {/* {clickable ? (
            <Link to={`/${productId}`}>
                <Wrapper>
                    <Img />
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <h3>{price}</h3>
                </Wrapper>
            </Link>
        ) : ()}*/}
            <Wrapper>
                <Img />
                <h2>{title}</h2>
                <p>{text}</p>
                <h3>{price}</h3>
            </Wrapper>
    </>
);

export default Thumb;