import React from 'react';
// Styles
import { Wrapper, Content, IconContainer, ContactContainer, TextContainer, FooterEnd} from './Footer.styles';

const Footer = ({info}) => {
    const currentYear = () => {
        const year = new Date().getFullYear();
        return year.toString();
    }
    return (
        <Wrapper>
            <Content>
                <ContactContainer>
                </ContactContainer>
                <TextContainer>
                    {/* {info.map((element) => (
                        <div>
                            <h3>{element.title}</h3>
                            <p>{element.data}</p>
                        </div>
                    ))} */}
                    <div>
                        <h3>Dane kontaktowe:</h3>
                        <p>
                            Telefon: +48 664 412 219<br/><br/>
                            E-mail: <a href="mailto:kontakt@mwts.pl">kontakt@mwts.pl</a><br/><br/>
                        </p>
                    </div>
                    <div>
                        <h3>Informacje dodatkowe:</h3>
                        <p>
                            Polityka RODO<br/><br/>
                            Dokumenty<br/><br/>
                        </p>
                    </div>
                </TextContainer>
            </Content>
            <FooterEnd>
                <p>© {currentYear()} NFT Market</p>
            </FooterEnd>
        </Wrapper>
    );
}

export default Footer;
