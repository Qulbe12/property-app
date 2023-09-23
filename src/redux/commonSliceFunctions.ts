import {IErrorResponse} from "../interfaces/IErrorResponse";
import {Toast} from "native-base";

export interface PayloadError {
    error: Error;
}

export const showError = (err?: string) => {
    Toast.show({
        title: "Error",
        description: err,
    });
};

export const centralizedErrorHandler = (error: unknown, rejectWithValue: any) => {
    const err = error as IErrorResponse;
    console.log("errors", err.message)
    const errMessage = err.response?.data.message;
    // if (err.response?.status === 401) {
    //     showError("You are not authorized to perform this action. Please login again.");
    //     dispatch(logout());
    //     return rejectWithValue(errMessage);
    // }

    if (err.response) {
        const errorMessage = err.response.data.message;
        showError(errorMessage);
    } else if (err.request) {
        showError("No response received from server. Please try again later.");
    } else {
        showError(err.message);
    }
    return rejectWithValue(errMessage);
};