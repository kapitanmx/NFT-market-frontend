import styled from 'styled-components';

export const StyledButton = styled.button`
    margin: 0 auto;
    padding: 20px 50px;
    border: 2px solid var(--black);
    border-radius: 20px;
    background: var(--white);
    color: var(--black);
    transition: ease-in 2s;
    :focus {
        outline: none;
    }
    :hover {
        background: var(--black);
        color: var(--white);
    }
`;