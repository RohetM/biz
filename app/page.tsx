import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BarChart3, Users, Lightbulb, ArrowRight, Database, Cloud, Server, User, Globe, Laptop, Cpu, Layers } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">BizPilot</div>
          <Link href="/dashboard">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Launch Dashboard
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-4">
            <p className="text-blue-400 font-medium text-sm uppercase tracking-wide">
              AI-Powered Business Intelligence
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
              Your AI Operations Assistant for Small Business Growth
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto text-balance">
              Understand customers, discover revenue opportunities, and make smarter decisions from your business data.
            </p>
          </div>

          <Link href="/dashboard">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-base py-6 px-8 group">
              Launch Dashboard
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Powerful Features</h2>
            <p className="text-slate-400">Everything you need to understand and grow your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: 'Revenue Analytics',
                description:
                  'Track trends, identify patterns, and optimize your pricing strategy with real-time insights.',
              },
              {
                icon: Users,
                title: 'Customer Intelligence',
                description:
                  'Understand buying patterns, predict churn, and identify your most valuable customers.',
              },
              {
                icon: Lightbulb,
                title: 'AI Recommendations',
                description:
                  'Get actionable recommendations to re-engage customers and maximize revenue opportunities.',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-lg text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Production Architecture Section */}
      <section className="relative py-20 border-t border-slate-700/50 bg-gradient-to-b from-transparent to-slate-900/40">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Production Architecture</h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              Scalable, high-performance hybrid infrastructure leveraging Vercel Edge and AWS cloud services.
            </p>
          </div>

          <div className="relative flex flex-col items-center">
            {/* Step 1: Business User */}
            <div className="w-full max-w-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <User className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white text-base">Business User</h3>
                  <p className="text-slate-400 text-sm">Accesses analytics dashboard and AI recommendations</p>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="my-3 flex flex-col items-center">
              <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-indigo-500"></div>
              <span className="text-indigo-400 text-xs -mt-1">▼</span>
            </div>

            {/* Step 2: Vercel Edge Network */}
            <div className="w-full max-w-xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/30 hover:bg-slate-800/80 transition-all rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white text-base">Vercel Edge Network</h3>
                  <p className="text-slate-400 text-sm">Global CDN routing traffic to the closest edge servers</p>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="my-3 flex flex-col items-center">
              <div className="w-0.5 h-8 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
              <span className="text-purple-400 text-xs -mt-1">▼</span>
            </div>

            {/* Step 3: Next.js Application (Vercel v0) */}
            <div className="w-full max-w-xl bg-slate-800/50 border border-slate-700 hover:border-purple-500/30 hover:bg-slate-800/80 transition-all rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                  <Laptop className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white text-base">Next.js Application (Vercel v0)</h3>
                  <p className="text-slate-400 text-sm">Highly optimized UI built with AI-assisted design components</p>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="my-3 flex flex-col items-center">
              <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-pink-500"></div>
              <span className="text-pink-400 text-xs -mt-1">▼</span>
            </div>

            {/* Step 4: Next.js API Routes */}
            <div className="w-full max-w-xl bg-slate-800/50 border border-slate-700 hover:border-pink-500/30 hover:bg-slate-800/80 transition-all rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-pink-500/10 rounded-lg text-pink-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white text-base">Next.js API Routes</h3>
                  <p className="text-slate-400 text-sm">Serverless backend routes processing queries and request logic</p>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="my-3 flex flex-col items-center">
              <div className="w-0.5 h-8 bg-gradient-to-b from-pink-500 to-amber-500"></div>
              <span className="text-amber-400 text-xs -mt-1">▼</span>
            </div>

            {/* Step 5: Amazon Aurora PostgreSQL */}
            <div className="w-full max-w-xl bg-slate-800/50 border border-slate-700 hover:border-amber-500/30 hover:bg-slate-800/80 transition-all rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-500/10 rounded-lg text-amber-400">
                  <Database className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white text-base">Database: Amazon Aurora PostgreSQL</h3>
                  <p className="text-slate-400 text-sm">Scalable enterprise-grade database cluster for data persistence</p>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="my-3 flex flex-col items-center">
              <div className="w-0.5 h-8 bg-gradient-to-b from-amber-500 to-emerald-500"></div>
              <span className="text-emerald-400 text-xs -mt-1">▼</span>
            </div>

            {/* Step 6: Business Data Layer */}
            <div className="w-full max-w-xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/30 hover:bg-slate-800/80 transition-all rounded-xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-4 border-b border-slate-700/50 pb-3 text-left">
                  <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base">Business Data Layer</h3>
                    <p className="text-slate-400 text-sm">Structured schemas holding the application dataset</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                  {[
                    { name: 'Customers', desc: 'CRM & risk profiles' },
                    { name: 'Orders', desc: 'Sales & transactions' },
                    { name: 'Products', desc: 'Inventory tracking' },
                    { name: 'AI Insights', desc: 'Optimization data' },
                  ].map((subItem) => (
                    <div
                      key={subItem.name}
                      className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-3 text-center hover:bg-slate-950/40 transition-all"
                    >
                      <div className="font-medium text-emerald-400 text-sm mb-0.5">{subItem.name}</div>
                      <div className="text-slate-500 text-xs">{subItem.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-20 border-t border-slate-700/50">
        <div className="max-w-2xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Scale Your Business?</h2>
            <p className="text-slate-400">
              Join small business owners who are using BizPilot AI to make data-driven decisions.
            </p>
          </div>
          <Link href="/dashboard">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-base py-6 px-8">
              Start Free Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>BizPilot AI © 2024. Built for small business success.</p>
        </div>
      </footer>
    </div>
  );
}
