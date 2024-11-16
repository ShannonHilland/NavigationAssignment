// Mobile App Development CPRG303-H Assignment 4: Navigation
// Author: Shannon Hilland
// Date: November 16, 2024
// Broke Buddy application is used to track expenses.
// This Main.tsx file provides the base for the stack navigation. All screens are held within
// the screens folder, and components used in the screens are held within the components folder. 
// RootParams.ts was created to provide params structure for the AddTransaction component, to differentiate if 
// it should be displayed in edit or add mode. 
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { RootStackParamList } from "./RootParams";
import { getInitialData } from "./utility";
import HomeScreen from "./Screens/HomeScreen";
import TransactionScreen from "./Screens/TransactionScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import UpdateTransaction from "./Screens/UpdateTransactionScreen";

const Stack = createStackNavigator<RootStackParamList>();

function Main() : React.JSX.Element {
    let transactions = getInitialData();

 
    function getScreenOptions () : any {
        const options = {
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "#6750A4"
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontWeight: "600",
                fontSize: 30,
            }
        }
        return options;
    }
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Transactions" screenOptions={getScreenOptions}>
                <Stack.Screen name="Transactions">
                    {(props) => <HomeScreen {...props} transactions={transactions} />}
                </Stack.Screen>
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Update Transaction" component={UpdateTransaction} />
                <Stack.Screen name="Add Transaction" component={TransactionScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Main;