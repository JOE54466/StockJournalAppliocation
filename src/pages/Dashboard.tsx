import React from 'react';
import { ArrowUpRight, ArrowDownRight, CheckCircle, XCircle, Scale } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import PortfolioChart from '../components/charts/PortfolioChart';
import { trades, performanceMetrics } from '../data/mockData';
import { formatCurrency, formatPercentage } from '../lib/utils';
import { cn } from '../lib/utils';

const MetricCard: React.FC<{ title: string; value: string; change?: number; icon: React.ElementType }> = ({ title, value, change, icon: Icon }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-gray-400">{title}</CardTitle>
      <Icon className="h-5 w-5 text-gray-500" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-white">{value}</div>
      {change !== undefined && (
        <p className={cn("text-xs", change >= 0 ? "text-green-accent" : "text-red-accent")}>
          {change >= 0 ? '+' : ''}{formatPercentage(change)} from last month
        </p>
      )}
    </CardContent>
  </Card>
);

const RecentTrades: React.FC = () => (
  <Card className="col-span-1 lg:col-span-3">
    <CardHeader>
      <CardTitle>Recent Trades</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-surface-light text-gray-400">
            <tr>
              <th className="p-3">Ticker</th>
              <th className="p-3">Type</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Price</th>
              <th className="p-3">Date</th>
              <th className="p-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {trades.slice(0, 5).map((trade) => (
              <tr key={trade.id} className="border-b border-surface-light last:border-0 hover:bg-surface-light">
                <td className="p-3 font-medium text-white">{trade.ticker}</td>
                <td className={cn("p-3 font-semibold", trade.type === 'BUY' ? 'text-green-accent' : 'text-red-accent')}>{trade.type}</td>
                <td className="p-3">{trade.quantity}</td>
                <td className="p-3">{formatCurrency(trade.price)}</td>
                <td className="p-3 text-gray-400">{trade.date.toLocaleDateString()}</td>
                <td className="p-3 text-right">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${trade.status === 'OPEN' ? 'bg-blue-900 text-blue-300' : 'bg-gray-700 text-gray-300'}`}>
                    {trade.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CardContent>
  </Card>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard title="Total P&L" value={formatCurrency(performanceMetrics.totalPL)} change={0.052} icon={performanceMetrics.totalPL > 0 ? ArrowUpRight : ArrowDownRight} />
        <MetricCard title="Win Rate" value={formatPercentage(performanceMetrics.winRate)} change={-0.015} icon={CheckCircle} />
        <MetricCard title="Total Trades" value={String(performanceMetrics.totalTrades)} icon={Scale} />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Value</CardTitle>
        </CardHeader>
        <CardContent>
          <PortfolioChart />
        </CardContent>
      </Card>
      <RecentTrades />
    </div>
  );
};

export default Dashboard;
