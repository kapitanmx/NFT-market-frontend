import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: 0 auto;
    padding: 20vw 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* background: ${({background}) => `url(${background})`};
    background-repeat: no-repeat;
    background-size: cover; */
    background: var(--black);
    /* border-radius: 30px; */
    @media screen and (min-width: 1420px) {
        padding: 10vw;
    }
    /* clip-path: polygon(0% 0%, 100% 0, 100% 90%, 89% 94%, 76% 97%, 64% 99%, 50% 100%, 36% 99%, 24% 97%, 11% 94%, 0 90%); */
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #fff;
`;