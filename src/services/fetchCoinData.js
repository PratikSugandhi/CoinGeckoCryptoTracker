import axiosInstance from "../helpers/axoisInstance";

export async function fetchCoinData(page=1,currency) {
    const perPage=20;
    try {
        const response=await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&perPage=${perPage}&page=${page}`);
        
        return response.data;
        
    } catch (error) {
        console.error(error);
        return null;
    }
}