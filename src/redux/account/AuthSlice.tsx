import {User} from "firebase/auth"
import {createSlice} from "@reduxjs/toolkit";

interface initialState {
    verificationId: string
    verificationCode: string
    phone: string
    user?: User
}

const initialState: initialState = {
    user: undefined,
    phone: "",
    verificationId: "",
    verificationCode: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setPhone: (state, action) => {
            state.phone = action.payload
        },
        setVerificationId: (state, action) => {
            state.verificationId = action.payload
        },
        setVerificationCode: (state, action) => {
            state.verificationCode = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

const authReducer = authSlice.reducer
export const {setPhone, setVerificationId, setVerificationCode, setUser} = authSlice.actions
export default authReducer