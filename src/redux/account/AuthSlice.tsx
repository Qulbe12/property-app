import {User} from "firebase/auth"
import {createSlice} from "@reduxjs/toolkit";
import {addUser} from "./actions/userActions";
import {ICreateUserResponseDto} from "../../interfaces/user";

interface initialState {
    verificationId: string
    verificationCode: string
    phone: string
    addedUser:ICreateUserResponseDto
    user?: User
    loaders:{
        addingUser: boolean
    }
}

const initialState: initialState = {
    user: undefined,
    phone: "",
    verificationId: "",
    verificationCode: "",
    addedUser:{
        name:"",
        phone:"",
        id:""
    },
    loaders:{
        addingUser: false
    }
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
    },
    extraReducers:(builder)=>{
        builder
            // add user
            .addCase(addUser.pending , (state, action)=>{
            state.loaders.addingUser = true
        })
            .addCase(addUser.fulfilled , (state, action)=>{
                state.loaders.addingUser = false
                if (action.payload){
                    state.addedUser = action.payload
                }
            })
            .addCase(addUser.rejected , (state, action)=>{
                state.loaders.addingUser = false
            })
    }
})

const authReducer = authSlice.reducer
export const {setPhone, setVerificationId, setVerificationCode, setUser} = authSlice.actions
export default authReducer