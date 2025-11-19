import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header className="flex items-center justify-between p-6 border-b border-surface-light">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search Ticker..."
            className="w-64 rounded-md border-none bg-surface-light py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="relative text-gray-400 hover:text-white">
            <Bell className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
          </button>
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
