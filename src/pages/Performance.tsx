import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { performanceMetrics } from '../data/mockData';
import { formatCurrency } from '../lib/utils';

const monthlyPnl = [
  { name: 'Jan', pnl: 2300 },
  { name: 'Feb', pnl: -800 },
  { name: 'Mar', pnl: 4500 },
  { name: 'Apr', pnl: 1200 },
  { name: 'May', pnl: 3100 },
  { name: 'Jun', pnl: -500 },
];

const winLossData = [
  { name: 'Wins', value: Math.round(performanceMetrics.totalTrades * performanceMetrics.winRate) },
  { name: 'Losses', value: Math.round(performanceMetrics.totalTrades * (1 - performanceMetrics.winRate)) },
];

const COLORS = ['#22C55E', '#EF4444'];

const Performance: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center justify-center rounded-lg bg-surface-light p-4">
                <p className="text-sm text-gray-400">Best Trade P/L</p>
                <p className="text-2xl font-bold text-green-accent">{formatCurrency(performanceMetrics.bestTrade)}</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-surface-light p-4">
                <p className="text-sm text-gray-400">Worst Trade P/L</p>
                <p className="text-2xl font-bold text-red-accent">{formatCurrency(performanceMetrics.worstTrade)}</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-surface-light p-4">
                <p className="text-sm text-gray-400">Average Return</p>
                <p className="text-2xl font-bold text-white">{formatCurrency(performanceMetrics.avgReturn)}</p>
            </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly P&L</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyPnl}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" tickFormatter={(value) => formatCurrency(value)} />
                <Tooltip cursor={{fill: '#2A2A2A'}} contentStyle={{backgroundColor: '#1E1E1E', border: '1px solid #2A2A2A'}} />
                <Bar dataKey="pnl">
                  {monthlyPnl.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.pnl > 0 ? '#22C55E' : '#EF4444'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Win/Loss Ratio</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={winLossData} cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value" nameKey="name" label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                  {winLossData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{backgroundColor: '#1E1E1E', border: '1px solid #2A2A2A'}} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Performance;
