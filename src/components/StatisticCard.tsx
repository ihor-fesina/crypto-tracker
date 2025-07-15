import React from 'react';

interface StatisticCardProps {
    icon: string;
    label: string;
    value: string | number;
}

const StatisticCard: React.FC<StatisticCardProps> = ({icon, label, value}) => (
    <div className="flex flex-col items-center">
        <div className="text-3xl">{icon}</div>
        <div className="text-gray-500 text-sm text-center">{label}</div>
        <div className="text-xl font-semibold text-center">{value}</div>
    </div>
);

export default StatisticCard; 