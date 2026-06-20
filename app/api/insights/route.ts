import { NextResponse } from 'next/server';
import { generateInsights } from '@/lib/aurora-data';

/**
 * Business Insights API Endpoint
 * 
 * Connects to Amazon Aurora PostgreSQL data layer
 * Returns AI-generated business recommendations based on customer data
 * 
 * Production Implementation:
 * - Queries run against Aurora read replicas for performance
 * - Results cached with CloudFront for faster responses
 * - Uses Aurora's JSON functions for complex data aggregations
 */
export async function GET() {
  try {
    // Fetch insights from Aurora-ready data layer
    const insights = await generateInsights();
    
    return NextResponse.json({
      success: true,
      database: 'Amazon Aurora PostgreSQL',
      dataSource: 'Customer Analytics & AI Recommendation Engine',
      data: insights,
      count: insights.length,
      timestamp: new Date().toISOString(),
      note: 'Insights generated from Aurora PostgreSQL queries and rule-based AI engine',
    });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch insights from Aurora',
        database: 'Amazon Aurora PostgreSQL'
      },
      { status: 500 }
    );
  }
}
