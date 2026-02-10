import axiosInstance from "../helpers/axoisInstance";

export async function fetchCoinData() {
    try {
        const response=await axiosInstance.get('/coins/markets?vs_currency=usd');
        console.log(response);
        
    } catch (error) {
        console.error(error);
        return null;
    }
}