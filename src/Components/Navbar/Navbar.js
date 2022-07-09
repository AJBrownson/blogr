import React, {useState} from "react";
import Accordion from "../Accordion/Accordion";
import {
  Wrapper,
  Nav,
  NavLogo,
  MobileMenu,
  NavMenu,
  NavItem,
  NavLinks,
  NavAccordion,
  CTA,
  Button,
  ButtonDiv,
  Buttons,
  Intro
} from "./Navbar.styles";
import Logo from "../../Assets/images/logo.svg";
import CloseMenu from '../../Assets/images/icon-close.svg'
import OpenMenu from '../../Assets/images/icon-hamburger.svg'
import { accordionData } from "../Accordion/accordionData";
// import { NavLink } from "react-router-dom";





const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);


  return (
    <>
    <Wrapper>
      <Nav>
          
          <NavMenu>
          <NavLogo to='/' onClick={closeMobileMenu} >
            <img src={Logo} alt="Publishing Company Logo" />
          </NavLogo>

          <MobileMenu onClick = {handleClick}>
            {click ? CloseMenu : OpenMenu}
          </MobileMenu>

            <NavItem>
              <NavLinks>Product </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Company </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Connect</NavLinks>
            </NavItem>
          </NavMenu>

          <div>
            <Button secondary>Login</Button>
            <Button primary>Sign Up</Button>
          </div>
      </Nav>


      <Intro>
        <span>
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
        </span>

        <ButtonDiv>
          <Buttons primary>Start for Free</Buttons>
          <Buttons secondary>Learn More</Buttons>
        </ButtonDiv>
        
      </Intro>
      </Wrapper>
    </>
  );
};



{/* <LogoAccordion>
<NavLogo to='/' onClick={closeMobileMenu} >
  <img src={Logo} alt="Publishing Company Logo" />
</NavLogo>
<MobileMenu onClick={handleClick}>
  {click ? <img src={CloseMenu} alt='' /> : <img src={OpenMenu} alt='' /> }
</MobileMenu>
<NavMenu onClick='handleClick' click={click}>
<NavAccordion>
  {accordionData.map(({ title, content }) => (
    <Accordion title={title} content={content} />
  ))}
</NavAccordion>
</LogoAccordion>
<CTA>
  <Button>
      Login
  </Button>
  <Button primary>Sign Up</Button>
</CTA>
</NavMenu> */}
export default Navbar;
