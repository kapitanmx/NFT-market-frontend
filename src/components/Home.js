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
    const {
        state, 
        loading, 
        error,
        searchTerm,  
        setSearchTerm,
        setIsLoadingMore
    } = useHomeFetch();

    // const childrenArr = [
    //     {
    //         "title" : "product one",
    //         "text" : "sample product",
    //         "price" : "200 $",
    //     },
    //     {
    //         "title" : "product two",
    //         "text" : "sample product",
    //         "price" : "350 $",
    //     },
    //     {
    //         "title" : "product three",
    //         "text" : "sample product",
    //         "price" : "400 $",
    //     },
    // ];

    if (Loading()) { 
        return <Spinner />
    }

    if (error) return <div>Something went wrong...</div>

    return (
        <>
            <Hero 
                title={heroTitle}
                subtitle={heroSubtitle}
                text={heroText}
            />
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Section 
                title='About'
                childrens='Some text'
            />
            <Section 
                title='Top offers'
                childrens={
                    state.result.map(child => {
                        if (child.category === 'top offers') {
                            return (
                                <Thumb 
                                    title={child.title}
                                    text={child.description}
                                    price={child.price}
                                />
                            )
                        }
                        return null;
                    }) 
                }
            />
            <Section 
                title='New'
                childrens={
                    state.result.map(child => {
                        if (child.category === 'top offers') {
                            return (
                                <Thumb 
                                    title={child.title}
                                    text={child.description}
                                    price={child.price}
                                />
                            )
                        }
                        return null;
                    })
                }
            />
            <Section 
                title='section4'
                childrens=''
            />
            <Section 
                title='section5'
                childrens=''
            />
        </>
    )
};

export default Home;