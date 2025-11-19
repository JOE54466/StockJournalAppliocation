import React from 'react';
import { Star, PlusCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { watchlist } from '../data/mockData';
import { formatCurrency, formatPercentage } from '../lib/utils';
import { cn } from '../lib/utils';

const Watchlist: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>My Watchlist</CardTitle>
          <button className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500">
            <PlusCircle className="h-5 w-5" />
            Add Ticker
          </button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {watchlist.map((item) => (
              <Card key={item.ticker} className="transition-all hover:shadow-lg hover:shadow-primary/20">
                <CardHeader className="flex-row items-center justify-between pb-2">
                  <CardTitle className="text-base">{item.ticker}</CardTitle>
                  <Star className="h-5 w-5 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{formatCurrency(item.price)}</p>
                  <div className="flex items-center text-sm">
                    <p className={cn(item.change >= 0 ? 'text-green-accent' : 'text-red-accent')}>
                      {item.change >= 0 ? '+' : ''}{formatCurrency(item.change)}
                    </p>
                    <p className={cn("ml-2", item.change >= 0 ? 'text-green-accent' : 'text-red-accent')}>
                      ({formatPercentage(item.changePercent)})
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Vol: {item.volume}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Watchlist;
