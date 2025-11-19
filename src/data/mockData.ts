import { faker } from '@faker-js/faker';

export interface Trade {
  id: string;
  ticker: string;
  type: 'BUY' | 'SELL';
  quantity: number;
  price: number;
  date: Date;
  status: 'OPEN' | 'CLOSED';
}

export interface PortfolioDataPoint {
  date: string;
  value: number;
}

export interface WatchlistItem {
  ticker: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
}

// Define a list of realistic stock symbols to avoid faker API breaking changes
const stockSymbols = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA', 'NVDA', 'META', 'JPM', 'V', 'JNJ', 'PYPL', 'DIS', 'NFLX', 'PFE', 'KO'];

const generateTrades = (count: number): Trade[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    ticker: faker.helpers.arrayElement(stockSymbols),
    type: faker.helpers.arrayElement(['BUY', 'SELL']),
    quantity: faker.number.int({ min: 10, max: 500 }),
    price: parseFloat(faker.finance.amount({ min: 50, max: 500 })),
    date: faker.date.past({ years: 2 }),
    status: faker.helpers.arrayElement(['OPEN', 'CLOSED']),
  }));
};

const generatePortfolioHistory = (days: number): PortfolioDataPoint[] => {
  let value = 100000;
  return Array.from({ length: days }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - i - 1));
    value *= 1 + (faker.number.float({ min: -0.02, max: 0.025 }));
    return {
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: parseFloat(value.toFixed(2)),
    };
  });
};

const generateWatchlist = (count: number): WatchlistItem[] => {
    // Shuffle the available symbols and take the first 'count' to guarantee uniqueness.
    const uniqueSymbols = faker.helpers.shuffle(stockSymbols).slice(0, count);

    return uniqueSymbols.map((ticker) => {
        const price = faker.number.float({ min: 20, max: 1000, precision: 2 });
        const change = faker.number.float({ min: -5, max: 5, precision: 2 });
        return {
            ticker: ticker,
            price,
            change,
            changePercent: (change / price),
            volume: `${(faker.number.int({ min: 1, max: 50 }) / 10).toFixed(1)}M`
        };
    });
};


export const trades: Trade[] = generateTrades(50);
export const portfolioHistory: PortfolioDataPoint[] = generatePortfolioHistory(90);
export const watchlist: WatchlistItem[] = generateWatchlist(10);

export const performanceMetrics = {
  totalPL: 15230.45,
  winRate: 0.68,
  totalTrades: 112,
  bestTrade: 2150.80,
  worstTrade: -850.20,
  avgReturn: 135.98
};
