import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;

  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;

  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;


export const Form = styled.View`
  padding: 24px;
  width: 100%;
  justify-content: space-between;
  flex: 1;


`;

export const Fields = styled.View`


`;


export const TransactionTypes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const DevTools = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 16px;
`;

