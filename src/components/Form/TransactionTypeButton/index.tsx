import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Button, Icon, Title } from "./styles";

interface Props extends TouchableOpacityProps {
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
    <Container {...rest} isActive={isActive} type={type}>
      <Button >
        <Icon name={icon[type]} type={type} />
        <Title>{title}</Title>
      </Button>
    </Container>
  );
}
