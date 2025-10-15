# WTWR (What to Wear?): Back End

## Description

The WTWR (What to Wear?) back-end project is a RESTful API server that provides data management for a weather-based clothing recommendation application. This server handles user management, clothing item storage, and user interactions such as liking/disliking clothing items.

## Functionality

The API provides the following core features:

### User Management

- User registration and authentication
- JWT-based session management
- Protected user profile access and updates
- Secure password handling with bcrypt encryption

### Clothing Items Management

- Create new clothing items with name, weather type, and image URL
- Retrieve all clothing items
- Delete clothing items by ID
- Like/unlike clothing items
- Track item ownership and creation dates

### Error Handling

- Comprehensive error handling with appropriate HTTP status codes
- Input validation for all endpoints
- URL validation for images and avatars

## Technologies and Techniques Used

### Core Technologies

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework for building RESTful APIs
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling library for Node.js
- **bcryptjs** - Password hashing library for secure authentication
- **jsonwebtoken** - JWT implementation for user session management

### Development Tools

- **nodemon** - Development server with hot reload
- **ESLint** - Code linting with Airbnb style guide
- **Prettier** - Code formatting
- **validator** - Input validation library

### Project Structure

- **MVC Architecture** - Separation of concerns with models, controllers, and routes
- **Modular Design** - Organized file structure with dedicated folders for different components
- **Authentication Middleware** - JWT-based route protection
- **Error Handling** - Centralized error constants and consistent error responses

### Database Schema

- **User Schema** - Name (2-30 characters), avatar URL with validation, email (unique), password (hashed)
- **Clothing Item Schema** - Name, weather type (enum: hot/warm/cold), image URL, owner reference, likes array, creation timestamp

## API Endpoints

### Authentication

- `POST /signup` - Register a new user
- `POST /signin` - User login (returns JWT token)

### Users (Protected Routes)

- `GET /users/me` - Get current user's profile
- `PATCH /users/me` - Update current user's profile

### Clothing Items

- `GET /items` - Get all clothing items (public)
- `POST /items` - Create new clothing item (protected)
- `DELETE /items/:itemId` - Delete clothing item (protected)
- `PUT /items/:itemId/likes` - Like a clothing item (protected)
- `DELETE /items/:itemId/likes` - Unlike a clothing item (protected)

## Running the Project

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (running locally on port 27017)

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Ensure MongoDB is running

### Scripts

- `npm run start` — Launch the server on localhost:3001
- `npm run dev` — Launch the server with hot reload feature
- `npm run lint` — Run ESLint to check code quality

### Database Connection

The server connects to MongoDB at: `mongodb://localhost:27017/wtwr_db`

## Testing

Before committing your code, make sure you edit the file `sprint.txt` in the root folder. The file `sprint.txt` should contain the number of the sprint you're currently working on. For example: 12

## Author

Bharat Saran

## Project Pitch Video

Check out [this video](https://drive.google.com/file/d/1XvKQXrd6vtyDjL8IDL0QdD1duF29ipSd/view?usp=drive_link), where I describe my project and some challenges I faced while building it.

## Project Status

This project is part of Sprint 12 of the TripleTen Software Engineering program, focusing on back-end development fundamentals including database design, API creation, and server-side error handling.hat to Wear?): Back End
The back-end project is focused on creating a server for the WTWR application. You’ll gain a deeper understanding of how to work with databases, set up security and testing, and deploy web applications on a remote machine. The eventual goal is to create a server with an API and user authorization.

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

### Testing

Before committing your code, make sure you edit the file `sprint.txt` in the root folder. The file `sprint.txt` should contain the number of the sprint you're currently working on. For ex. 12
