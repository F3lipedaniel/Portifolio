import { AboutContainer, Container, HardSkill, Header } from "./styles";
import { TechnologyC } from "../Tecnology/TecnologyCo";

export function About ( ) {

    return (
        <AboutContainer>
            <Container>
            <Header>
                <img src="face.svg"/>
                <h1>Felipe Daniel</h1>
                <span>Meu nome é Felipe Daniel 👋
                    Eu moro em Brasilia/DF. <br/> 
                    Atualmente como Customer Sucess Analyst, curso Analise e desenvolvimento de sistema.
                    
                </span>
                <h1 style={{ marginTop: "6.75rem"}}>
                    Hard Skill
                </h1>
            </Header>
                <HardSkill>
                    <TechnologyC name="React" stars={4} />
                    <TechnologyC name="JavaScript" stars={4} />
                    <TechnologyC name="Typescript" stars={4} />
                    <TechnologyC name="Node" stars={3} />
                    <TechnologyC name="Java" stars={2} />
                    <TechnologyC name="Git" stars={2} />
                    <TechnologyC name="Python" stars={2} />
                    <TechnologyC name="Mysql" stars={2} />
                </HardSkill>
            </Container>
            

        </AboutContainer>
    )
}