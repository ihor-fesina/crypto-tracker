import { useParams } from 'react-router-dom';

const Coin = () => {
    const { coinId } = useParams();

    return (
        <div>
            <h1>Coin Page</h1>
            <p>Coin ID: {coinId}</p>
        </div>
    );
};

export default Coin;
