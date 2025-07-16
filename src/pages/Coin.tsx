import React, {useState} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import {useGetCoinDetailQuery, useGetCoinHistoryQuery} from '../services/cryptoApi';
import {LoaderOne} from '../components/ui/loader';
import type {AllowedTimePeriods, CoinDetail} from "../types.ts";
import CoinChart from "../components/pages/Coin/CoinChart.tsx";
import TimePeriodSelect from "../components/pages/Coin/TimePeriodSelect.tsx";
import {timePeriods} from "../constants.ts";
import CoinTags from "../components/pages/Coin/CoinTags.tsx";
import DOMPurify from 'dompurify';
import CoinLinks from "../components/pages/Coin/CoinLinks.tsx";
import {getStatValue} from "../lib/utils.ts";
import StatsGrid from "../components/pages/Coin/CoinStats.tsx";

const coinFields = [
    {
        key: 'price',
        label: 'Price',
        icon: '💲',
        getValue: (coin: CoinDetail) => getStatValue(coin.price, 'numeric'),
    },
    {
        key: 'marketCap',
        label: 'Market Cap',
        icon: '💰',
        getValue: (coin: CoinDetail) => getStatValue(coin.marketCap, 'numeric'),
    },
    {
        key: '24hVolume',
        label: '24h Volume',
        icon: '🔄',
        getValue: (coin: CoinDetail) => getStatValue(coin['24hVolume'], 'numeric'),
    },
    {
        key: 'rank',
        label: 'Rank',
        icon: '🏅',
        getValue: (coin: CoinDetail) => getStatValue(coin.rank, 'numeric'),
    },
    {
        key: 'change',
        label: 'Change (24h)',
        icon: '📉',
        getValue: (coin: CoinDetail) => getStatValue(coin.change, 'percent'),
    },
    {
        key: 'allTimeHigh',
        label: 'All Time High',
        icon: '🚀',
        getValue: (coin: CoinDetail) =>
            getStatValue(coin?.allTimeHigh?.price, 'numeric'),
    },
];
const supplyFields = [
    {
        key: 'total',
        label: 'Total',
        icon: '🧾',
        getValue: (supply: CoinDetail['supply']) => getStatValue(supply.total, 'numeric'),
    },
    {
        key: 'circulating',
        label: 'Circulating',
        icon: '🔄',
        getValue: (supply: CoinDetail['supply']) => getStatValue(supply.circulating, 'numeric'),
    }]

const Coin: React.FC = () => {
    const {coinId} = useParams<{ coinId: string }>();
    const [timePeriod, setTimePeriod] = useState<AllowedTimePeriods>('3m');

    const {data, isFetching} = useGetCoinDetailQuery(coinId!, {skip: !coinId});
    const {data: coinHistory, isFetching: isFetchingCoinHistory} = useGetCoinHistoryQuery(
        {uuid: coinId!, period: timePeriod},
        {skip: !coinId}
    );
    const coin = data?.data.coin;
    if (!coin) {
        return <Navigate to="/404" replace />;
    }
    if (isFetching)
        return (
            <div className="flex items-center justify-center h-64">
                <LoaderOne/>
            </div>
        );


    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md text-black">
            <div className="flex items-center mb-4">
                <img src={coin.iconUrl} alt={coin.name} className="w-12 h-12 mr-4"/>
                <div>
                    <h1 className="text-3xl font-bold">
                        {coin.name}{' '}
                        <span className="text-lg text-gray-500">({coin.symbol})</span>
                    </h1>
                    <a
                        href={coin.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                    >
                        {coin.websiteUrl}
                    </a>
                </div>
            </div>
            <StatsGrid<CoinDetail> data={coin} fields={coinFields} title="Coin Stats" />
            <TimePeriodSelect option={timePeriod} options={timePeriods} onChange={setTimePeriod}
                              title={'Select time period'}/>
            <CoinChart history={coinHistory} isFetching={isFetchingCoinHistory}/>
            <CoinTags tags={coin.tags}/>
            <div className="mb-4">
                <div className="text-gray-500 text-xs mb-1">Description</div>
                <div
                    className="text-gray-700 text-sm"
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description)}}
                />
            </div>
            <CoinLinks links={coin.links}/>
            <StatsGrid<CoinDetail["supply"]> data={coin.supply} fields={supplyFields} title="Supply Info" />
        </div>
    );
};

export default Coin;
 