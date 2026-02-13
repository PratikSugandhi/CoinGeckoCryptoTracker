import { useParams } from "react-router-dom";

function CoinDetailsPage()
{
    const {coinId}=useParams();
    // useParams is use when you want to transfer data from one page to other via url portion then use this hook which is provided by react-router-dom
    return(
        <>
            <div>Coin Details Page {coinId} </div>
        </>
    );
}
export default CoinDetailsPage;