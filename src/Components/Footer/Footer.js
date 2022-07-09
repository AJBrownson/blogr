import React from 'react'
import  { Wrapper, Menu, FooterMenu, FooterItem, FooterHeader, FooterLink } from './Footer.styles'
import { NavLogo } from '../Navbar/Navbar.styles'
import Logo from "../../Assets/images/logo.svg";



const Footer = () => {
  return (
    <>
        <Wrapper>
            <Menu>
                <NavLogo>
                    <img src={Logo} alt="Publishing Company Logo" />
                </NavLogo>

                <FooterMenu>
                    <FooterHeader>Product</FooterHeader>
                    <FooterItem>
                        <FooterLink>Overview</FooterLink>
                        <FooterLink>Pricing</FooterLink>
                        <FooterLink>MarketPlace</FooterLink>
                        <FooterLink>Features</FooterLink>
                        <FooterLink>Integrations</FooterLink>
                    </FooterItem>
                </FooterMenu>

                <FooterMenu>
                    <FooterHeader>Company</FooterHeader>
                    <FooterItem>
                        <FooterLink>About</FooterLink>
                        <FooterLink>Team</FooterLink>
                        <FooterLink>Blog</FooterLink>
                        <FooterLink>Careers</FooterLink>
                    </FooterItem>
                </FooterMenu>

                <FooterMenu>
                    <FooterHeader>Connect</FooterHeader>
                    <FooterItem>
                        <FooterLink>Contact</FooterLink>
                        <FooterLink>Newsletter</FooterLink>
                        <FooterLink>LinkedIn</FooterLink>
                    </FooterItem>
                </FooterMenu>
            </Menu>
        
        </Wrapper>
    </>
  )
}

export default Footer