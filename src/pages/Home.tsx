import {useGetStatsQuery} from "../services/cryptoApi";
import StatisticSection from "../components/StatisticSection";

const Home = () => {
    const {data, isFetching, error} = useGetStatsQuery();
    const stats = data?.data;

    if (isFetching) return <div className="">Loading...</div>;
    if (error) return <div className="">Error occurred</div>;

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
};

export default Home;
