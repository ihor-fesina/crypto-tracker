import {useGetStatsQuery, useGetCoinsQuery} from "../services/cryptoApi";
import StatisticSection from "../components/pages/Home/StatisticSection.tsx";

import {LoaderOne} from "../components/ui/loader.tsx";
import MarqueeSection from "../components/MarqueeSection.tsx";
import CryptoSearch from "../components/pages/Home/CryptoSearch.tsx";

const Home = () => {
    const { data: statsData, isFetching: isFetchingStats, error: errorStats } = useGetStatsQuery();
    const { data: coinsData, isFetching: isFetchingCoins} = useGetCoinsQuery();

    const stats = statsData?.data;
        const coins = coinsData?.data?.coins;

        if (isFetchingStats || isFetchingCoins) return <div className="flex items-center justify-center mt-40"><LoaderOne/></div>;
        if (errorStats) return <div>Error occurred</div>;

        return (
            <div className="container">
                <h1 className="text-3xl font-bold mb-8 text-center">Global Crypto Statistics</h1>
                {stats ? (
                    <>
                        <StatisticSection stats={stats}/>
                        <MarqueeSection title={'newest coins'} items={stats.newestCoins} direction={'right'}/>
                        <MarqueeSection title={'best coins'} items={stats.bestCoins} direction={'left'}/>
                    </>
                ) : (
                    <div className="text-center text-gray-400">No data</div>
                )}
                {coins && (<CryptoSearch coinsList={coins} />)}
            </div>
        )
            ;
    }
;

export default Home;
