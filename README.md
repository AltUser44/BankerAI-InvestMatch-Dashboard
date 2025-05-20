# BankerAI-InvestMatch Dashboard

![Screenshot 2025-05-20 022207](https://github.com/user-attachments/assets/ca49531d-5787-49e1-b869-cedc6249ef4a)

![Screenshot 2025-05-20 022251](https://github.com/user-attachments/assets/6ff82486-bbf0-469c-a022-8f1653d8fc92)

## Project Overview

This repository contains a prototype dashboard for the BankerAI and InvestMatch platforms - an AI-powered solution for democratizing investment banking services for lower and middle-market companies.

### Core Components

- **BankerAI**: Automates financial modeling, valuation analysis, market research, and document preparation for investment banking processes.
- **InvestMatch**: A feature of BankerAI that efficiently matches deals with appropriate investors based on specific criteria.

## Dashboard Features

This prototype dashboard demonstrates the user interface for investment bankers to:

- Monitor active deals and their performance metrics
- Track investor matching statistics and outcomes
- Visualize investor criteria distribution
- Manage the deal pipeline and investor outreach

## Technical Architecture

The system is designed with a modern data and AI workflow:

1. **Data Sources**: Integration with investor databases, financial data providers, CRM systems, and document repositories
2. **Ingestion & ETL**: Data processing using Airflow/Prefect and storage in a raw data lake
3. **Storage & Knowledge**: Structured data in relational and vector databases
4. **AI Services**: Model training, registry, RAG pipelines, and orchestration
5. **Product Microservices**: APIs for BankerAI and InvestMatch
6. **Document Generation**: Automated creation of financial documents using AI
7. **Presentation Layer**: React dashboard with CRM integration and notifications

## Implementation Strategy

The recommended implementation approach is phased:

1. **Phase 1**: InvestMatch MVP - Build investor criteria database and matching algorithm
2. **Phase 2**: InvestMatch Expansion - National coverage and self-service portal
3. **Phase 3**: BankerAI Foundation - Financial modeling and document generation
4. **Phase 4**: Full BankerAI Launch - End-to-end workflow automation

## Technology Stack

- **Frontend**: Next.js with React and Tailwind CSS
- **UI Components**: shadcn/ui component library
- **Charts**: Recharts for data visualization
- **Backend** (not implemented in prototype): Node.js microservices
- **AI/ML** (conceptual): LangChain, OpenAI, and custom financial models
- **Data Storage** (conceptual): Vector databases and relational databases

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

```bash
# Clone the repository
git clone https://github.com/yourusername/bankerai-investmatch-dashboard.git

# Navigate to the project directory
cd bankerai-investmatch-dashboard

# Install dependencies
npm install

# Run the development server
npm run dev
