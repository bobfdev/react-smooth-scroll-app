import { 
    ServicesContainer,
    ServicesHeading,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';
import Icon1 from '../../images/undraw1.svg'
import Icon2 from '../../images/undraw2.svg'
import Icon3 from '../../images/undraw3.svg'

function Services() {
    return (
        <ServicesContainer id='services'>
            <ServicesHeading>Our Services</ServicesHeading>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
