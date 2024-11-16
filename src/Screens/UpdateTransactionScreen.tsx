import React from "react";
import {
    View,
} from "react-native";
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from "../RootParams";
import AddTransaction from "../components/AddTransaction";

type UpdateScreenProps = {
    navigation: any,
    route: RouteProp<RootStackParamList, "Update Transaction">,
    
}

export default function UpdateTransaction({ navigation, route }: UpdateScreenProps) {
    const { 
        mode = "edit",
        id = "",
        title = "",
        desc = "",
        amount = 0,
        type = 0,
     } = route.params;
    return (
        <View>
            <AddTransaction navigation={navigation} mode={mode} id={id} originalTitle={title} originalDesc={desc} originalAmount={amount} originalType={type} />
        </View>
    );
}