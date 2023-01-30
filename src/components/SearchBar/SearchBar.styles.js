import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    padding: 20px;
`;

export const Content = styled.div`
    position: relative;
    background: var(--lightGrey);
    width: 100%;
    height: 55px;
    margin: 0;
    border-radius: 20px;

    img {
        position: absolute;
        left: 15px;
        top: 14px;
        width: 30px;
    }

    input {
        font-size: var(--fontMed);
        position: absolute;
        left: 0;
        margin: 10px 0;
        padding: 15px 0 10px 30px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 30px;
        color: var(--medGrey);

        :focus {
            outline: none;
        }

    }

    button {
        font-size: var(--fontSmall);
        position: absolute;
        height: 55px;
        margin: 0;
        right: 0;
        padding: 0 20px;
        background: var(--midGrey);
        color: var(--black);
        border-radius: 0 20px 20px 0;
        border-left: 0.5px solid grey;
        border-top: none;
        border-bottom: none;
        border-right: none;
        transition: ease-in-out 0.3s;
        animation-duration: 1s;

        :hover {
            background: var(--violet);
            color: var(--white);
        }

        :focus {
            outline: none;
        }
 
    }
`;