import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAdmins, getUsers, updateUser, UserAdd } from "./employeeApi";

const initialState = {
    adminLoading : false,
    admin:[],
    adminError : '',
    adminIsError: false,
    adminPage :1,

    employee: [],
    employeeLoading : false,
    employeeError: '',
    employeeIsError : false,
    employeePage: 1

}

export const fetchAdmin = createAsyncThunk("employee/fetchAdmin", async (data)=>{
    const employee = await getAdmins(data);
    return employee;
})
export const fetchEmployee = createAsyncThunk("employee/fetchEmployee", async(data)=>{
    const admin = await getUsers(data);
    return admin;
})
export const UpdateUsr = createAsyncThunk("employee/updateUser", async(data)=>{
    // console.log(data)
    const result = await updateUser(data)
    return result;
})

export const addUser = createAsyncThunk("employee/addUser", async(data)=>{
    console.log('Hello me')
    UserAdd(data)
})

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers:{
        addEmployee : (state,action)=>{
            console.log(action.payload.user_type)
            if(action.payload.user_type){
                 state.admin.unshift(action.payload);
                 state.admin.pop();
            }
            else{
                state.employee.unshift(action.payload);
                 state.employee.pop();
            }
        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(fetchAdmin.pending, (state)=>{
            state.adminLoading = true;
            state.adminError = ''
        })
        .addCase(fetchAdmin.fulfilled, (state,action)=>{
            state.adminLoading = false;
            state.admin = action.payload;
        })
        .addCase(fetchAdmin.rejected, (state,action)=>{
            state.loading = false;
            state.adminError = action.message;
            state.adminIsError = true;
        })

        .addCase(fetchEmployee.pending, (state)=>{
            state.employeeLoading = true;
            state.employeeError = ''
        })
        .addCase(fetchEmployee.fulfilled, (state,action)=>{
            state.employeeLoading = false;
            state.employee = action.payload;
        })
        .addCase(fetchEmployee.rejected, (state,action)=>{
            state.employeeLoading = false;
            state.employeeError = action.message;
            state.employeeIsError = true;
        })
    }
})


export default employeeSlice;
export const{addEmployee} = employeeSlice.actions