import React from "react";
//Components
import Section from './Section';
import ProductList from './ProductList';
import ListElement from './ListElement';

const Marketplace = () => {
    const offers = [
        {
            "title" : "product one",
            "text" : "sample product",
            "price" : "200 $",
        },
        {
            "title" : "product two",
            "text" : "sample product",
            "price" : "350 $",
        },
        {
            "title" : "product three",
            "text" : "sample product",
            "price" : "400 $",
        },
        {
            "title" : "product one",
            "text" : "sample product",
            "price" : "200 $",
        },
        {
            "title" : "product two",
            "text" : "sample product",
            "price" : "350 $",
        },
        {
            "title" : "product three",
            "text" : "sample product",
            "price" : "400 $",
        },
        {
            "title" : "product two",
            "text" : "sample product",
            "price" : "350 $",
        },
        {
            "title" : "product three",
            "text" : "sample product",
            "price" : "400 $",
        },
        {
            "title" : "product two",
            "text" : "sample product",
            "price" : "350 $",
        },
        {
            "title" : "product three",
            "text" : "sample product",
            "price" : "400 $",
        },
        {
            "title" : "product two",
            "text" : "sample product",
            "price" : "350 $",
        },
        {
            "title" : "product three",
            "text" : "sample product",
            "price" : "400 $",
        },
    ];
    return (
        <>
            <Section
                title='All offers'
                children={
                    <ProductList
                        children={offers.map((offer, index) => (
                            <ListElement
                                title={offer.title}
                                price={offer.price} 
                            />
                        ))}
                    />
                }
            />
        </>
    );
}

export default Marketplace;