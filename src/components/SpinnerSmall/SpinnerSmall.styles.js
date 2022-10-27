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
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 20px;
`;

export const Spinner = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;
    &:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #000;
        border-color: #000 transparent #000 transparent;
        animation: ${spinnerAnimation} 1.2s linear infinite;
    }
`;