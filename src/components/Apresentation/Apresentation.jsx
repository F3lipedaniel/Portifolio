import { ApresentationContainer, ApresentationText, Img } from "./styles";


export function Apresentation ( ) {

    return (
        <>
        <ApresentationContainer>
            <ApresentationText>
                <span>Olá pessoas,</span>
                <h1>EU SOU UM PROGRAMADOR</h1>
                <span>Seja bem vindo ao meu portifólio website</span>
                
            </ApresentationText>
            <Img>
                <img src="Home_art1.svg"/>
            </Img>
        </ApresentationContainer>
        </>
    )
}