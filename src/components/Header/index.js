import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {
    Wrapper, 
    Content, 
    Element, 
    DropdownList, 
    DropdownListElement,
    MobileMenu,
    MobileButton,
    MobileBurger
} from './Header.styles';

const Header = ({titles, dropdown}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [open, setOpen] = useState(false);
    const [hideOnScroll, setHideOnScroll] = useState(false);
    const [active, setActive] = useState(false);
    const [isListed, setIsListed] = useState(false);

    const elementTitles = [...titles];
    const dropdownTitles = [...dropdown];

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
                return;
            }
            setIsScrolled(false);
            return;
        });
    }, []);

    // useEffect(() => {
    //     var lastScrollTop = 0;
    //     window.addEventListener('scroll', () => {
    //         let detectedDirection = window.pageYOffset || document.documentElement.scrollTop;
    //         if (detectedDirection < lastScrollTop) {
    //             setHideOnScroll(true);
    //             return;
    //         }
    //         setHideOnScroll(false);
    //         return;
    //     })
    // }, []);

    useEffect(() => {
            if (window.innerWidth <= 750) {
                setIsMobile(true);
                return;
            }
            setIsMobile(false);
            return;
    }, [])

    console.log(elementTitles.map(title => {return title}))

    return (
        <>
            <Wrapper scrolled={isScrolled}>
                    <>
                        <MobileBurger isScrolled={isScrolled} open={open} onClick={() => setOpen(!open)}>
                            <div />
                            <div />
                            <div />
                        </MobileBurger>
                        <MobileMenu open={open} setOpen={open}>
                            {elementTitles.map(title => (
                                <MobileButton>
                                    <Link to={`/${title}`}>
                                        <p>{title}</p>
                                    </Link>
                                </MobileButton>
                            ))}
                        </MobileMenu>
                    </>
                    <Content>
                        {elementTitles.map(title => (
                            // (isListed && 
                            //     <Element onClick={setActive(active => !active)} scrolled={isScrolled}>
                            //         <p>{title}</p>
                            //     </Element>
                            // ) || ()
                                <Element scrolled={isScrolled}>
                                    <Link to={`/${title}`}>
                                        <p>{title}</p>
                                    </Link>
                                </Element>
                        ))}
                    </Content>
            </Wrapper>
            <DropdownList active={active}>
                {dropdownTitles.map(title => {
                    return <DropdownListElement active={active}>{title}</DropdownListElement>
                })}
            </DropdownList>
        </>
    );
}

export default Header;