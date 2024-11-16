import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { useState, useEffect } from "react";
import {TransactionEntry} from "../utility";
import TransactionList from "../components/TransactionList";
import {useIsFocused} from "@react-navigation/native";

type HomeScreenProps = {
    navigation : any,
    transactions : Array<TransactionEntry>
}

export default function HomeScreen(props: HomeScreenProps) {
    const {navigation, transactions} = props;
    const isFocused = useIsFocused();
    const [refresh, setRefresh] = useState(false);
    //added to force refresh the transaction screen when popToTop is called as otherwise the screen does not refresh
    useEffect(() => {
        if(isFocused){
            setRefresh(true);
        }
    }, [isFocused])


    return(
        <View style={style.container}>
            {transactions.length === 0 ? (
            <Text style={style.directionText}>Add a transaction to see the entry here 💰</Text> ) : (
            <TransactionList transactions={transactions} navigation={navigation} />
            )}
             <TouchableOpacity onPress={() => navigation.navigate("Add Transaction", {mode: "add"})} 
                style={style.FAB}>
                <Text style={style.FABText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        position: 'relative',
      },
      FAB: {
        backgroundColor: "#6750A4",
        width: 55,
        height: 55,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 30,
        right: 30
    },
    FABText: {   
        color: 'white',
        fontSize: 30,
        fontWeight: '400', 
    },
    directionText: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: '90%',
        
    }
});