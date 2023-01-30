import React, {useState, useEffect} from 'react';
//Components
import Hero from '../components/Hero';
import Grid from '../components/Grid';
import Spinner from './Spinner';
import Section from './Section';
import Thumb from './Thumb';
import SearchBar from './SearchBar';
//API
import API from '../API';
//Hooks
import Loading from './Hooks/LoadingHook';
import { useHomeFetch } from './Hooks/useHomeFetch';


const Home = ({heroTitle, heroSubtitle, heroText}) => {
    // const {
    //     state, 
    //     loading, 
    //     error,
    //     searchTerm,  
    //     setSearchTerm,
    //     setIsLoadingMore
    // } = useHomeFetch();

    const childrenArr = [
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

    if (Loading()) { 
        return <Spinner />
    } else {
    // if (error) return <div>Something went wrong...</div>
        return (
            <>
                <Hero 
                    title={heroTitle}
                    subtitle={heroSubtitle}
                    text={heroText}
                />
                <Section
                    children={<Grid
                        title='Top offers'
                        content={childrenArr.map((offer) => (
                            <Thumb
                                title={offer.title}
                                text={offer.text}
                                price={offer.price} 
                            />
                        ))}
                    />}
                />
                <Section
                    children={<Grid
                        title='Extra offers'
                        content={childrenArr.map((offer, index) => {
                            if (index <= 3) {
                                return (
                                    <Thumb
                                        title={offer.title}
                                        text={offer.text}
                                        price={offer.price} 
                                    />
                                );
                            } else {
                                return null;
                            }
                        })}
                    />}
                />
                
            </>
        );
    }
};

export default Home;