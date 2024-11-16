import {TransactionType} from "./utility";

export type RootStackParamList = {
    Transactions: undefined;
    Details: {
        id: string;
        title: string;
        amount: number;
        desc: string;
        type: TransactionType;
    };
    "Update Transaction": {
        mode: "edit";
        id?: string;
        title?: string;
        amount?: number;
        desc?: string;
        type?: TransactionType;
    };
    "Add Transaction": {
        mode: "add";
        id?: string;
        title?: string;
        amount?: number;
        desc?: string;
        type?: TransactionType;
    };
};
