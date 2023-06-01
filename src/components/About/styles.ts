import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 13rem;
        height: 11.93rem;
        padding: 1.37rem;
    }
`;


export const Container = styled.div`

`;

export const Header = styled.div`
    display: center;
    justify-content: center;
    align-items: center;
    text-align: center;

    img {
        width: 13rem;
        height: 13rem;
        padding: 1.37rem;
    }
    h1 {

        margin: 0;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 64px;
        line-height: 75px;
        color: #445964;

    }

    span {
        margin-top: 1.5rem;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-feature-settings: 'pnum' on, 'onum' on;
        color: #445964;
    }
`;


export const HardSkill = styled.div`
    overflow: hidden;
    width: 50%;
    flex: wrap;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    
    img {
        padding: 0;
        width: 36px;
        height: 36px;

    }

    span {
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 0;
        padding: 0;
    }

`;

