# Hospital Management System - System Architecture

## Overview

The Hospital Management System follows a modern 3-tier architecture.

User
    │
    ▼
Frontend (Next.js)
    │
    ▼
Backend API (Express.js)
    │
    ▼
MongoDB Atlas

---------------------------------------

Images
↓

Cloudinary

---------------------------------------

Authentication

JWT Access Token

↓

Refresh Token

↓

Protected APIs

---------------------------------------

Deployment

Frontend → Vercel

Backend → Render

Database → MongoDB Atlas

Images → Cloudinary

---------------------------------------

Flow

Browser

↓

Next.js Frontend

↓

Axios API Request

↓

Express API

↓

Business Logic

↓

MongoDB

↓

JSON Response

↓

Frontend Updates UI


                        Browser
                           │
                           │
                    Next.js Frontend
                           │
                     Axios Requests
                           │
                    Express Backend
                           │
          ┌────────────────┼────────────────┐
          │                │                │
      MongoDB Atlas    Cloudinary      Nodemailer
          │                │                │
          └────────────────┴────────────────┘
                           │
                     JSON Response
                           │
                    Next.js Dashboard