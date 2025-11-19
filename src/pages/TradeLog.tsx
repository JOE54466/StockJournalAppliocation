import React from 'react';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { trades } from '../data/mockData';
import { formatCurrency } from '../lib/utils';
import { cn } from '../lib/utils';

const TradeLog: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Trade Log</CardTitle>
          <button className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500">
            <PlusCircle className="h-5 w-5" />
            Add Trade
          </button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-surface-light text-gray-400">
                <tr>
                  <th className="p-3">Date</th>
                  <th className="p-3">Ticker</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Total Value</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {trades.map((trade) => (
                  <tr key={trade.id} className="border-b border-surface-light last:border-0 hover:bg-surface-light">
                    <td className="p-3 text-gray-400">{trade.date.toLocaleDateString()}</td>
                    <td className="p-3 font-medium text-white">{trade.ticker}</td>
                    <td className={cn("p-3 font-semibold", trade.type === 'BUY' ? 'text-green-accent' : 'text-red-accent')}>{trade.type}</td>
                    <td className="p-3">{trade.quantity}</td>
                    <td className="p-3">{formatCurrency(trade.price)}</td>
                    <td className="p-3">{formatCurrency(trade.price * trade.quantity)}</td>
                    <td className="p-3">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${trade.status === 'OPEN' ? 'bg-blue-900 text-blue-300' : 'bg-gray-700 text-gray-300'}`}>
                        {trade.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="text-gray-400 hover:text-primary"><Edit className="h-4 w-4" /></button>
                        <button className="text-gray-400 hover:text-red-accent"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TradeLog;
