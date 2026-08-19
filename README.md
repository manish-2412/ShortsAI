# ShortsAI

## Overview

This project is an AI-powered SaaS (Software as a Service) application designed to automatically generate short-form video clips from full-length podcast episodes. Leveraging cutting-edge AI models and serverless infrastructure, it streamlines the content creation process for platforms like YouTube Shorts and TikTok, helping creators repurpose long-form content efficiently.

## Features

- **Intelligent Clip Generation:** Automatically identifies "viral moments" (questions, stories, key discussions) from podcast transcripts using a Large Language Model (LLM).
- **Accurate Transcription:** Utilizes an advanced AI model (WhisperX) for precise transcription of audio, including word-level timestamps.
- **Active Speaker Detection:** Employs an AI model (LR-ASD) to automatically crop video clips, focusing on the active speaker's face for optimized vertical video formats.
- **GPU-Accelerated Video Rendering:** Fast and efficient video processing and rendering using serverless GPUs (NVIDIA L40S on Modal) with FFMPEGCV.
- **Automated Subtitle Generation:** Creates dynamic, styled subtitles for clips, enhancing accessibility and engagement.
- **Scalable Backend:** Built with Modal and Inngest for robust background processing, queue management, and serverless GPU execution.
- **Secure File Storage:** Integrates with AWS S3 for secure and scalable storage of raw and processed video files.
- **User Authentication:** Secure user management for a multi-tenant SaaS experience.
- **Credit-Based System & Payments:** Implements a credit-based system for clip generation, integrated with Stripe for seamless credit pack purchases.
- **Modern Frontend:** A responsive and intuitive web interface built with Next.js and Tailwind CSS.
- **Real-time Status Updates:** Dashboard to monitor uploaded podcasts, processing status, and generated clips.

## Technologies Used

**Frontend:**

- **Next.js:** React framework for building server-rendered and static web applications.
- **React:** JavaScript library for building user interfaces.
- **TypeScript:** Superset of JavaScript for type-safe code.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **Shadcn UI:** Reusable UI components built with Tailwind CSS and Radix UI.
- **Sonner:** Toast notifications.
- **Prisma:** Next-generation ORM for database interactions.

**Backend (AI Processing & Orchestration):**

- **Python:** Primary language for AI models and processing logic.
- **Modal:** Serverless platform for deploying and scaling Python code, especially with GPUs.
- **Inngest:** Event-driven serverless platform for background jobs, queues, and workflow orchestration.
- **FastAPI:** Python web framework for building API endpoints.
- **WhisperX:** AI model for robust audio transcription and alignment.
- **LR-ASD (Active Speaker Detection):** Custom or adapted model for identifying active speakers.
- **FFMPEGCV:** GPU-accelerated video processing library.
- **Google Gemini API:** Large Language Model for viral moment identification.
- **Boto3:** AWS SDK for Python (for S3 interaction).
- **Pysubs2:** Library for subtitle manipulation.

**Infrastructure & Services:**

- **AWS S3:** Object storage for media files.
- **Stripe:** Payment processing for credit purchases.
- **PostgreSQL (e.g., Neon DB):** Relational database for application data (users, files, clips, credits).
- **Git:** Version control.
- **Vercel:** Platform for deploying the Next.js frontend.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v18 or higher)
- Python (v3.11 or higher)
- Git
- AWS Account (with S3 bucket and IAM user credentials)
- Stripe Account (for API keys and webhooks)
- Modal Labs Account
- Inngest Account
- Google Cloud Account (for Gemini API key)
- PostgreSQL Database (e.g., a free tier from Neon.tech, Supabase, or a local Docker instance)

### 1. Clone the Repository

```bash
git clone [https://github.com/meetvyas3012/ShortsAI.git](https://github.com/meetvyas3012/ShortsAI.git)
```
