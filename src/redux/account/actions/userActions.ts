import {createAsyncThunk} from "@reduxjs/toolkit";
import {ICreateUserDto, ICreateUserResponseDto} from "../../../interfaces/user";
import {axiosPrivate} from "../../../config/axiosConfig";
import {centralizedErrorHandler} from "../../commonSliceFunctions";

export const addUser = createAsyncThunk("user/addUser", async (user: ICreateUserDto, {rejectWithValue}) => {
    try {
        const res = await axiosPrivate.post<ICreateUserResponseDto>("user", user)
        console.log("response from server", res.data)
        return res.data
    } catch (e: unknown) {
        centralizedErrorHandler(e, rejectWithValue)
    }
})