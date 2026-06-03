# Peakify

A full-stack project management platform that helps teams organize work through boards, lists, and cards. Peakify enables collaborative task management with drag-and-drop functionality, secure authentication, and organization-based workspaces.

## Features

* Organization-based collaboration
* Secure authentication and access control
* Board, list, and card management
* Drag-and-drop task workflows
* Activity tracking and audit logs
* Responsive UI for desktop and mobile devices
* Production-ready deployment

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js Server Actions / API Routes
* Clerk Authentication

### Database

* MySQL
* Prisma ORM

### Deployment

* Vercel


### Prerequisites

* Node.js
* MySQL Database
* Clerk Account

### Installation

```bash
git clone <repository-url>
cd peakify
npm install
```

### Environment Variables

Create a `.env` file and configure:

```env
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

### Run Locally

```bash
npm run dev
```

Application will be available at:

```bash
http://localhost:3000
```

## Project Structure

```text
src/
├── app/
├── components/
├── actions/
├── hooks/
├── lib/
└── prisma/
```

## Key Learnings

* Building scalable full-stack applications with Next.js and TypeScript
* Designing relational database schemas using Prisma and MySQL
* Implementing authentication and authorization workflows
* Creating responsive user interfaces with Tailwind CSS
* Deploying production-ready applications on Vercel

## Live Demo

https://next-peakify.vercel.app
