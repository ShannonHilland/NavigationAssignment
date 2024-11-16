import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import {TransactionType_bgColor, TransactionType} from "../utility";

type TransactionItemProps = {
    navigation : any,
    id : string,
    title : string,
    amount : number,
    desc : string,
    type : TransactionType,
}
export default function TransactionItem(props: TransactionItemProps) {
    const {navigation, id, title, amount, desc, type} = props;
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Details", {id, title, amount, desc, type})}>
            <View style={[styles.container, {backgroundColor: TransactionType_bgColor[type]}]}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.amount}>${amount}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginVertical: 5,
        paddingVertical: 25,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        flex: 1,
    },
    amount: {
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 10,
    }
});