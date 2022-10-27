import styled from 'styled-components'

export const Wrapper = styled.div`
    width: var(--maxWidth);
    display: flex;
    margin: 0 auto;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 20px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Field = styled.input`
    display: block;
    margin: 0 auto;
    padding: 15px 15px;
    border-radius: 30px;
`;

