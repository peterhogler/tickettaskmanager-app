enum FormActionTypes {
    CHANGE_INPUT = "CHANGE_INPUT",
}

interface FormActions {
    type: FormActionTypes;
    payload: FormState;
}

interface FormState {
    title: string;
    status: number | string;
    message: string;
}

export const INITIAL_STATE: FormState = {
    title: "",
    status: Number(""),
    message: "",
};

export const formReducer = (state: typeof INITIAL_STATE, action: FormActions) => {
    switch (action.type) {
        case "CHANGE_INPUT": {
            return state;
        }
        default:
            return state;
    }
};
