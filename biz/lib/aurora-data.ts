/**
 * Amazon Aurora PostgreSQL Data Access Layer
 * 
 * This module represents the production data layer for BizPilot AI.
 * Currently using mock data to demonstrate schema design.
 * 
 * Production Implementation:
 * Replace these functions with actual Amazon Aurora PostgreSQL queries using:
 * - pg (node-postgres) library
 * - Connection pooling via RDS Proxy
 * - Parameterized queries for security
 * 
 * Aurora Benefits Used:
 * - ACID transactions for consistent business data
 * - Multi-AZ automatic failover for reliability
 * - Read replicas for analytics queries
 * - Performance Insights for monitoring
 */

// ============================================
// DATABASE MODELS - Aurora PostgreSQL Tables
// ============================================

/**
 * Customer Table Schema
 * Stores retail customers, restaurants, service companies, agencies
 */
export type Customer = {
  id: string;
  businessId: string;
  name: string;
  industry: string;
  email: string;
  lastPurchaseDate: string;
  lastPurchaseDaysAgo: number;
  lifetimeValue: number;
  valueFormatted: string;
  riskScore: 'low' | 'medium' | 'high';
  recommendation: string;
  createdAt: string;
  updatedAt: string;
};

/**
 * Order Table Schema
 * Records all customer transactions
 */
export type Order = {
  id: string;
  customerId: string;
  customerName: string;
  amount: number;
  category: string;
  createdAt: string;
};

/**
 * Product Table Schema
 * Inventory and reorder management
 */
export type Product = {
  id: string;
  name: string;
  stockQuantity: number;
  reorderLevel: number;
  category: string;
  lastRestocked: string;
};

/**
 * Business Insight Table Schema
 * AI-generated recommendations and insights
 */
export type BusinessInsight = {
  id: string;
  customerId: string;
  customerName: string;
  recommendation: string;
  priority: 'low' | 'medium' | 'high';
  action?: string;
  createdAt: string;
  actionTaken?: boolean;
};

export type DashboardMetrics = {
  monthlyRevenue: {
    value: number;
    formatted: string;
    trend: string;
    trendPositive: boolean;
  };
  totalCustomers: {
    value: number;
    formatted: string;
    trend: string;
    trendPositive: boolean;
  };
  totalOrders: {
    value: number;
    formatted: string;
    trend: string;
    trendPositive: boolean;
  };
  aiOpportunities: {
    value: number;
    formatted: string;
    trend: string;
    trendPositive: boolean;
  };
};

// ============================================
// MOCK DATA - Simulating Aurora PostgreSQL
// ============================================

const mockCustomers: Customer[] = [
  {
    id: '1',
    businessId: 'biz_001',
    name: 'ABC Traders',
    industry: 'Retail',
    email: 'contact@abctraders.com',
    lastPurchaseDate: '2024-05-06',
    lastPurchaseDaysAgo: 45,
    lifetimeValue: 450000,
    valueFormatted: '₹4.5L',
    riskScore: 'high',
    recommendation: 'Send personalized reorder message',
    createdAt: '2023-01-15',
    updatedAt: '2024-06-20',
  },
  {
    id: '2',
    businessId: 'biz_001',
    name: 'Ravi Enterprises',
    industry: 'Restaurant',
    email: 'info@ravienterprises.com',
    lastPurchaseDate: '2024-06-10',
    lastPurchaseDaysAgo: 10,
    lifetimeValue: 200000,
    valueFormatted: '₹2L',
    riskScore: 'low',
    recommendation: 'No action needed',
    createdAt: '2023-03-20',
    updatedAt: '2024-06-20',
  },
  {
    id: '3',
    businessId: 'biz_001',
    name: 'Kumar & Co',
    industry: 'Service',
    email: 'sales@kumarandco.com',
    lastPurchaseDate: '2024-05-23',
    lastPurchaseDaysAgo: 28,
    lifetimeValue: 350000,
    valueFormatted: '₹3.5L',
    riskScore: 'medium',
    recommendation: 'Create personalized bulk discount offer',
    createdAt: '2023-02-10',
    updatedAt: '2024-06-20',
  },
  {
    id: '4',
    businessId: 'biz_001',
    name: 'Tech Solutions Ltd',
    industry: 'Agency',
    email: 'hello@techsolutions.com',
    lastPurchaseDate: '2024-06-17',
    lastPurchaseDaysAgo: 3,
    lifetimeValue: 500000,
    valueFormatted: '₹5L',
    riskScore: 'low',
    recommendation: 'Premium upsell opportunity',
    createdAt: '2023-04-05',
    updatedAt: '2024-06-20',
  },
  {
    id: '5',
    businessId: 'biz_001',
    name: 'Retail Group',
    industry: 'Retail',
    email: 'procurement@retailgroup.com',
    lastPurchaseDate: '2024-04-21',
    lastPurchaseDaysAgo: 60,
    lifetimeValue: 250000,
    valueFormatted: '₹2.5L',
    riskScore: 'high',
    recommendation: 'Urgent re-engagement campaign needed',
    createdAt: '2023-05-12',
    updatedAt: '2024-06-20',
  },
  {
    id: '6',
    businessId: 'biz_001',
    name: 'Local Stores Inc',
    industry: 'Retail',
    email: 'orders@localstores.com',
    lastPurchaseDate: '2024-06-15',
    lastPurchaseDaysAgo: 5,
    lifetimeValue: 180000,
    valueFormatted: '₹1.8L',
    riskScore: 'low',
    recommendation: 'Cross-sell complementary products',
    createdAt: '2023-06-08',
    updatedAt: '2024-06-20',
  },
];

const mockOrders: Order[] = [
  { id: 'ord_1', customerId: '1', customerName: 'ABC Traders', amount: 125000, category: 'Bulk Order', createdAt: '2024-05-06' },
  { id: 'ord_2', customerId: '2', customerName: 'Ravi Enterprises', amount: 45000, category: 'Regular', createdAt: '2024-06-10' },
  { id: 'ord_3', customerId: '3', customerName: 'Kumar & Co', amount: 78000, category: 'Bulk Order', createdAt: '2024-05-23' },
  { id: 'ord_4', customerId: '4', customerName: 'Tech Solutions Ltd', amount: 95000, category: 'Premium', createdAt: '2024-06-17' },
  { id: 'ord_5', customerId: '5', customerName: 'Retail Group', amount: 112000, category: 'Bulk Order', createdAt: '2024-04-21' },
  { id: 'ord_6', customerId: '6', customerName: 'Local Stores Inc', amount: 52000, category: 'Regular', createdAt: '2024-06-15' },
];

const mockInsights: BusinessInsight[] = [
  {
    id: 'insight_1',
    customerId: '1',
    customerName: 'ABC Traders',
    recommendation: 'High-value customer at risk. Not purchased in 45 days despite ₹4.5L lifetime value.',
    priority: 'high',
    action: 'Send personalized reorder campaign',
    createdAt: '2024-06-20',
    actionTaken: false,
  },
  {
    id: 'insight_2',
    customerId: '3',
    customerName: 'Kumar & Co',
    recommendation: 'Consistent purchasing pattern detected. Ready for exclusive bulk discount.',
    priority: 'medium',
    action: 'Create premium offer',
    createdAt: '2024-06-20',
    actionTaken: false,
  },
  {
    id: 'insight_3',
    customerId: '5',
    customerName: 'Retail Group',
    recommendation: 'Churn risk critical. High-value customer inactive 60+ days.',
    priority: 'high',
    action: 'Urgent re-engagement needed',
    createdAt: '2024-06-20',
    actionTaken: false,
  },
];

// ============================================
// DATA ACCESS FUNCTIONS - Aurora Queries
// ============================================

/**
 * Fetch all customers from Aurora
 * Production: SELECT * FROM customers WHERE business_id = $1 ORDER BY created_at DESC
 */
export async function getCustomers(): Promise<Customer[]> {
  // Mock implementation - replace with Aurora query
  await new Promise(resolve => setTimeout(resolve, 100)); // Simulate network latency
  return mockCustomers;
}

/**
 * Fetch orders for analytics and trending
 * Production: SELECT * FROM orders WHERE business_id = $1 AND created_at >= NOW() - INTERVAL '6 months'
 */
export async function getOrders(): Promise<Order[]> {
  // Mock implementation - replace with Aurora query
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockOrders;
}

/**
 * Calculate dashboard metrics from Aurora aggregations
 * Production: Uses Aurora computed columns and views for performance
 * SELECT SUM(amount) as monthly_revenue, COUNT(DISTINCT customer_id) as customers, etc.
 */
export async function getBusinessMetrics(): Promise<DashboardMetrics> {
  await new Promise(resolve => setTimeout(resolve, 150));
  
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.amount, 0);
  const monthlyRevenue = totalRevenue; // Simplified for demo
  
  return {
    monthlyRevenue: {
      value: monthlyRevenue,
      formatted: `₹${(monthlyRevenue / 100000).toFixed(1)}L`,
      trend: '+12%',
      trendPositive: true,
    },
    totalCustomers: {
      value: mockCustomers.length,
      formatted: String(mockCustomers.length),
      trend: '+5%',
      trendPositive: true,
    },
    totalOrders: {
      value: mockOrders.length,
      formatted: String(mockOrders.length),
      trend: '+8%',
      trendPositive: true,
    },
    aiOpportunities: {
      value: mockInsights.filter(i => i.priority === 'high').length,
      formatted: String(mockInsights.filter(i => i.priority === 'high').length),
      trend: 'Active',
      trendPositive: false,
    },
  };
}

/**
 * Generate AI-powered business insights from Aurora data
 * Uses rule-based engine on customer data
 * Production: Triggers stored procedure with ML model predictions
 */
export async function generateInsights(): Promise<BusinessInsight[]> {
  await new Promise(resolve => setTimeout(resolve, 120));
  return mockInsights;
}

/**
 * Search customers by name or industry
 * Production: SELECT * FROM customers WHERE name ILIKE $1 OR industry ILIKE $1
 */
export async function searchCustomers(query: string): Promise<Customer[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  const lowerQuery = query.toLowerCase();
  return mockCustomers.filter(
    c => c.name.toLowerCase().includes(lowerQuery) || 
         c.industry.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Filter customers by risk level
 * Production: SELECT * FROM customers WHERE risk_score = $1
 */
export async function filterCustomersByRisk(risk: 'low' | 'medium' | 'high'): Promise<Customer[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockCustomers.filter(c => c.riskScore === risk);
}

/**
 * Get revenue trend data for charts
 * Production: SELECT DATE_TRUNC('month', created_at) as month, SUM(amount) as value FROM orders GROUP BY month ORDER BY month
 */
export async function getRevenueData() {
  await new Promise(resolve => setTimeout(resolve, 100));
  return [
    { month: 'Jan', value: 92000 },
    { month: 'Feb', value: 88000 },
    { month: 'Mar', value: 105000 },
    { month: 'Apr', value: 98000 },
    { month: 'May', value: 112000 },
    { month: 'Jun', value: 125000 },
  ];
}

/**
 * Get customer growth trend
 * Production: SELECT DATE_TRUNC('month', created_at) as month, COUNT(*) as value FROM customers GROUP BY month ORDER BY month
 */
export async function getCustomerGrowthData() {
  await new Promise(resolve => setTimeout(resolve, 100));
  return [
    { month: 'Jan', value: 320 },
    { month: 'Feb', value: 350 },
    { month: 'Mar', value: 375 },
    { month: 'Apr', value: 395 },
    { month: 'May', value: 410 },
    { month: 'Jun', value: 428 },
  ];
}
