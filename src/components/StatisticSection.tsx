import React from 'react';
import StatisticCard from './StatisticCard';
import type {Stats} from "../types.ts";
import {getStatValue} from "../utils/format.ts";

interface StatisticSectionProps {
  stats: Stats
}

const statsList = [
  {key: 'totalCoins', label: 'Total coins', icon: '🪙'},
  {key: 'totalMarkets', label: 'Total markets', icon: '📈'},
  {key: 'totalExchanges', label: 'Total exchanges', icon: '🏦'},
  {key: 'totalMarketCap', label: 'Total market cap', icon: '💰'},
  {key: 'total24hVolume', label: '24h volume', icon: '🔄'},
  {key: 'btcDominance', label: 'BTC dominance', icon: '🟠'},
  {key: 'btcMarketCap', label: 'BTC market cap', icon: '🟡'},
];

const StatisticSection: React.FC<StatisticSectionProps> = ({ stats }) => (
  <div className="grid grid-cols-3 sm:grid-cols-7 gap-6 mb-8">
    {statsList.map(({key, label, icon}) => (
      <StatisticCard
        key={key}
        icon={icon}
        label={label}
        value={getStatValue(stats, key as keyof Stats)}
      />
    ))}
  </div>
);

export default StatisticSection; 