# ShortsAI

## Overview

This project is an AI-powered SaaS (Software as a Service) application designed to automatically generate short-form video clips from full-length podcast episodes. Leveraging cutting-edge AI models and serverless infrastructure, it streamlines the content creation process for platforms like YouTube Shorts and TikTok, helping creators repurpose long-form content efficiently.

## Features

* Intelligent Clip Generation: Automatically identifies "viral moments" (questions, stories, key discussions) from podcast transcripts using a Large Language Model (LLM).
* Accurate Transcription: Utilizes an advanced AI model (WhisperX) for precise transcription of audio, including word-level timestamps.
* Active Speaker Detection: Employs an AI model (LR-ASD) to automatically crop video clips, focusing on the active speaker's face for optimized vertical video formats.
* GPU-Accelerated Video Rendering: Fast and efficient video processing and rendering using serverless GPUs (NVIDIA L40S on Modal) with FFMPEGCV.
* Automated Subtitle Generation: Creates dynamic, styled subtitles for clips, enhancing accessibility and engagement.
* Scalable Backend: Built with Modal and Inngest for robust background processing, queue management, and serverless GPU execution.
* Secure File Storage: Integrates with AWS S3 for secure and scalable storage of raw and processed video files.
* User Authentication: Secure user management for a multi-tenant SaaS experience.
* Credit-Based System & Payments: Implements a credit-based system for clip generation, integrated with Stripe for seamless credit pack purchases.
* Modern Frontend: A responsive and intuitive web interface built with Next.js and Tailwind CSS.
* Real-time Status Updates: Dashboard to monitor uploaded podcasts, processing status, and generated clips.

## Technologies Used

Frontend:
* Next.js: React framework for building server-rendered and static web applications.
* React: JavaScript library for building user interfaces.
* TypeScript: Superset of JavaScript for type-safe code.
* Tailwind CSS: Utility-first CSS framework for rapid UI development.
* Shadcn UI: Reusable UI components built with Tailwind CSS and Radix UI.
* Sonner: Toast notifications.
* Prisma: Next-generation ORM for database interactions.

Backend (AI Processing & Orchestration):
* Python: Primary language for AI models and processing logic.
* Modal: Serverless platform for deploying and scaling Python code, especially with GPUs.
* Inngest: Event-driven serverless platform for background jobs, queues, and workflow orchestration.
* FastAPI: Python web framework for building API endpoints.
* WhisperX: AI model for robust audio transcription and alignment.
* LR-ASD (Active Speaker Detection): Custom or adapted model for identifying active speakers.
* FFMPEGCV: GPU-accelerated video processing library.
* Google Gemini API: Large Language Model for viral moment identification.
* Boto3: AWS SDK for Python (for S3 interaction).
* Pysubs2: Library for subtitle manipulation.

Infrastructure & Services:
* AWS S3: Object storage for media files.
* Stripe: Payment processing for credit purchases.
* PostgreSQL (e.g., Neon DB): Relational database for application data (users, files, clips, credits).
* Git: Version control.
* Vercel: Platform for deploying the Next.js frontend.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

* Node.js (v18 or higher)
* Python (v3.11 or higher)
* Git
* AWS Account (with S3 bucket and IAM user credentials)
* Stripe Account (for API keys and webhooks)
* Modal Labs Account
* Inngest Account
* Google Cloud Account (for Gemini API key)
* PostgreSQL Database (e.g., a free tier from Neon.tech, Supabase, or a local Docker instance)

### 1. Clone the Repository

git clone https://github.com/manish-2412/ShortsAI.git

### 2. AWS S3 Setup

1. Create an S3 Bucket: Create a new S3 bucket (e.g., ai-podcast-clipper-1) in your AWS console.
2. Configure CORS: Add a CORS configuration to your S3 bucket to allow uploads from your frontend.
    <?xml version="1.0" encoding="UTF-8"?>
    <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <CORSRule>
        <AllowedOrigin>*</AllowedOrigin>
        <AllowedMethod>GET</AllowedMethod>
        <AllowedMethod>PUT</AllowedMethod>
        <AllowedMethod>POST</AllowedMethod>
        <AllowedHeader>*</AllowedHeader>
    </CORSRule>
    </CORSConfiguration>
3. Create an IAM User: Create an IAM user with programmatic access. Grant this user s3:GetObject, s3:PutObject, and s3:ListBucket permissions on your S3 bucket.
4. Obtain Credentials: Note down the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY.

### 3. Database Setup (PostgreSQL & Prisma)

1. Create a PostgreSQL Database:
    * Recommended (Neon.tech): Sign up for Neon.tech, create a new project, and copy your DATABASE_URL (connection string).
    * Other: Use Supabase, Railway, or set up a local PostgreSQL instance.
2. Configure DATABASE_URL: Create a .env file in the frontend directory and add your database URL:
    DATABASE_URL="postgresql://YOUR_USER:YOUR_PASSWORD@YOUR_HOST:YOUR_PORT/YOUR_DATABASE?schema=public"
3. Run Prisma Migrations:
    Navigate to the frontend directory and apply your Prisma schema to the database.
    cd frontend
    npm install
    npx prisma migrate dev --name init

### 4. Modal Backend Setup

1. Install Modal CLI:
    pip install modal-client
2. Authenticate Modal:
    modal token new
3. Configure Modal Secrets: Create a Modal Secret to securely store your AWS and Google Gemini API keys.
    modal secret create ai-youtube-clipper \
        AWS_ACCESS_KEY_ID="YOUR_AWS_ACCESS_KEY_ID" \
        AWS_SECRET_ACCESS_KEY="YOUR_AWS_SECRET_ACCESS_KEY" \
        AWS_DEFAULT_REGION="YOUR_AWS_REGION" \
        GEMINI_API_KEY="YOUR_GEMINI_API_KEY" \
        AUTH_TOKEN="YOUR_CUSTOM_AUTH_TOKEN"
4. Deploy Modal App:
    Navigate to your backend directory and deploy your Modal application.
    cd ../backend
    pip install -r requirements.txt
    modal deploy main.py::app

### 5. Inngest Setup

1. Get Inngest API Key: Sign up for Inngest and get your Inngest API key.
2. Configure Inngest Environment Variable: Add the Inngest key to your frontend/.env file.
    INNGEST_EVENT_KEY="YOUR_INNGEST_EVENT_KEY"
    INNGEST_SIGNING_KEY="YOUR_INNGEST_SIGNING_KEY"

### 6. Stripe Setup

1. Get Stripe API Keys: Obtain your Stripe STRIPE_SECRET_KEY and NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY from your Stripe Dashboard.
2. Configure Stripe Environment Variables: Add them to your frontend/.env file.
    STRIPE_SECRET_KEY="sk_test_..."
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
    NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET="whsec_..."
3. Configure Stripe Webhooks: Set up a webhook in Stripe to listen for events like checkout.session.completed and invoice.payment_succeeded.

### 7. Frontend Environment Variables

Ensure your frontend/.env file contains all necessary environment variables:
DATABASE_URL="postgresql://YOUR_USER:YOUR_PASSWORD@YOUR_HOST:YOUR_PORT/YOUR_DATABASE?schema=public"
NEXTAUTH_SECRET="YOUR_NEXTAUTH_SECRET"
NEXTAUTH_URL="http://localhost:3000"
INNGEST_EVENT_KEY="YOUR_INNGEST_EVENT_KEY"
INNGEST_SIGNING_KEY="YOUR_INNGEST_SIGNING_KEY"
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET="whsec_..."
MODAL_VIDEO_PROCESSING_ENDPOINT="https://your-org-name--ai-podcast-clipper-aipodcastclipper-pr-xxxxxx-dev.modal.run/process-video"

## Running the Application

### Local Development

1. Start Frontend:
    cd frontend
    npm run dev

2. Test Modal Endpoint:
    cd backend
    modal run main.py

### Deployment

* Frontend (Next.js): Deploy your frontend directory to Vercel.
* Backend (Modal): Your Modal application is already deployed.
* Inngest: Ensure Inngest environment variables are set in your deployment platform.
