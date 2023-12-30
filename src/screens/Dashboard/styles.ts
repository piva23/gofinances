import styled from 'styled-components/native';
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
    align-items: center;
`

export const UserWrapper = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
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