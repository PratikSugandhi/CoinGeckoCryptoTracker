import axiosInstance from "../helpers/axoisInstance";

export async function fetchCoinData() {
    const perPage=20;
    try {
        const response=await axiosInstance.get(`/coins/${id}`);
        
        return response.data;
        
    } catch (error) {
        console.error(error);
        return null;
    }
}