import { useState } from 'react';
import { 
    MainContainer,
    MainBg,
    VideoBg,
    MainContent,
    MainHeader,
    MainInfo,
    MainBtnWrapper,
    ArrowForward,
    ArrowRight
} from './MainElements';
import { Button } from '../ButtonElement';
import Video from '../../video/video.mp4';

function MainSection() {
    // set 'hover' effects to off as default
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <MainContainer id='home'>
            <MainBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </MainBg>
            <MainContent>
                <MainHeader>Virtual Banking Made Easy</MainHeader>
                <MainInfo>
                    Sign up for a new account today and receive $250 in credit towards your next payment. 
                </MainInfo>
                <MainBtnWrapper>
                    <Button 
                        to='signup' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </MainBtnWrapper>
            </MainContent>
        </MainContainer>
    )
}

export default MainSection
