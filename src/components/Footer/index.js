import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink
} from './FooterElements';

function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/about'>How It Works</FooterLink>
                                <FooterLink to='/about'>Testimonials</FooterLink>
                                <FooterLink to='/about'>Careers</FooterLink>
                                <FooterLink to='/about'>Investors</FooterLink>
                                <FooterLink to='/about'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/about'>How It Works</FooterLink>
                                <FooterLink to='/about'>Testimonials</FooterLink>
                                <FooterLink to='/about'>Careers</FooterLink>
                                <FooterLink to='/about'>Investors</FooterLink>
                                <FooterLink to='/about'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/about'>How It Works</FooterLink>
                                <FooterLink to='/about'>Testimonials</FooterLink>
                                <FooterLink to='/about'>Careers</FooterLink>
                                <FooterLink to='/about'>Investors</FooterLink>
                                <FooterLink to='/about'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/about'>How It Works</FooterLink>
                                <FooterLink to='/about'>Testimonials</FooterLink>
                                <FooterLink to='/about'>Careers</FooterLink>
                                <FooterLink to='/about'>Investors</FooterLink>
                                <FooterLink to='/about'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
