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
    MobileBurger,
    LinkButton
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
        window.removeEventListener('scroll', () => {return; })
    }, []);

    useEffect(() => {
        const lastScrollTop = 0;
        window.addEventListener("scroll", () => {
            const st = window.pageYOffset; 
            if (st > lastScrollTop) {
                setHideOnScroll(true);
            }
            setHideOnScroll(false);
        }); 
        window.removeEventListener("scroll", () => {return;})
    }, []);

    useEffect(() => {
            if (window.innerWidth <= 750) {
                setIsMobile(true);
                return; 
            }
            setIsMobile(false);
            return;
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // console.log(elementTitles.map(title => {return title}))

    return (
        <>
            <Wrapper scrolled={isScrolled} hideOnScroll={hideOnScroll}>
                    <h2>NFTMarket</h2>
                    <>
                        <MobileBurger isScrolled={isScrolled} open={open} onClick={() => setOpen(!open)}>
                            <div />
                            <div />
                            <div />
                        </MobileBurger>
                        <MobileMenu open={open} setOpen={open}>
                            {elementTitles.map(title => (
                                <MobileButton onClick={() => setOpen(!open)}>
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
                            <Link to={`/${title.toLowerCase()}`}>
                                <LinkButton isScrolled={isScrolled} onClick={goToTop}>
                                    {title}
                                </LinkButton>
                            </Link>
                        ))}
                    </Content>
            </Wrapper>
        </>
    );
}

export default Header;