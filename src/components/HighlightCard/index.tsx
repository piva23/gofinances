import React from "react";
import { Container, Header, Title, Icon, Footer, Amount, LastTransaction } from "./styles";

export default function HighlightCard () {
    return (
        <Container>
            <Header>
                <Title>Entradas</Title>
                <Icon name='arrow-up-circle' />

            </Header>
            <Footer>
                <Amount>R$ 17.000,00</Amount>
                <LastTransaction>Última entrada dia 17 de março</LastTransaction>
            </Footer>


        </Container>

    )

}