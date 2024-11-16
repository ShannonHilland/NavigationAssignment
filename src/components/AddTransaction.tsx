import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import {useState} from "react";
import { RadioButton } from 'react-native-paper';
import { addEditTransaction, getNewID, TransactionEntry, TransactionType, } from "../utility";

type AddTransactionProps = {
    navigation: any,
    mode: string,
    id: string,
    originalTitle: string,
    originalDesc: string,
    originalAmount: number,
    originalType: TransactionType,
}
export default function AddTransaction(props: AddTransactionProps) {
    const {navigation, mode, id, originalTitle, originalDesc, originalAmount, originalType} = props;
    const [title, setTitle] = useState(originalTitle);
    const [desc, setDesc] = useState(originalDesc);
    const [amount, setAmount] = useState(originalAmount.toString());
    const [checked, setChecked] = useState(originalType === TransactionType.Essential ? "Essential" : originalType === TransactionType.Leisure ? "Leisure" : "Others");
    const [titleError, setTitleError] = useState(false);
    const [descError, setDescError] = useState(false);
    const [amountError, setAmountError] = useState(false);
    const [checkedError, setCheckedError] = React.useState(false);

    function onChangeTitle(text: string) {
        setTitle(text);
    }
    function onChangeDesc(text: string) {
        setDesc(text);
    }
    function onChangeAmount(text: string) {
        setAmount(text);
    }

    function validateInput() {
        if (title !== "" && desc !== "" && amount !== "" && !isNaN(Number(amount)) && checked !== "") {
            let type;
            switch (checked) {
                case "Essential":
                    type = TransactionType.Essential;
                    break;
                case "Leisure":
                    type = TransactionType.Leisure;
                    break;
                case "Others":
                    type = TransactionType.Others;
                    break;
                default: throw new Error("Invalid Transaction Type");
            }
            const amountNum = Number(amount);
            if (mode === "edit") {
                const transaction : TransactionEntry = {
                    id, 
                    title, 
                    desc, 
                    amount: amountNum, 
                    type
                };
                addEditTransaction(transaction);
                navigation.popToTop();
            } else {
                const transaction : TransactionEntry = {
                    id: getNewID(), 
                    title, 
                    desc, 
                    amount: amountNum, 
                    type
                };
                addEditTransaction(transaction);
                navigation.popToTop();
            }
        } else {
            setTitleError(false);
            setDescError(false);
            setAmountError(false);
            setCheckedError(false);
            if (title === "") {
                setTitleError(true);
            }
            if (desc === "") {
                setDescError(true);
            }
            if ((amount === "") || isNaN(Number(amount))) {
                setAmountError(true);
            }
            if (checked === "") {
                setCheckedError(true);
            }
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Title:</Text>
            <Text style={[styles.errorText, !titleError && styles.hidden]}>*Title is a required field</Text>
            <TextInput
                placeholder="Enter Title Here..."
                style={styles.input}
                onChangeText={onChangeTitle}
                value={title} />
            <Text style={styles.text}>Description:</Text>
            <Text style={[styles.errorText, !descError && styles.hidden]}>*Description is a required field</Text>
            <TextInput
                placeholder="Enter Description of Transaction Here..."
                multiline
                numberOfLines={5}
                maxLength={250}
                style={styles.input}
                onChangeText={onChangeDesc}
                value={desc} />
            <Text style={styles.text}>Amount:</Text>
            <Text style={[styles.errorText, !amountError && styles.hidden]}>*Amount is a required field (must be a number)</Text>
            <TextInput
                placeholder="Enter Amount Here..."
                keyboardType="numeric"
                style={styles.input}
                onChangeText={onChangeAmount}
                value={amount} />
            <Text style={[styles.errorText, !checkedError && styles.hidden]}>*One field must be selected</Text>
            <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
                <RadioButton.Item label="Essential" value="Essential"/>
                <RadioButton.Item label="Leisure" value="Leisure" />
                <RadioButton.Item label="Others" value="Others" />
            </RadioButton.Group>
            <TouchableOpacity onPress={validateInput} style={styles.submit}>
                {mode === "edit"? (
                    <Text style={styles.submitText}>Save</Text>
                ) : (
                    <Text style={styles.submitText}>Submit</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        margin: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "#000",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        fontSize: 20,
        marginBottom: 20,
    },
    submit: {
        backgroundColor: "#6750A4",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        margin: 20,
        width: "40%",
        alignSelf: "center",
    },
    submitText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
      },
      hidden: {
        display: 'none',
      },
});