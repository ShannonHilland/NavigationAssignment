import React from "react";
import {
    View,
} from "react-native";
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from "../RootParams";
import AddTransaction from "../components/AddTransaction";

type AddScreenProps = {
    navigation: any,
    route: RouteProp<RootStackParamList, "Add Transaction">,
}

export default function TransactionScreen({ navigation, route }: AddScreenProps) {
    const {
        mode = "add",
        id = "",
        title = "",
        desc = "",
        amount = 0,
        type = 0,
     } = route.params;
    return (
        <View>
            <AddTransaction navigation={navigation} mode={mode} id={id} originalTitle={title} originalDesc={desc} originalAmount={amount} originalType={type}/>
        </View>
    );
}