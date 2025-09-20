# NoteNest - Personal Notes API

NoteNest is a simple RESTful API for managing personal notes, built with Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete notes
- Rate limiting to prevent abuse (10 requests per 20 seconds per IP)
- Organized code structure with controllers and routes
- Uses Mongoose for MongoDB integration

## Getting Started

### Prerequisites

- Node.js
- MongoDB (local or Atlas)
- npm

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/shubham4672/NestNotes-backend.git
   cd notenest-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your MongoDB URI:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5001
   ```

4. Start the server:
   ```
   npm start
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
