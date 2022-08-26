import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 80vh;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-content: center;
    text-align: center;

`
export const ContainerGrid = styled.div`
    display: flex;
 flex-direction: column;
 height: 10% ;
   
`
export const Section = styled.div`
    display: flex;
    border-top: 1px solid white;
    text-align: center;
    justify-content: center;
    padding: 1em;
    margin-top: 20px;
`
export const ImgSection = styled.img`
    width: 20%;
    padding: 10px ;
   

`

export const ImgBoot = styled.img`
    width: 90%;
    height: auto;
`

export const SectionBoot = styled.section`
    width: 100%;
    height: auto;
    margin: 10px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const H1 = styled.h1`
    width: 100%;
    font-size: 4em ;
    letter-spacing: 1em;
    text-align: center;
    font-family: 'Space Mono', monospace;

`

export const PFig = styled.p`
    text-align: center;
    letter-spacing: 0.1em;
    font-size: 1.2em;
    width: 50%;
    font-family: 'Aboreto', cursive;
    
    
`

export const PBoot = styled.p`
 font-family: 'Aboreto', cursive;
 font-size: 1.2em;
    
`

export const Destaque = styled.span`
color: red
`