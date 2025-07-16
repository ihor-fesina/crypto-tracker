// src/components/StatisticSection.tsx

import React from 'react';
import StatisticCard from './StatisticCard';
import type { MarketStats, Stats } from '../types.ts';
import { getStatValue } from '../utils/format.ts';

interface StatisticSectionProps {
    stats: Stats;
}

interface StatItem {
    label: string;
    icon: string;
    getValue: (stats: MarketStats) => string;
}

const statsList: StatItem[] = [
    { label: 'Total coins', icon: '🪙', getValue: (s) => getStatValue(s.totalCoins, 'numeric') },
    { label: 'Total markets', icon: '📈', getValue: (s) => getStatValue(s.totalMarkets, 'numeric') },
    { label: 'Total exchanges', icon: '🏦', getValue: (s) => getStatValue(s.totalExchanges, 'numeric') },
    { label: 'Total market cap', icon: '💰', getValue: (s) => getStatValue(s.totalMarketCap, 'numeric') },
    { label: '24h volume', icon: '🔄', getValue: (s) => getStatValue(s.total24hVolume, 'numeric') },
    { label: 'BTC dominance', icon: '🟠', getValue: (s) => getStatValue(s.btcDominance, 'percent') },
    { label: 'BTC market cap', icon: '🟡', getValue: (s) => getStatValue(s.btcMarketCap, 'numeric') },
];

const StatisticSection: React.FC<StatisticSectionProps> = ({ stats }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
        {statsList.map(({ label, icon, getValue }) => (
            <StatisticCard
                key={label}
                icon={icon}
                label={label}
                value={getValue(stats)}
            />
        ))}
    </div>
);

export default StatisticSection;
