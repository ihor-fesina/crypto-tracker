import {useGetStatsQuery} from "../services/cryptoApi";
import StatisticSection from "../components/StatisticSection";

import {LoaderOne} from "../components/ui/loader.tsx";
import MarqueeSection from "../components/MarqueeSection.tsx";

const Home = () => {
        const {data, isFetching, error} = useGetStatsQuery();
        const stats = data?.data;

        if (isFetching) return <div className=""><LoaderOne/></div>;
        if (error) return <div className="">Error occurred</div>;

        return (
            <div className="container">
                <h1 className="text-3xl font-bold mb-8 text-center">Global Crypto Statistics</h1>
                {stats ? (
                    <>
                        <StatisticSection stats={stats}/>
                        <MarqueeSection title={'newest coins'} items={stats.newestCoins} direction={'right'} />
                        <MarqueeSection title={'best coins'} items={stats.bestCoins} direction={'left'} />

                    </>
                ) : (
                    <div className="text-center text-gray-400">No data</div>
                )}
            </div>
        )
            ;
    }
;

export default Home;
