import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px 40px;
    border-bottom: 1px solid black;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px 20px;
`;

