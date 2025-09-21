# NoteNest - Personal Notes App

NoteNest is a full-stack personal notes application built with React (frontend), Node.js/Express (backend), and MongoDB. It allows users to create, view, update, and delete notes with a modern UI and robust API.

## Features

- Create, read, update, and delete personal notes
- Beautiful, responsive UI with DaisyUI and Tailwind CSS
- Light/Dark theme toggle (Coffee & Autumn themes)
- Rate limiting to prevent abuse (10 requests per 20 seconds per IP)
- Organized code structure with controllers, routes, and models
- Uses Mongoose for MongoDB integration
- Error handling and custom error pages
- Radial gradient backgrounds for a professional look

## Getting Started

### Prerequisites

- Node.js
- MongoDB (local or Atlas)
- npm

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/shubham4672/NestNotes-backend.git
   cd note_nest
   ```

2. **Install backend dependencies:**
   ```
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```
   cd ../frontend
   npm install
   ```

4. **Create a `.env` file in the `backend` directory and add your MongoDB URI:**
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5001
   ```

5. **Start the backend server:**
   ```
   cd ../backend
   npm start
   ```

6. **Start the frontend development server:**
   ```
   cd ../frontend
   npm run dev
   ```

## API Endpoints

| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| GET    | /api/notes         | Get all notes            |
| GET    | /api/notes/:id     | Get a note by ID         |
| POST   | /api/notes         | Create a new note        |
| PUT    | /api/notes/:id     | Update a note by ID      |
| DELETE | /api/notes/:id     | Delete a note by ID      |

## Rate Limiting

- Each IP is limited to **10 requests per 20 seconds**.

## Frontend

- Built with React and Tailwind CSS
- DaisyUI themes
- Theme toggle in the navbar
- Professional error page for invalid endpoints
