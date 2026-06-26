# BizPilot AI AWS Architecture

## Cloud Stack

Frontend:
Vercel v0 + Next.js

Backend:
Next.js API Routes

Database:
Amazon Aurora PostgreSQL


## Architecture Flow

Business User

↓

Vercel Deployment

↓

Next.js Application

↓

API Routes

↓

Amazon Aurora PostgreSQL


## Database Design

Tables:

Customer

- id
- business_id
- name
- industry
- last_purchase_date
- lifetime_value
- risk_score


Order

- id
- customer_id
- amount
- category
- created_at


BusinessInsight

- id
- customer_id
- recommendation
- priority


Explain:

Amazon Aurora PostgreSQL provides a scalable relational database foundation for production workloads.
