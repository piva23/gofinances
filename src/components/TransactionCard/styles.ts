import styled, { css }from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
    type: "up" | "down";
  }

export const Container = styled.View`
    background-color: ${( props ) => props.theme.colors.shape};
    border-radius: 5px;
    padding: 17px 24px;
    margin-bottom: 16px;

`;

export const Title = styled.Text`
    color: ${( props ) => props.theme.colors.text_dark};
`;

export const Amount = styled.Text<TypeProps>`
    color: ${({ theme, type }) =>
      type === "up" ? theme.colors.success : theme.colors.attention};
`;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Feather)`
    color: ${( props ) => props.theme.colors.text};

`;

export const CategoryName = styled.Text`
    color: ${( props ) => props.theme.colors.text};
    margin-left: 10px;
`;

export const Date = styled.Text`
    color: ${( props ) => props.theme.colors.text};
`;

