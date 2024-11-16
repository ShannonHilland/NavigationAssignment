import React from "react";
import {
    View,
    FlatList
} from "react-native";
import {TransactionEntry} from "../utility";
import TransactionItem from "./TransactionItem";

type TransactionListProps = {
    navigation: any,
    transactions: Array<TransactionEntry>
}

export default function TransactionList(props: TransactionListProps) {
    const {navigation, transactions} = props;
    return (
        <View>
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id.toString()}
                renderItem={
                    ({ item }) => 
                        <TransactionItem
                            navigation={navigation} 
                            id={item.id}
                            title={item.title}
                            amount={item.amount}
                            desc={item.desc}
                            type={item.type}/>}
            />
        </View>
    );
}