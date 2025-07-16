import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCoinDetailQuery } from '../services/cryptoApi';
import { LoaderOne } from '../components/ui/loader';
import { getStatValue } from '../utils/format';
import type {CoinDetail} from "../types.ts";

const coinFields = [
  {
    key: 'price',
    label: 'Price',
    icon: '💲',
    getValue: (coin:CoinDetail) => getStatValue(coin.price, 'numeric'),
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
        getStatValue(coin?.allTimeHigh?.price, 'numeric')
  },
];

const Coin: React.FC = () => {
  const { coinId } = useParams<{ coinId: string }>();
  const { data, isFetching } = useGetCoinDetailQuery(coinId!, { skip: !coinId });

  if (!coinId)
    return (
      <div className="flex items-center justify-center h-64 text-xl text-red-500">
        Invalid coin id
      </div>
    );
  if (isFetching)
    return (
      <div className="flex items-center justify-center h-64">
        <LoaderOne />
      </div>
    );

  const coin = data?.data.coin;
  if (!coin)
    return (
      <div className="flex items-center justify-center h-64 text-xl text-gray-500">
        No data found
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md text-black">
      <div className="flex items-center mb-4">
        <img src={coin.iconUrl} alt={coin.name} className="w-12 h-12 mr-4" />
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
      <div className="grid grid-cols-2 gap-4 mb-4">
        {coinFields.map(({ key, label, icon, getValue }) => (
          <div key={key}>
            <div className="text-gray-500 text-xs flex items-center gap-1">
              {icon} {label}
            </div>
            <div className="font-mono text-lg">{getValue(coin)}</div>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <div className="text-gray-500 text-xs mb-1">Tags</div>
        <div className="flex flex-wrap gap-2">
          {coin.tags.map((tag: string) => (
            <span
              key={tag}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <div className="text-gray-500 text-xs mb-1">Description</div>
        <div
          className="text-gray-700 text-sm"
          dangerouslySetInnerHTML={{ __html: coin.description }}
        />
      </div>
      <div className="mb-4">
        <div className="text-gray-500 text-xs mb-1">Links</div>
        <ul className="list-disc list-inside text-sm">
          {coin.links.map((link: any) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {link.type}: {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="text-gray-500 text-xs mb-1">Supply</div>
        <div className="text-sm">
          <span className="font-semibold">Total:</span>{' '}
          {Number(coin.supply.total).toLocaleString()}
          <br />
          <span className="font-semibold">Circulating:</span>{' '}
          {Number(coin.supply.circulating).toLocaleString()}
          <br />
          <span className="font-semibold">Max:</span>{' '}
          {Number(coin.supply.max).toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default Coin;
 