import React from "react";
import { TouchableOpacityProps } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

import {Container, Title, ButtonContainer } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void; // Adicionando a propriedade onPress à interface

}

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonContainer>
    <Container {...rest} >
      <Title>{title}</Title>
    </Container>
    </ButtonContainer>
  );
}
