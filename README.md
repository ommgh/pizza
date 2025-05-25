
# 🍕 Next.js Pizza Orders Dashboard

## Overview

This project is a frontend assignment, which includes a responsive dashboard application built with Next.js 15, with Email/Password & Google OAuth authentication via NextAuth.js, styled with Tailwind CSS. Authenticated users can access a dashboard with mock pizza order data and user-specific settings, optimized for both desktop and mobile experiences.

## Tech Stack

* **Framework**: Next.js (App Router)
* **Auth**: NextAuth.js with Google OAuth
* **UI**: Tailwind CSS, ShadCN Components
* **Database**: PostgreSQL
* **ORM**: Prisma
* **Resend** – Verification Email
* **React Hook Form** – Form handling
* **React Table** – Headless Table
* **Deployment**: Vercel

---

## Features

* Google Sign-in via OAuth (NextAuth.js)
* Email/Password Authentication (NextAuth.js):

  * Sign-in/Sign-up using PostgreSQL Database
  * Email Verification Using Resend.
  
* Protected dashboard with:

  * Greeting: Hello, \[User Name]
  * Orders Table (mocked pizza orders with sorting & pagination)
* Responsive Sidebar Navigation
* Smooth UI/UX with dark mode support

---

## Project Structure

```
actions/            → Server actions for auth flows
app/                → Next.js app directory
  └── (protected)/  → Authenticated routes (dashboard, orders, settings)
  └── api/          → NextAuth and mock order API routes
  └── auth/         → Public auth routes (login, register, verification)
components/         → Reusable UI and feature-specific components
data/               → User related data fetching
hooks/              → Custom React hooks
lib/                → Utility functions and mail/token helpers
prisma/             → Database Schema
public/             → Static assets
schemas/            → Zod validation schemas
types/              → Shared TypeScript types
```

---

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install Dependencies**

   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root:

   ```
   AUTH_SECRET=
   DATABASE_URL=
   RESEND_API_KEY=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   NEXT_PUBLIC_API_URL=
   ```

4. **Run the App Locally**

   ```bash
   pnpm dev
   ```

5. **Open http://localhost:3000 in your browser to view the app.**
---

**support** : [hi@ommishra.tech](mailto:hi@ommishra.tech)






