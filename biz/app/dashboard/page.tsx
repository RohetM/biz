'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Dashboard } from '@/components/dashboard';
import { AIAssistant } from '@/components/ai-assistant';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Users, Brain, Home } from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const navigation = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'insights', label: 'AI Insights', icon: Brain },
    { id: 'customers', label: 'Customers', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-background/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Button variant="ghost" size="icon" className="text-blue-400 hover:bg-blue-500/10">
              <Home className="w-5 h-5" />
            </Button>
            <span className="text-xl font-bold text-white">BizPilot Dashboard</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className="fixed left-0 top-20 h-[calc(100vh-80px)] w-64 bg-slate-800/50 border-r border-slate-700/50 overflow-y-auto">
          <nav className="space-y-2 p-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 ml-64 px-6 py-8">
          <div className="max-w-6xl">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                  <p className="text-slate-400">Welcome back! Here&apos;s your business overview.</p>
                </div>
                <Dashboard />
              </div>
            )}

            {activeTab === 'insights' && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">AI Insights</h1>
                  <p className="text-slate-400">
                    Smart recommendations to grow your business
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <AIAssistant />
                  <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 border border-slate-700 space-y-4">
                    <h3 className="font-semibold text-white text-lg">How AI Recommendations Work</h3>
                    <div className="space-y-3 text-sm text-slate-300">
                      <p>
                        ✓ <strong>Analyzes</strong> your customer purchase history and patterns
                      </p>
                      <p>
                        ✓ <strong>Identifies</strong> customers at risk of churn based on inactivity
                      </p>
                      <p>
                        ✓ <strong>Calculates</strong> lifetime value and revenue potential
                      </p>
                      <p>
                        ✓ <strong>Recommends</strong> personalized actions to maximize revenue
                      </p>
                      <p>
                        ✓ <strong>Prioritizes</strong> high-impact opportunities first
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'customers' && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">Customers</h1>
                  <p className="text-slate-400">Manage and analyze your customer database</p>
                </div>
                <div className="rounded-xl bg-slate-800/50 border border-slate-700 p-6">
                  {/* Lazy load the customer table only when needed */}
                  <CustomerTableLazy />
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function CustomerTableLazy() {
  const { CustomerTable } = require('@/components/customer-table');
  return <CustomerTable />;
}
