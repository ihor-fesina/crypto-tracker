import {useGetStatsQuery} from "../services/cryptoApi";
import StatisticSection from "../components/StatisticSection";

const Home = () => {
    const {data, isFetching, error} = useGetStatsQuery();
    const stats = data?.data;

    if (isFetching) return <div className="">Loading...</div>;
    if (error) return <div className="">Error occurred</div>;

    return (
        <div className="container">
            <h1 className="text-3xl font-bold mb-8 text-center">Global Crypto Statistics</h1>
            {stats ? (
                <>
                    <StatisticSection stats={stats} />
                    <div
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                        <div className="text-lg font-semibold mb-2">Newest coins:</div>
                        <ul className="space-y-2">
                            {stats.newestCoins.map((coin) => (
                                <li key={coin.uuid} className="flex items-center gap-2">
                                    <img src={coin.iconUrl} alt={coin.name} width={24} height={24}
                                         className="rounded-full"/>
                                    <a
                                        href={coin.coinrankingUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline dark:text-blue-400"
                                    >
                                        {coin.name} <span className="text-gray-400">({coin.symbol})</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <div className="text-center text-gray-400">No data</div>
            )}
        </div>
    );
};

export default Home;
