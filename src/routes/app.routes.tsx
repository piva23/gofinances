import React from "react";
import { Platform } from "react-native";

import { MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";

import Dashboard from '../screens/Dashboard';
import Register from '../screens/Register';
import { RFValue } from "react-native-responsive-fontsize";

const { Navigator, Screen } =createBottomTabNavigator();

export function AppRoutes () {
    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: "beside-icon",
                tabBarLabelStyle: {
                    fontFamily: theme.fonts.bold,
                    fontSize: 16,
                },
                tabBarStyle: {
                    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
                    height: 88,
                    
                },
                headerShown: false, // Aqui está a adição para ocultar o título
                tabBarHideOnKeyboard: true,

            }}
        >
            <Screen
                name='Listagem'
                component={Dashboard}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons 
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    ))
                }}
                
            />
            <Screen
                name='Cadastrar'
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons 
                            name="attach-money"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen
                name='Resumo'
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons 
                            name="pie-chart"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </Navigator>
    );

}