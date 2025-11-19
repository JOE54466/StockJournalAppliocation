import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const TradeLog = lazy(() => import('./pages/TradeLog'));
const Watchlist = lazy(() => import('./pages/Watchlist'));
const Performance = lazy(() => import('./pages/Performance'));

const routeTitles: { [key: string]: string } = {
  '/': 'Dashboard',
  '/trade-log': 'Trade Log',
  '/watchlist': 'Watchlist',
  '/performance': 'Performance',
  '/settings': 'Settings',
};

const LoadingFallback: React.FC = () => (
  <div className="flex h-full w-full items-center justify-center">
    <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
  </div>
);

const PageContent: React.FC = () => {
    const location = useLocation();
    const title = routeTitles[location.pathname] || 'Stock Journal';

    return (
        <div className="flex flex-1 flex-col">
            <Header title={title} />
            <main className="flex-1 overflow-y-auto">
                <Suspense fallback={<LoadingFallback />}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/trade-log" element={<TradeLog />} />
                        <Route path="/watchlist" element={<Watchlist />} />
                        <Route path="/performance" element={<Performance />} />
                        <Route path="/settings" element={<div className="p-6">Settings Page</div>} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    );
}

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-background text-on-surface">
        <Sidebar />
        <PageContent />
      </div>
    </Router>
  );
}

export default App;
