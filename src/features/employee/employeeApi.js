import axiosInstance from "../../utlis/axiosInstance";


export const getAdmins = async (data) => {
    const url = `/users?user_type=admin&page=${data}&limit=5`
    const response = await axiosInstance.get(url);
    return response.data;
};
export const getUsers = async (data) =>{
    const url = `/users?user_type=employee&page=${data}&limit=5`
    const response = await axiosInstance.get(url);
    return response.data;
}
export const updateUser = async ({id,data})=>{
    const response = await axiosInstance.put(`/users/${id}`,data)
    return response.data;
}
export const UserAdd = async (data)=>{
    const response =  await axiosInstance.post(`/users`,data)
    console.log("hi adding value ",response.data)
}