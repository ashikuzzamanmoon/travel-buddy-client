# Travel Buddy

## Live URL

[https://travel-buddy-client-ten.vercel.app](https://travel-buddy-client-ten.vercel.app)

## Video Description

[https://drive.google.com/file/d/1mRKhAiY4dXn1MA_Ret2opxm8JzmpJYB7/view?usp=sharing](https://drive.google.com/file/d/1mRKhAiY4dXn1MA_Ret2opxm8JzmpJYB7/view?usp=sharing)

## Overview

Travel Buddy Matching App is a web application designed to help users plan and organize their trips efficiently. Whether you're traveling solo or with friends, Travel Buddy App provides features to manage your trips, find potential travel buddies, and update your user profile seamlessly.

## Features

- **Trip Management**: Create, view, and manage your trips with ease.
- **Travel Buddy Requests**: Send and receive travel buddy requests to join or invite others to your trips.
- **User Profile**: Update user profile status and Maintain your user profile to share information about yourself with other users.
- **Search and Filter**: Find trips and potential travel buddies based on destination, dates, budget, and more.

## Technology Used

- **Programming Language**: TypeScript
- **Web Framework**: Express.js
- **Database**: Railway Database PostgreSQL with Prisma ORM
- **Authentication**: JSON Web Tokens (JWT)
- **Validation**: Zod for schema validation
- **Deployment**: Vercel

## Getting Started

To set up the Travel Buddy App locally, follow these steps:

1. **Clone the Repository**
2. **Install Dependencies**: `cd travel-buddy-app && npm install`
3. **Set Up Environment Variables**: Create a `.env` file based on the provided `.env.example` file and fill in the necessary configuration.
4. **Run Migrations**: `npx prisma migrate dev` to apply database migrations.
5. **Start the Server**: `npm start` to run the backend server.
6. **Access the App**: Visit `http://localhost:3000` in your browser to access the Travel Buddy App.
