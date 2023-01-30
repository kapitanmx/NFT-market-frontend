import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    z-index: 5;
    background: ${({scrolled}) => scrolled ? 'white' : 'black'};
    transform: ${({ hideOnScroll }) => hideOnScroll ? 'translateY(-100%)' : 'translateY(0)'};
    margin: 0 auto;
    border-bottom: ${({isScrolled}) => isScrolled ? '1px solid var(--lightGrey)' : 'none'};
    &:before, :after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }
    h2 {
        color: ${({scrolled}) => scrolled ? 'black' : 'white'};
        display: flex;
        flex-direction: row;
        align-self: left;
        margin: 20px auto;
        width: 20%;
        height: auto;
        @media screen and (max-width: 768px) {
            width: 50%;
            margin: 0;
        }
    }
    @media screen and (max-width: 900px) {
        padding: 25px;
        h2 {
            color: ${({scrolled}) => scrolled ? 'black' : 'white'};
            padding: 0;
        }

    }
`;

export const Content = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 25px auto;
    a {
        text-decoration: none;
        color: var(--black);
    }
    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const LinkButton = styled.div`
    color: ${({isScrolled}) => isScrolled ? '#000' : 'white'};
    @media screen and (max-width: 900px) {
        color: var(--white);
        align-self: left;
    }
`;


export const MobileMenu = styled.div`
    display: none;
    flex-direction: column;
    justify-content: center;
    background: var(--black);
    color: white;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    text-align: left;
    padding: 20rem 0;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    width: 100%;
    @media screen and (max-width: 900px) {
        display: flex;
    }
    @media screen and (max-height: 790px) {
        padding-top: 23rem;
    }

    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: #0D0C1D;
        text-decoration: none;
        transition: color 0.3s linear;
    }

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
`;

export const MobileButton = styled.button`
    display: flex;
    justify-content: flex-start;
    font-size: 2rem;
    color: var(--white);
    background: var(--black);
    width: 100%;
    padding: 20px 50px;
    cursor: pointer;
    border: none;
    &:hover {

    }
    &:focus {
        outline: none;
    }
    @media screen and (max-height: 790px) {
        margin: 5px 0;
    }
    a {
        color: var(--white);
    }
`;

export const MobileBurger = styled.div`
    position: absolute;
    top: 20%;
    right: 1.5rem;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 5;

    @media screen and (max-width: 900px) {
        display: flex;
    }

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: ${({ isScrolled }) => isScrolled ? 'black' : 'white'};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;