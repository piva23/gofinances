import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { FlatList } from 'react-native';

import { DataListProps } from '.'

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.background};
`

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`

export const UserWrapper = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 24px;
    margin-top: ${RFValue(58)}px;


`

export const UserInfo = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`

export const User = styled.View`
    margin-left: 17px;
`

export const UserGreeting = styled.Text`
    font-family: ${( props ) => props.theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${( props ) => props.theme.colors.shape};
`;

export const UserName = styled.Text`
    font-family: ${( props ) => props.theme.fonts.bold};
    font-size: ${RFValue(18)}px;
    color: ${( props ) => props.theme.colors.shape};
`;

export const Icon = styled(Feather)`
        color: ${( props ) => props.theme.colors.secondary};
        font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 16 },
  })`

    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
    `;

export const Transactions = styled.View`
    flex: 1;
    padding: 0 24px;
    //background-color: red;
    margin-top: ${RFPercentage(12)}px;

`;
export const TransactionsTitle = styled.Text`
    font-family: ${( props ) => props.theme.fonts.bold};
    font-size: ${RFValue(18)}px;
    color: ${( props ) => props.theme.colors.text_dark};
`;
export const TransactionList = styled.View`
`;

export const TransactionFlatList = styled(FlatList as new () => FlatList<DataListProps>).attrs({
    showsVerticalScrollIndicator:false,
    contentContainerStyle:{paddingBottom: 28}

    
    } )`
    padding-bottom: 20px;
    padding: 20px 0px;

    `;