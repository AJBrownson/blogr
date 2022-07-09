import React from 'react'
import Logo from "../../Assets/images/logo.svg";
import { accordionData } from "../Accordion/accordionData";
import Accordion from "../Accordion/Accordion";
import './Nav.css'


const Nav = () => {
  return (
    <>
    <nav>
    <img src={Logo} alt="Publishing Company Logo" />
        <ul>
            <li>
            {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
            ))}
            </li>
        </ul>
    </nav>
        
    </>
  )
}

export default Nav