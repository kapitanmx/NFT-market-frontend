import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: var(--black);
    height: 70vh;
    clip-path: polygon(0% 0%, 100% 0, 100% 90%, 89% 94%, 76% 97%, 64% 99%, 50% 100%, 36% 99%, 24% 97%, 11% 94%, 0 90%);
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    padding: 25% 20px;
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #fff;
`;