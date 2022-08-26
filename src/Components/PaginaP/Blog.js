import React from "react";
import Sapato from '../../imagens/Sapato.webp'
import BlackPink from '../../imagens/BlackPink.webp'
import Vacina from '../../imagens/Vacina.jpeg'
import GitHUB from '../../imagens/github.png'
import Header from "../Header/Header";
import { Container , ContainerGrid,Section,SectionBoot , ImgSection, ImgBoot ,H1 , PFig , Destaque ,PBoot } from "./BlogStyled";




const Blog = () =>{
    return(
        <div>
            <Header/> 
            <hr/>
            <H1>The Blog</H1>
            <hr/>
            <Container>
           
                 <SectionBoot>
                <ImgBoot src={Sapato}/>
                <PBoot>
                    <Destaque>
                        Louis Vuitton x Nike Air Force 1
                    </Destaque>
                    </PBoot>
                <PBoot>
                O Sapato mais caro do mundo no ano de 2022
                </PBoot>
            </SectionBoot>

            <ContainerGrid>

            <Section>
                <ImgSection src={BlackPink}/>
                <PFig>
                <Destaque>
                     Venom-BLACKPINK.
                </Destaque> A musica nº1 nos trending top da spotify
                </PFig>
            </Section>
            <Section>
                <ImgSection src={Vacina}/>
                <PFig>
                <Destaque>
                    Brasil 
                </Destaque>segue aplicando as vacinas. Atualmente são um total de 469mi pessoas, sendo 171mi totalmente vacinadas.
                </PFig>
            </Section>
            <Section>
                <ImgSection src={GitHUB}/>
                <PFig>
                    <Destaque>
                         A empresa tornará o 2FA 
                    </Destaque>
                     obrigatorio para todos os contribuidores de código até o final de 2023
                </PFig>
            </Section>
            </ContainerGrid>
         </Container>
        </div>
    )
}

export default Blog