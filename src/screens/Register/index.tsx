import React, { useState , useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';

import { Alert, Keyboard, Modal, TouchableWithoutFeedback} from "react-native";
import { DevTools, Container, Header, Title, Form, Fields, TransactionTypes } from './styles';

import { InputForm } from "../../components/Form/InputForm";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { CategorySelect } from "../CategorySelect";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
  const dataKey = `@gofinances:transactions`;
  
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

  //NAVEGAÇÃO
  const navigation = useNavigation();

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
    //Keyboard.dismiss;
  }


  async function handleRegister(form: FormData) {
  //const handleRegister: SubmitHandler<FormData> = async (formData) => {
    if (!transactionType) {
      Alert.alert("Selecione o tipo da transação");
      return;
    }
    if (category.key === "category") {
      Alert.alert("Selecione a categoria");
      return;
    }
  
    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
      date: new Date(),
    };
  
    //console.log(data);
    // Aqui você pode prosseguir com o que deseja fazer com os dados.
    
    try {
      //const dataKey = `@gofinances:transactions_@user:${user.name}`;
        

      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormated = [
        ...currentData, 
        newTransaction];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormated));

      //LIMPA O FORMULARIO
      reset();
      //LIMPA OS BOTOES
      setTransactionType("");
      setCategory({
        key: "category",
        name: "Categoria",
      });

      navigation.navigate('Listagem');
      
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível salvar");
    }
  }

  async function LoadAllData() {
    const data = await AsyncStorage.getItem(dataKey);
    console.log(JSON.parse(data));
  }

  async function DeleteALlData() {
    await AsyncStorage.removeItem(dataKey);
  }
  


  useEffect(() => {


  },[]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

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
        
       {/*  DEV TOOLS */}
        <DevTools>
          <TransactionTypeButton
            type=''
            title='Delete All Data'
            isActive={transactionType === ''}
            onPress={() => {
              console.log("DeletedAllData");
              DeleteALlData();
            }}
          />
          <TransactionTypeButton
            type=''
            title='Load All Data'
            isActive={transactionType === ''}
            onPress={() => {
              console.log("Loaded All Data");
              LoadAllData();
            }}
      />
          </DevTools>


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
    </GestureHandlerRootView>

  );
}

