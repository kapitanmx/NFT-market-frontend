import styled from 'styled-components'

export const Wrapper = styled.div`
    width: var(--maxWidth);
    margin: 0 auto;
    padding: 20px;
    background: var(--lightGrey);
    border-radius: 20px;

    h1 {
        color: var(--medGrey);
        padding: 10px;

        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 2fr));
    grid-gap: 1.5rem;
`;

