import {Container, Buttons, Button1, Cards  } from "./styles";
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export function Job ( ) {

    return (
      <>
        <Container>
            <Buttons>
                <Button1 style={{ color: '#FFFFFF', background: '#263138'}}>Todos</Button1>
                <Button1>Web App</Button1>
                <Button1>Data Analysis</Button1>
                <Button1>Outros</Button1>
            </Buttons>

        </Container>
        <Cards >
           <ImgMediaCard />
        </Cards>
        </>
        
    )
}

export function ImgMediaCard( ) {
  const [cards, setCards] = useState([
    {
      id: 1,
      image: 'acriliart.png',
      text: 'Acriliart',
      subtext: 'Landing page feita em ReactJs usando styled components feita para uma empresa de peças em acrílico e Neon.',
      buttonHref: 'https://acriliart.com.br/'
    },
    {
      id: 2,
      image: 'duo.png',
      text: 'Duo Ignite - Rocketseat',
      subtext: 'Plataforma de publicação de anúncios para jogadores usando react.Js, node.js e React Native',
      buttonHref: 'https://github.com/F3lipedaniel/NLW_IGNITE'
    },
    {
      id: 3,
      image: 'redesocial.png',
      text: 'Rede social - Rocketseat',
      subtext: 'Rede social. A aplicação possui recursos de perfil de usuário, postagem de conteúdo, comentários e curtidas.',
      buttonHref: 'https://github.com/F3lipedaniel/redeSocial'
    },
    {
      id: 4,
      image: 'python.png',
      text: 'Calcula comissão',
      subtext: 'Calculadora de comissão utilizando python de funcionários baseado na venda mensal e na porcentagem de cada vendedor.',
      buttonHref: 'https://github.com/F3lipedaniel/Calcula-comissao'
    },
    {
      id: 5,
      image: 'java.png',
      text: 'CRUD user-api',
      subtext: 'Java, SpringBoot e MongoDB. Permite ao usuário criar, ler, atualizar e excluir registros em uma base de dados MongoDB.',
      buttonHref: 'https://github.com/F3lipedaniel/DevsFood'
    },
    {
      id: 6,
      image: 'devsfood.png',
      text: 'DevsFood',
      subtext: 'Feito em ReactJS para simular um sistema de delivery de comida, seleção de itens e visualização do resumo do pedido.',
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