'use client';

import { useState, useEffect, useMemo } from 'react';
import { getCustomers, filterCustomersByRisk } from '@/lib/aurora-data';
import type { Customer } from '@/lib/aurora-data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

export function CustomerTable() {
  const [allCustomers, setAllCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [riskFilter, setRiskFilter] = useState<'all' | 'low' | 'medium' | 'high'>('all');

  useEffect(() => {
    async function loadCustomers() {
      const customers = await getCustomers();
      setAllCustomers(customers);
    }
    loadCustomers();
  }, []);

  const filteredCustomers = useMemo(() => {
    return allCustomers.filter((customer) => {
      const matchesSearch = customer.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRisk = riskFilter === 'all' || customer.riskScore === riskFilter;
      return matchesSearch && matchesRisk;
    });
  }, [allCustomers, searchTerm, riskFilter]);

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case 'high':
        return 'bg-red-500/10 text-red-400 border border-red-500/20';
      case 'medium':
        return 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20';
      case 'low':
        return 'bg-green-500/10 text-green-400 border border-green-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border border-slate-500/20';
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
          <Input
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button
            variant={riskFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setRiskFilter('all')}
            size="sm"
            className={
              riskFilter === 'all'
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'border-slate-600 text-slate-300 hover:bg-slate-700'
            }
          >
            <Filter className="w-4 h-4 mr-2" />
            All
          </Button>
          {['low', 'medium', 'high'].map((risk) => (
            <Button
              key={risk}
              variant={riskFilter === risk ? 'default' : 'outline'}
              onClick={() => setRiskFilter(risk as typeof riskFilter)}
              size="sm"
              className={
                riskFilter === risk
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'border-slate-600 text-slate-300 hover:bg-slate-700'
              }
            >
              {risk.charAt(0).toUpperCase() + risk.slice(1)} Risk
            </Button>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-800/50 border-b border-slate-700">
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">
                  Customer Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">
                  Last Purchase
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">
                  Lifetime Value
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">
                  Risk Level
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">
                  AI Recommendation
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b border-slate-700 hover:bg-slate-800/30 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-white">
                    {customer.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">
                    {customer.lastPurchaseDate}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-200">
                    {customer.valueFormatted}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getRiskBadgeColor(
                        customer.riskScore
                      )}`}
                    >
                      {customer.riskScore.charAt(0).toUpperCase() + customer.riskScore.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">
                    {customer.recommendation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-sm text-slate-400">
        Showing {filteredCustomers.length} of {allCustomers.length} customers
      </p>
    </div>
  );
}
