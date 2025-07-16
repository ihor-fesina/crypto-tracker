import React, { useState, useMemo } from "react";
import millify from "millify";
import type { CoinDetailed } from "../../../types.ts";
import { useNavigate } from "react-router-dom";

interface Props {
    coinsList: CoinDetailed[];
}

const ITEMS_PER_PAGE = 10;

const CryptoSearch: React.FC<Props> = ({ coinsList }) => {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    const filtered = useMemo(
        () =>
            coinsList.filter((coin) =>
                coin.name.toLowerCase().includes(search.toLowerCase())
            ),
        [coinsList, search]
    );

    const paginated = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;
        return filtered.slice(start, start + ITEMS_PER_PAGE);
    }, [filtered, page]);

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

    return (
        <div className="space-y-4 py-6">
            <input
                type="text"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
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
                    {paginated.map((coin) => (
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
                                    {coin.name} <span className="text-gray-500">({coin.symbol})</span>
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
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-4 py-2 bg-white text-black rounded disabled:opacity-50"
                >
                    Prev
                </button>
                <span>
          Page {page} of {totalPages}
        </span>
                <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-4 py-2 bg-white text-black rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CryptoSearch;
