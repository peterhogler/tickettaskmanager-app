export enum FormActionTypes {
    CHANGE_INPUT = "CHANGE_INPUT",
}

interface FormActions {
    type: FormActionTypes;
    payload: {
        name: string;
        value: string | number;
    };
}

export interface FormState {
    id: string | undefined
    title: string;
    status: number;
    message: string;
}

export const INITIAL_STATE: FormState = {
    id: "",
    title: "",
    status: 0,
    message: "",
};

export const formReducer = (state: FormState, action: FormActions) => {
    switch (action.type) {
        case "CHANGE_INPUT": {
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        }
        default:
            return state;
    }
};
