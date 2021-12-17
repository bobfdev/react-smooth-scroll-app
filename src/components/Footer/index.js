import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMediaContainer,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';
import { 
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

function Footer() {

const toggleHome = () => {
        scroll.scrollToTop();
    };

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
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to='/about'>Business Inquiries</FooterLink>
                                <FooterLink to='/about'>Support</FooterLink>
                                <FooterLink to='/about'>Legal</FooterLink>
                                <FooterLink to='/about'>Media Relations</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Partners</FooterLinkTitle>
                                <FooterLink to='/about'>How It Works</FooterLink>
                                <FooterLink to='/about'>Agency</FooterLink>
                                <FooterLink to='/about'>Ambassador</FooterLink>
                                <FooterLink to='/about'>Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to='/about'>Facebook</FooterLink>
                                <FooterLink to='/about'>Instagram</FooterLink>
                                <FooterLink to='/about'>LinkedIn</FooterLink>
                                <FooterLink to='/about'>Twitter</FooterLink>
                                <FooterLink to='/about'>YouTube</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMediaContainer>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>dolla</SocialLogo>
                        <WebsiteRights>dolla &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink 
                                href='//www.facebook.com/' 
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <FaFacebook />
                            </SocialIconLink> 
                            <SocialIconLink 
                                href='//www.instagram.com/' 
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <FaInstagram />
                            </SocialIconLink> 
                            <SocialIconLink 
                                href='//www.linkedin.com/' 
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <FaLinkedin />
                            </SocialIconLink> 
                            <SocialIconLink 
                                href='//www.twitter.com' 
                                target='_blank'
                                aria-label='Twitter'
                            >
                                <FaTwitter />
                            </SocialIconLink> 
                            <SocialIconLink 
                                href='//www.youtube.com' 
                                target='_blank'
                                aria-label='YouTube'
                            >
                                <FaYoutube />
                            </SocialIconLink> 
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMediaContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
