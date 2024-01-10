//BIBBLIOTECAS
import React from 'react';
 

//ESTILOS
import { Container, Header, Photo, 
        UserGreeting, UserName, UserWrapper, 
        UserInfo, User, Icon, 
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

export interface DataListProps {
    id: string;
    type: 'up' | 'down';
    title: string;
    amount: string;
    category: {name: string; icon: string;};
    date: string;
}



export default function Dashboard () {
    
    const data :  DataListProps [] = [
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
        
    
    
    
    ];


    
    
    
    
    return (


        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri:'https://avatars.githubusercontent.com/u/125154632?v=4'}}/>
                        <User>
                            <UserGreeting>Olá</UserGreeting>
                            <UserName>Felipe Piva</UserName>
                        </User>
                    </UserInfo>
                    <Icon name='power' />
                </UserWrapper>
            </Header>
            
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
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item}/>}
                    
                />
            </Transactions>
            
        </Container>
        
    )
}