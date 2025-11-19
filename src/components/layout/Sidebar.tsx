import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CandlestickChart, List, BarChart, Settings, LogOut } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/trade-log', icon: List, label: 'Trade Log' },
  { to: '/watchlist', icon: CandlestickChart, label: 'Watchlist' },
  { to: '/performance', icon: BarChart, label: 'Performance' },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 flex-shrink-0 bg-surface p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-10 px-2">
          <CandlestickChart className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold text-on-surface">Stock Journal</h1>
        </div>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-400 hover:bg-surface-light hover:text-white'
                )
              }
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-2">
         <NavLink
            to="/settings"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 transition-colors hover:bg-surface-light hover:text-white"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </NavLink>
          <button
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 transition-colors hover:bg-surface-light hover:text-white"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
      </div>
    </aside>
  );
};

export default Sidebar;
