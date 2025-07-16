import { useParams } from 'react-router-dom';
import {useGetCoinDetailQuery} from "../services/cryptoApi.ts";
import {LoaderOne} from "../components/ui/loader.tsx";

const Coin = () => {
    const { coinId } = useParams<{coinId:string}>();
    const {data, isFetching} = useGetCoinDetailQuery(coinId)
    const coinData = data?.data.coin
    if (isFetching ) return <div className=""><LoaderOne/></div>;
    return (
        <div>
            <h1>Coin Page</h1>
            <p>Coin ID: {coinId}</p>
        </div>
    );
};

export default Coin;
