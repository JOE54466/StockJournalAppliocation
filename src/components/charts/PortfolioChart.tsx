import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { portfolioHistory } from '../../data/mockData';
import { formatCurrency } from '../../lib/utils';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md border border-surface-light bg-surface p-2 text-sm shadow-lg">
        <p className="label text-gray-400">{`${label}`}</p>
        <p className="intro text-white">{`Value: ${formatCurrency(payload[0].value)}`}</p>
      </div>
    );
  }
  return null;
};

const PortfolioChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={portfolioHistory} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1E90FF" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#1E90FF" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value: number) => `$${(value / 1000)}k`} />
        <CartesianGrid strokeDasharray="3 3" stroke="#333333" />
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" dataKey="value" stroke="#1E90FF" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PortfolioChart;
