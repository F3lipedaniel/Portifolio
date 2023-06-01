import {Container, ExperienceHeader, Cards } from "./styles";
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function Experience () {



    return (
        <Container>
            <ExperienceHeader>
                <h1 style={{ color: '#263138 '}}>Experiência</h1>
                <h1>Profissional</h1>
                <span> Minha jornada esta apenas começando, sempre aprendendo.</span>
            </ExperienceHeader>
            <Cards >
                <ImgMediaCard />
            </Cards>
        </Container>
    )

}


export function ImgMediaCard( ) {
    const [cards, setCards] = useState([
      {
        id: 1,
        image: 'DD.jpg',
        text: 'Customer Analyst',
        subtext: 'Atuando em processos como lançamento de aplicativos, implementação de integrações internas e externas, auxilio no entendimento da documentação de desenvolvimento consumindo api. ',
        buttonHref: 'https://site.deliverydireto.com.br/'
      },
      {
        id: 2,
        image: 'sayonara.png',
        text: 'Supervisor de TI',
        subtext: 'Atuando no estudo de novos projetos e processos, implantação e implementação, infraestrutura, treinamento de colaboradores nas mais diversas áreas. ',
        buttonHref: 'https://github.com/F3lipedaniel/NLW_IGNITE'
      },
      {
        id: 3,
        image: 'acriliart.png',
        text: 'Desenvolvedor web',
        subtext: 'Atuando na criação de sites e landing pages responsivos para empresários e autonomos estudando a composição do site e utilizando React, prototipação no figma e styled components. ',
        buttonHref: 'https://acriliart.com.br/'
      },

      // Adicione mais elementos conforme necessário
    ]);
  
    return (
      <div style={{ 
        marginTop: '4.68rem',
        overflow: 'hidden',
        width: '50%',
        flex: 'wrap',
        display: 'flex', 
        flexWrap: 'wrap'}}>
        {cards.map(card => (
          <Card
          
          style={{margin: 'auto', marginBottom: '3.125rem'}}
            key={card.id}
            sx={{
              width: 300,
              maxWidth: 345,
              
            }}
          >
            <CardMedia
              component="img"
              alt={card.text}
              height="140"
              
              image={card.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.text}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.subtext}
              </Typography>
            </CardContent>
            <CardActions>
              <Button target="_blank" href={card.buttonHref} size="small">Saiba Mais</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    );
  }