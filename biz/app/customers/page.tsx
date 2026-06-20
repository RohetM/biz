'use client';

import Link from 'next/link';
import { CustomerTable } from '@/components/customer-table';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon" className="text-blue-400 hover:bg-blue-500/10">
                <Home className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white">Customer Analytics</h1>
              <p className="text-sm text-slate-400">Manage and analyze your customer database</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <CustomerTable />
      </main>
    </div>
  );
}
