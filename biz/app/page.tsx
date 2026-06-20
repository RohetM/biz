import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BarChart3, Users, Lightbulb, ArrowRight, Database, Cloud, Server } from 'lucide-react';

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

      {/* AWS Architecture Section */}
      <section className="relative py-20 border-t border-slate-700/50 bg-gradient-to-b from-transparent to-slate-900/20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Production-Ready Architecture</h2>
            <p className="text-slate-400">Scalable infrastructure built on AWS for enterprise reliability</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <div className="space-y-8">
              {/* Architecture Flow */}
              <div className="space-y-6">
                {[
                  {
                    layer: 'Frontend',
                    tech: 'Vercel v0 + Next.js App Router',
                    icon: Cloud,
                    description: 'Global edge network with automatic deployments',
                  },
                  {
                    layer: 'API Layer',
                    tech: 'Next.js API Routes',
                    icon: Server,
                    description: 'Serverless functions for business logic',
                  },
                  {
                    layer: 'Database',
                    tech: 'Amazon Aurora PostgreSQL',
                    icon: Database,
                    description: 'Multi-AZ relational database with automatic failover',
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index}>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-500/10 rounded-lg mt-1">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-baseline gap-2 mb-1">
                            <h4 className="font-semibold text-white">{item.layer}</h4>
                            <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                              {item.tech}
                            </span>
                          </div>
                          <p className="text-slate-400 text-sm">{item.description}</p>
                        </div>
                      </div>
                      {index < 2 && (
                        <div className="ml-8 mt-4 mb-4 h-8 border-l border-slate-600 flex justify-center">
                          <span className="text-slate-500">↓</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Data Sources */}
              <div className="pt-6 border-t border-slate-700">
                <h4 className="text-sm font-semibold text-slate-300 mb-3">Data & Capabilities</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  {['Customer Data', 'Orders & Transactions', 'Analytics', 'AI Insights'].map((item) => (
                    <div
                      key={item}
                      className="bg-slate-700/50 rounded p-3 text-sm text-slate-300 text-center"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Automatic Failover', desc: 'Multi-AZ Aurora ensures business continuity' },
              { title: 'Read Replicas', desc: 'Optimize analytics queries with dedicated read instances' },
              { title: 'Auto Scaling', desc: 'Performance Insights for monitoring and optimization' },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded p-4">
                <h4 className="font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-sm text-slate-400">{benefit.desc}</p>
              </div>
            ))}
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
