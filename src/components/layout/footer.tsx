import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { DefaultFooter, DisclaimerWrapper } from '../containers/common/style'
import SocialWrapperComponent from './footer/social-wrapper'
import { ContainerWrapper } from 'components/containers/common/style'
import UpArrow from 'images/common/layout/up-arrow.png'
import Flex from 'components/containers/flex'
import device from 'themes/device'

const StyledFooterLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.6rem;
    line-height: 36px;
    font-weight: 400;
    text-align: left;
    cursor: pointer;
`
const StyledFooterText = styled.div`
    font-size: 1.6rem;
`

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const FooterWrapper = styled(ContainerWrapper)`
    position: relative;
    overflow: visible;
`

const Returner = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
`

const FooterLinksWrapper = styled(Flex)`
    align-items: center;
    color: white;
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media ${device.tabletL} {
        flex-direction: column;
        justify-content: center;
    }
`

const FooterLinks = styled.div``

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <DefaultFooter>
            <FooterWrapper>
                <Returner src={UpArrow} onClick={scrollTop} alt="Back to Top" />
                <FooterContainer>
                    <SocialWrapperComponent />
                    <DisclaimerWrapper>
                        <FooterLinksWrapper>
                            <StyledFooterText>
                                © 2022 Sinbad Software LLC. All rights reserved.
                            </StyledFooterText>
                            <FooterLinks>
                                <StyledFooterLink to="/">Home | </StyledFooterLink>
                                <StyledFooterLink to="/careers"> Careers | </StyledFooterLink>
                                <StyledFooterLink to="/open-positions">
                                    Open Positions
                                </StyledFooterLink>
                            </FooterLinks>
                        </FooterLinksWrapper>
                    </DisclaimerWrapper>
                </FooterContainer>
            </FooterWrapper>
        </DefaultFooter>
    )
}

export default Footer
