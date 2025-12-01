# Doctor Appointment Booking System

A comprehensive full-stack web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack for managing doctor appointments and patient bookings.

## Features

- User authentication (Register/Login)
- Secure password hashing with bcrypt
- JWT-based authentication
- RESTful API architecture
- Modern React UI with Ant Design components
- Responsive design

## Tech Stack

- **Frontend**: React.js, Ant Design, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcryptjs

## Installation

1. Clone the repository
2. Install server dependencies: `npm install`
3. Install client dependencies: `cd client && npm install`
4. Create a `.env` file in the root directory with your MongoDB connection string and JWT secret
5. Run the development server: `npm run dev`

## Project Structure

```
├── client/          # React frontend application
├── config/          # Database configuration
├── controllers/     # Route controllers
├── models/          # MongoDB models
└── routes/          # API routes
```

## License

MIT
