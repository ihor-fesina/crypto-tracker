import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { LoaderOne } from '../../ui/loader.tsx';
import type { CoinHistoryApiResponse } from '../../../types.ts';

interface CoinChartProps {
  history: CoinHistoryApiResponse | undefined;
  isFetching: boolean;
}

const CoinChart: React.FC<CoinChartProps> = ({ history, isFetching }) => {
  if (isFetching) {
    return (
        <div className="flex justify-center items-center h-40">
          <LoaderOne />
        </div>
    );
  }

  const coinHistory = history?.data?.history || [];

  const data = coinHistory.map((point) => ({
    date: new Date(point.timestamp * 1000).toLocaleDateString(),
    price: Number(point.price),
  }));

  return (
      <div className="w-full h-80 bg-white rounded-xl shadow p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Price Chart (USD)</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
                dataKey="date"
                tick={{ fontSize: 10 }}
                stroke="#888"
            />
            <YAxis
                tickFormatter={(value) => `$${value}`}
                stroke="#888"
            />
            <Tooltip
                contentStyle={{ backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: 'none' }}
                formatter={(value: number) => `$${value.toFixed(2)}`}
            />
            <Line
                type="monotone"
                dataKey="price"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
  );
};

export default CoinChart;
