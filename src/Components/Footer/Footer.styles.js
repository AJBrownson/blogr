import styled from "styled-components";
// import { Link } from 'react-router-dom'


export const Wrapper = styled.div`
background-image: linear-gradient(to right, hsl(237, 17%, 21%), hsl(237, 23%, 32%)), url();
height: 65vh;
border-top-right-radius: 80px;
color: white;
`;


export const Menu = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 50px;
`;



export const FooterMenu = styled.ul`
display: flex;
flex-direction: column;
margin-top: 15px;
align-items: center;
list-style-type: none;
color: #fff;
`;


export const FooterHeader = styled.div`
align-items: center;
font-size: 20px;
margin-top: 10px;
margin-bottom: 15px;


@media screen and (max-width: 768px) {
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 7px;
}
`;



export const FooterItem = styled.div`
font-size: 14px;
color: #fff;


@media screen and (max-width: 768px) {
    font-size: 10px;
}
`;


export const FooterLink = styled.li`
display: flex;
align-items: center;
text-decoration: none;
list-style: none;
color: white;
padding: 1rem;


@media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
}
`;