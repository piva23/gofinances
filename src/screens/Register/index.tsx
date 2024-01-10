import React, { useState } from "react";
import { Container, Header, Title, Form, Fields, TransactionTypes } from './styles';

import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";

import { Pressable, Text, TouchableOpacity } from "react-native";

export default function Register() {
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
    console.log({type});
    console.log(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input
            placeholder="Nome"
            autoCapitalize="sentences"
            autoCorrect={false}
          />
          <Input
            placeholder="Preço"
            keyboardType="numeric"
          />
          <TransactionTypes>
          <TransactionTypeButton
            type='up'
            title='Entrada'
            isActive={transactionType === 'up'}
            onPress={() => {
              console.log("Button pressed with type 'up'");
              handleTransactionTypeSelect('up');
            }}
          />
          <TransactionTypeButton
            type='down'
            title='Saída'
            isActive={transactionType === 'down'}
            onPress={() => {
              console.log("Button pressed with type 'down'");
              handleTransactionTypeSelect('down');
            }}
      />
          </TransactionTypes>
          
          <CategorySelectButton title="Categoria"/>

            
        </Fields>

        {/* <Pressable onPress={() => handleTransactionTypeSelect('down')}>
          <Text>I'm pressable!</Text>
        </Pressable>

        <TouchableOpacity onPress={() => handleTransactionTypeSelect('down')}>
        <Text>I'm touchable opacity!</Text>
        </TouchableOpacity> */}

        <Button title="Enviar" onPress={() => console.log("Button pressed with ENVIAR")} />
        

      </Form>
      
    </Container>
  );
}
