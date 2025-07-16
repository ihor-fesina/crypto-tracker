import React, { useState } from "react";
import millify from "millify";
import { useNavigate } from "react-router-dom";
import { useGetCoinsQuery } from "../../../services/cryptoApi";
import { LoaderOne } from "../../ui/loader";

const ITEMS_PER_PAGE = 10;

const CryptoSearch: React.FC = () => {
    const [offset, setOffset] = useState(0);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const { data, isFetching } = useGetCoinsQuery({
        offset: String(offset),
        limit: String(ITEMS_PER_PAGE),
    });

    const coins = data?.data?.coins || [];
    const total = Number(data?.data?.stats?.totalCoins) || 0;
    const totalPages = Math.ceil(total / ITEMS_PER_PAGE);
    const currentPage = offset / ITEMS_PER_PAGE + 1;

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    if (isFetching) {
        return (
            <div className="flex justify-center items-center h-40">
                <LoaderOne />
            </div>
        );
    }

    return (
        <div className="space-y-4 py-6">
            <input
                type="text"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setOffset(0);
                }}
                placeholder="Search coin..."
                className="p-2 w-full rounded bg-white text-black"
            />

            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse text-left">
                    <thead>
                    <tr className="border-b border-white/20">
                        <th className="p-2">#</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">24h Change</th>
                        <th className="p-2">Market Cap</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredCoins.map((coin) => (
                        <tr
                            key={coin.uuid}
                            onClick={() => navigate(`/coin/${coin.uuid}`)}
                            className="border-b border-white/10 cursor-pointer hover:bg-white/10"
                        >
                            <td className="p-2">{coin.rank}</td>
                            <td className="p-2 flex items-center gap-2 max-w-[200px] truncate">
                                <img
                                    src={coin.iconUrl}
                                    alt={coin.name}
                                    width={24}
                                    height={24}
                                    className="rounded-full flex-shrink-0 object-contain"
                                />
                                <div className="truncate">
                                    {coin.name}{" "}
                                    <span className="text-gray-500">({coin.symbol})</span>
                                </div>
                            </td>
                            <td className="p-2">${millify(Number(coin.price))}</td>
                            <td className="p-2">{coin.change}%</td>
                            <td className="p-2">${millify(Number(coin.marketCap))}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center">
                <button
                    onClick={() => setOffset((prev) => Math.max(0, prev - ITEMS_PER_PAGE))}
                    disabled={offset === 0}
                    className="px-4 py-2 bg-white text-black rounded disabled:opacity-50"
                >
                    Prev
                </button>
                <span>
          Page {currentPage} of {totalPages}
        </span>
                <button
                    onClick={() =>
                        setOffset((prev) =>
                            Math.min(prev + ITEMS_PER_PAGE, (totalPages - 1) * ITEMS_PER_PAGE)
                        )
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-white text-black rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CryptoSearch;
