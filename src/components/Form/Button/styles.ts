import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";

//
export const ButtonContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`

export const Container = styled(RectButton)`
  width: 100%;
  padding: 18px;
  justify-content: center;
  align-items: center;

`;


export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
