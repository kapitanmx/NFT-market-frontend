import styled, {keyframes} from 'styled-components';

const spinnerAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(350deg);
    }
`;

export const Wrapper = styled.div`
    background: var(--black);
    z-index: 100;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    padding: 70% 0;
`;

export const SpinnerWheel = styled.div`
    display: inline-block;
    width: 120px;
    height: 120px;
    &:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: ${spinnerAnimation} 1.2s linear infinite;
    }
`;