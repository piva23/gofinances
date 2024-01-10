import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { FlatList } from 'react-native';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.background};
`