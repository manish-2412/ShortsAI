ShortsAI
Getting Started
Follow these steps to set up and run the project locally.

Prerequisites
Node.js (v18 or higher)
Python (v3.11 or higher)
Git
AWS Account (with S3 bucket and IAM user credentials)
Stripe Account (for API keys and webhooks)
Modal Labs Account
Inngest Account
Google Cloud Account (for Gemini API key)
PostgreSQL Database (e.g., a free tier from Neon.tech, Supabase, or a local Docker instance)
1. Clone the Repository
git clone https://github.com/manish-2412/ShortsAI.git

2. Install Dependencies
Frontend
cd frontend
npm install

Backend
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

3. Environment Configuration
Create .env files in both the frontend and backend directories using their respective .env.example templates and populate them with your API keys, database URLs, and credentials.

4. Run the Application
Start your backend server and frontend development server concurrently to begin using ShortsAI locally.
