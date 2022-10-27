import React from 'react';
import styled from 'styled-components';
import BreadCrumb from '../components/Breadcrumb';
import Loading from './Hooks/LoadingHook';
import Spinner from './Spinner';

const Wrapper = styled.div`
    max-width: var(--maxWidth);
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 20px 20px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
`;


const Announcement = ({title, stSectionElements, ndSectionElements}) => {
    const stSection = [...stSectionElements];
    const ndSection = [...ndSectionElements];
    if (Loading()) {
        return <Spinner />
    }
    else {
        return (
            <Wrapper>
                <BreadCrumb 
                    title={title}
                />
                <Content>
                    <Section>
                        {stSection.map(element => (
                            {element}
                        ))}
                    </Section>
                    <Section>
                        {ndSection.map(element => (
                            {element}
                        ))}
                    </Section>
                </Content>
            </Wrapper>
        )
    }
}

export default Announcement;