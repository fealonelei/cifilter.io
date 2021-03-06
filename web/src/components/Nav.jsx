import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { IoLogoGithub, IoLogoTwitter, IoIosAppstore } from "react-icons/io";

const LogoWrapper = styled.div`
    display: inline-block;
    width: 30px;
    height: 30px;
`;

const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: horizontal;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    display: inline-block;
`;

const LogoAndTitle = styled.div`
    flex: 2;

    display: flex;
    flex-direction: horizontal;
    align-items: center;
`;

const Other = styled.div`
    flex: 10;

    display: flex;
    flex-direction: horizontal;
    justify-content: flex-end;
    align-items: center;
`;

const NavLink = styled.a`
    color: #F5BD5D;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

const Nav = (props) => {
    return (
        <StyledNav className="padding--md">
            <LogoAndTitle>
                <LogoWrapper className="margin-right--sm">
                    <Logo />
                </LogoWrapper>
                <Title>CIFilter.io</Title>
            </LogoAndTitle>
            <Other>
                {/*}
                // TODO: Re-enable these links once we have gatsby pages for them
                <NavLink className="margin-right--md">SUPPORT</NavLink>
            */}
                <NavLink className="margin-right--md" href="https://noahgilmore.com/blog/cifilterio">ABOUT</NavLink>
                <NavLink className="margin-right--md" href="https://itunes.apple.com/us/app/cifilter-io/id1457458557?mt=8"><IoIosAppstore size="24" /></NavLink>
                <NavLink className="margin-right--md" href="https://twitter.com/cifilterio"><IoLogoTwitter size="24" /></NavLink>
                <NavLink className="margin-right--md" href="https://github.com/noahsark769/cifilter.io"><IoLogoGithub size="24" /></NavLink>
            </Other>
        </StyledNav>
    )
};
export default Nav;