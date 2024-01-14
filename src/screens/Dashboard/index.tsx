//BIBBLIOTECAS
import React, { useCallback, useEffect, useState } from 'react';
 

//ESTILOS
import { Container, Header, Photo, 
        UserGreeting, UserName, UserWrapper, 
        UserInfo, User, 
        LogoutButton, Icon, 
        HighlightCards,
        Transactions,
        TransactionsTitle,
        TransactionList,
        TransactionFlatList } from './styles';

//COMPONENTES
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { Button } from '../../components/Form/Button';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';

export interface DataListProps {
    id: string;
    type: 'up' | 'down';
    name: string;
    amount: string;
    category: {name: string; icon: string;};
    date: string;
}



export default function Dashboard () {
    //DADOS ESTATICOS
    /* const data :  DataListProps [] = [
        {
        id: '1',
        type: 'up',
        title:'Desenvolvimento de Site',
        amount:'R$ 300,00' ,
        category:{name:'Vendas', icon:'dollar-sign'},
        date:'08/08/2024'}
        , 
        {
        id: '2',
        type: 'down',
        title:'Desenvolvimento de App',
        amount:'R$ 1000,00' ,
        category:{name:'Vendas', icon:'code'},
        date:'08/08/2024'
        },
        {
        id: '3',
        type: 'up',
        title:'Desenvolvimento de App',
        amount:'R$ 1000,00' ,
        category:{name:'Vendas', icon:'coffee'},
        date:'08/08/2024'
        },
        {
        id: '4',
        type: 'up',
        title:'Desenvolvimento de App',
        amount:'R$ 1000,00' ,
        category:{name:'Vendas', icon:'home'},
        date:'08/08/2024'
        },
        {
        id: '5',
        type: 'down',
        title:'Desenvolvimento de App',
        amount:'R$ 1000,00' ,
        category:{name:'Vendas', icon:'dollar-sign'},
        date:'08/08/2024'
        },
        {
        id: '6',
        type: 'up',
        title:'Desenvolvimento de App',
        amount:'R$ 1000,00' ,
        category:{name:'Vendas', icon:'dollar-sign'},
        date:'08/08/2024'
        },
        
    
    
    
    ]; */

    const [isLoading, setIsLoading] = useState(true);
    const [transactions, setTransactions] = useState<DataListProps[]>([]);
/*     const [highlightData, setHighlightData] = useState<HighlightData>(
      {} as HighlightData
    ); */
  
/*     const theme = useTheme();
    const { user, signOut } = useAuth();
    const { getItem } = useStorageData(); */
  
/*     function getLastTransactionDate(
      collection: DataListProps[],
      type: "positive" | "negative"
    ) {
      const collectionFilttered = collection.filter(
        (transaction) => transaction.type === type
      );
  
      if (collectionFilttered.length === 0) {
        return 0;
      }
  
      const lastTransaction = new Date(
        Math.max.apply(
          Math,
          collectionFilttered.map((transaction) =>
            new Date(transaction.date).getTime()
          )
        )
      );
  
      return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString(
        "pt-BR",
        { month: "long" }
      )}`;
    } */
  
    async function loadingTransactions() {
      const dataKey = `@gofinances:transactions`;
  
      const response = await AsyncStorage.getItem(dataKey);
      const transactions = response ? JSON.parse(response) : [];
  
      let entriesTotal = 0;
      let expensivesTotal = 0;
  
      const transactionsFormated: DataListProps[] = transactions
      .map((item: DataListProps) => {
          const amount = Number(item.amount).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });
  
          const date = Intl.DateTimeFormat("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }).format(new Date(item.date));
  
          /* if (transaction.type === "positive") {
            entriesTotal += Number(transaction.amount);
          } else if (transaction.type === "negative") {
            expensivesTotal += Number(transaction.amount);
          } */
  
          return {
            id: item.id,
            name: item.name,
            amount,
            type: item.type,
            category: item.category,
            date,
          };
        }
      );
  
      setTransactions(transactionsFormated);
  
      /* const lastTransactionEntries = getLastTransactionDate(
        transactions,
        "positive"
      );
      const lastTransactionExpensives = getLastTransactionDate(
        transactions,
        "negative"
      );
      const totalInterval = `01 à ${
        lastTransactionExpensives > lastTransactionEntries
          ? lastTransactionExpensives
          : lastTransactionEntries
      }`;
  
      const total = entriesTotal - expensivesTotal;
  
      setHighlightData({
        entries: {
          amount: entriesTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
          lastTransaction:
            lastTransactionEntries === 0
              ? "Não há transações"
              : `Última entrada dia ${lastTransactionEntries}`,
        },
        expensives: {
          amount: expensivesTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
          lastTransaction:
            lastTransactionExpensives === 0
              ? "Não há transações"
              : `Última saída dia ${lastTransactionExpensives}`,
        },
        total: {
          amount: total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
          lastTransaction:
            lastTransactionEntries === 0 && lastTransactionExpensives === 0
              ? "Não há transações"
              : totalInterval,
        },
      }); */
  
      setIsLoading(false);
    }
  
    useEffect(() => {
      loadingTransactions();
    }, []);
  
    useFocusEffect(
      useCallback(() => {
        loadingTransactions();
      }, [])
    );
    
    return (

        
        <Container>
            <GestureHandlerRootView>
                <Header>
                    <UserWrapper>
                        <UserInfo>
                            <Photo source={{ uri:'https://avatars.githubusercontent.com/u/125154632?v=4'}}/>
                            <User>
                                <UserGreeting>Olá</UserGreeting>
                                <UserName>Felipe Piva</UserName>
                            </User>
                        </UserInfo>
                        <LogoutButton onPress= {() => {}}>
                            <Icon name='power' />
                        </LogoutButton>
                    </UserWrapper>
                </Header>
            </GestureHandlerRootView>
            
            <HighlightCards>
                <HighlightCard
                    type='up'
                    title='Entradas' 
                    amount='R$ 21.000,00' 
                    lastTransaction='08/08/2024'
                />
                <HighlightCard
                    type='down'
                    title='Saídas' 
                    amount='R$ 2.000,00' 
                    lastTransaction='08/08/2024'
                />  
                <HighlightCard
                    type='total'
                    title='Total' 
                    amount='R$ 15.000,00' 
                    lastTransaction='08/08/2024'
                />
                

            </HighlightCards>

            <Transactions>
                <TransactionsTitle>Últimas Transações</TransactionsTitle>
                
                {/*<TransactionList>
                    
                    <TransactionCard data={data[0]}/>    
                    <TransactionCard data={data[1]}/>    

                </TransactionList>  
                */}

                <TransactionFlatList
                    data={transactions}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item}/>}
                    
                />
            </Transactions>
            
        </Container>
        
    )
}