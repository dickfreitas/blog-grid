import React from "react";
import Instagram from '../../imagens/instagram.png'
import Twitter from '../../imagens/twitter.png'
import Atomo from '../../imagens/atom.png'
import styled from "styled-components";
import { Container, P, IMG } from "./HeaderStyled";

const Header = () =>{
    return(
        <Container>
            <IMG src={Atomo}/>
            <P>Favoritas</P>
            <P>Ultima Publicação</P>
            <div>
                <IMG src={Instagram}/>
                <IMG src={Twitter}/>
            </div>
       

        </Container>
    )
}

export default Header;