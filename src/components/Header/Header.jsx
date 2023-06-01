import { HeaderContainer, SliderCss } from "./styles";
import { Link } from 'react-router-dom';

export function Header ( ) {

    return (
      <SliderCss>
          <HeaderContainer>
              <img src="Group.svg"/>
              <h1> Felipe Daniel </h1>
              <Link  style={{ color: '#445964',   outline: 'none',   textDecoration: 'none' }} to="/">
                  <span>Home</span>
              </Link>
              <Link style={{  color: '#445964',  outline: 'none',   textDecoration: 'none' }} to="/about">
                  <span>Sobre</span>
              </Link>
              <Link style={{  color: '#445964',  outline: 'none',   textDecoration: 'none' }} to="/portfolio">
              <span>Portifólio</span>
              </Link>
              <Link style={{  color: '#445964',  outline: 'none',   textDecoration: 'none' }} to="/experience">
                  <span>Serviços</span>
              </Link>
              
          </HeaderContainer>
        </SliderCss>
    )
}




