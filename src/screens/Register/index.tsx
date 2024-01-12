import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';


import { Alert, Keyboard, Modal, TouchableWithoutFeedback} from "react-native";
import { Container, Header, Title, Form, Fields, TransactionTypes } from './styles';

import { Input } from "../../components/Form/Input";
import { InputForm } from "../../components/Form/InputForm";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { CategorySelect } from "../CategorySelect";

interface FormData {
  name: string,
  amount: string,
};

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  amount: Yup.number()
    .typeError("Informe um valor numérico")
    .positive("O valor não pode ser negativo")
    .required("Preço é obrigatório"),
});

export default function Register() {

  //YUP RESOLVER
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //STATES

  const [name,setName] = useState('');
  const [amount,setAmount] = useState('');
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  //FUNCTIONS
  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
    console.log({type});
    console.log(type);
  }

  function handleOpenSelectCategoryModal () {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal () {
    setCategoryModalOpen(false);
  }

/*   function handleRegister (form: FormData) {
    if (!transactionType) {
      return Alert.alert("Selecione o tipo da transação");
    }
    if (category.key === "category") {
      return Alert.alert("Selecione a categoria");
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key, 
    }
    console.log(data);
  } */

  const handleRegister: SubmitHandler<FormData> = async (formData) => {
    if (!transactionType) {
      Alert.alert("Selecione o tipo da transação");
      return;
    }
    if (category.key === "category") {
      Alert.alert("Selecione a categoria");
      return;
    }
  
    const data = {
      name: formData.name,
      amount: formData.amount,
      transactionType,
      category: category.key,
    };
  
    console.log(data);
    // Aqui você pode prosseguir com o que deseja fazer com os dados.
  }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
            {/*  <Input
            placeholder="Nome"
            autoCapitalize="sentences"
            autoCorrect={false}
            onChangeText={setName}
          />
          <Input
            placeholder="Preço"
            keyboardType="numeric"
            onChangeText={setAmount}

          />  */}

            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize='words'
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />

            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
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
          
          <CategorySelectButton title={category.name} onPress={handleOpenSelectCategoryModal} />

            
        </Fields>

        {/* <Pressable onPress={() => handleTransactionTypeSelect('down')}>
          <Text>I'm pressable!</Text>
        </Pressable>

        <TouchableOpacity onPress={() => handleTransactionTypeSelect('down')}>
        <Text>I'm touchable opacity!</Text>
        </TouchableOpacity> */}

        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
      </Form>
      
      <Modal visible={categoryModalOpen}>
            <CategorySelect 
            category={category} 
            setCategory={setCategory} 
            
            closeSelectCategory={handleCloseSelectCategoryModal} 
            />
      </Modal>


    </Container>

    </TouchableWithoutFeedback>
  );
}

