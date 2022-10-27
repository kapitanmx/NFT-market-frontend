import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 20px 20px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 20px;
    flex-wrap: wrap;
`;

export const StyledInput = styled.input`
    margin: 0 auto;
    padding: 20px 20px;
    border-radius: 40px;
    outline: none;
`;

export const StyledButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px auto;
    padding: 10px 10px;
    border-radius: 15px;
    text-decoration: none;
    outline: none;
`;