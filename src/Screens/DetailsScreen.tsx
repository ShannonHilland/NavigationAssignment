import React, { useLayoutEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { RouteProp } from '@react-navigation/native';
import {TransactionType, TransactionType_bgColor} from "../utility";
import { RootStackParamList } from "../RootParams";

type DetailsScreenProps = {
    navigation: any,
    route: RouteProp<RootStackParamList, "Details">,
};

export default function DetailsScreen({ navigation, route }: DetailsScreenProps){
    const {id, title, amount, desc, type} = route.params;

    //adds the edit button to only this header
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => 
                    navigation.navigate("Update Transaction", {
                        mode: "edit", 
                        id, 
                        title, 
                        amount, 
                        desc, 
                        type
                    })}>
                    <Text style={styles.headerText}>Edit</Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation,]);
    return (
        <View style={styles.container}>
            <View style={[styles.card, { borderColor: TransactionType_bgColor[type] }]}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.cardAmount}>${amount.toFixed(2)}</Text>
                    <Text style={styles.cardDesc}>{desc}</Text>
                    <Text style={styles.cardDesc}>
                        Spending Type: {TransactionType[type]}
                    </Text>
                    {/* I preferred the look of the button in the card, so added this before I noticed that the edit in the header
                    was for marks, so that's why it is also here */}
                    {/* <TouchableOpacity onPress={() => 
                        navigation.navigate("Update Transaction", {
                            mode: "edit", 
                            id, 
                            title, 
                            amount, 
                            desc, 
                            type
                        })}>
                        <Text style={[styles.cardEdit, { backgroundColor: TransactionType_bgColor[type]  }]}>
                            Edit 
                        </Text>
                    </TouchableOpacity> */}
                    
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 15,
    },
    card: {
        backgroundColor: "#f7f4ff",
        borderRadius: 10,
        borderWidth: 3,
        padding: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        marginVertical: 20
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: "600",
        marginBottom: 10,
        color: "#333",
    },
    cardAmount: {
        fontSize: 18,
        fontWeight: "500",
        color: "#333",
        marginBottom: 15,
    },
    cardDesc: {
        fontSize: 16,
        color: "#777",
        marginBottom: 15,
        lineHeight: 22,
    },
    cardEdit: {
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center",
        width: 120,
        borderRadius: 10, 
        paddingVertical: 4, 
        marginTop: 10, 
        alignSelf: "flex-start", 
        backgroundColor: "#777", 
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    headerText: {
        color: "white",
        fontSize: 18,
        marginRight: 15,
        fontWeight: "400",
    }
});