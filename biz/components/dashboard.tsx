'use client';

import { useState, useEffect } from 'react';
import { getRevenueData, getCustomerGrowthData, getBusinessMetrics } from '@/lib/aurora-data';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Zap, Activity } from 'lucide-react';

export function Dashboard() {
  const [metrics, setMetrics] = useState<any[]>([]);
  const [revenueData, setRevenueData] = useState<any[]>([]);
  const [customerGrowthData, setCustomerGrowthData] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const [businessMetrics, revData, custGrowthData] = await Promise.all([
        getBusinessMetrics(),
        getRevenueData(),
        getCustomerGrowthData(),
      ]);

      setMetrics([
        {
          label: 'Monthly Revenue',
          value: businessMetrics.monthlyRevenue.formatted,
          trend: businessMetrics.monthlyRevenue.trend,
          icon: TrendingUp,
          positive: true,
        },
        {
          label: 'Total Customers',
          value: businessMetrics.totalCustomers.formatted,
          trend: businessMetrics.totalCustomers.trend,
          icon: Users,
          positive: true,
        },
        {
          label: 'Total Orders',
          value: businessMetrics.totalOrders.formatted,
          trend: businessMetrics.totalOrders.trend,
          icon: Activity,
          positive: true,
        },
        {
          label: 'AI Opportunities',
          value: businessMetrics.aiOpportunities.formatted,
          trend: businessMetrics.aiOpportunities.trend,
          icon: Zap,
          positive: false,
        },
      ]);
      setRevenueData(revData);
      setCustomerGrowthData(custGrowthData);
    }

    loadData();
  }, []);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.label}
              className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-6 hover:border-slate-600 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-400">{metric.label}</p>
                  <p className="text-2xl font-bold text-white mt-2">{metric.value}</p>
                </div>
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <div
                className={`text-xs font-medium ${
                  metric.positive ? 'text-green-400' : 'text-slate-400'
                }`}
              >
                {metric.trend}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-lg bg-slate-800/50 border border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#334155"
                vertical={false}
              />
              <XAxis dataKey="month" stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #475569',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#e2e8f0' }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                dot={{ fill: '#3b82f6', r: 4 }}
                activeDot={{ r: 6 }}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-lg bg-slate-800/50 border border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Customer Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={customerGrowthData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#334155"
                vertical={false}
              />
              <XAxis dataKey="month" stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #475569',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#e2e8f0' }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8b5cf6"
                dot={{ fill: '#8b5cf6', r: 4 }}
                activeDot={{ r: 6 }}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
