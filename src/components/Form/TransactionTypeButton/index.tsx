import React from "react";

import { Container, Button, Icon, Title } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
  type: "up" | "down";
  title: string;
  isActive: boolean;
//  onPress: () => void; // Adicionando a propriedade onPress à interface
  

}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

export function TransactionTypeButton({
  type,
  title,
  isActive,
  ...rest
}: Props) {
  return (
    <Container  isActive={isActive} type={type}>
      <Button {...rest}>
        <Icon name={icon[type]} type={type} />
        <Title>{title}</Title>
      </Button>
    </Container>
  );
}
