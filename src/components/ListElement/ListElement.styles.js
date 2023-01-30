import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    width: 100%;
    margin: 5px auto;
    padding: 20px 40vw 20px 10px;
    background: var(--lightGrey);
    border-radius: 10px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
    p {
        color: var(--black);
    }
`;

