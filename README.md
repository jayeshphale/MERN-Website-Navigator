README.md
# MERN Website Navigator

This is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to upload a CSV file containing website URLs and navigate through them easily using a simple interface.

The application processes the uploaded file, extracts URLs, and provides navigation controls such as Next and Previous to browse through the list. Each website is displayed inside the application using an iframe, along with an option to open it in a new tab.

---

## Features

- Upload CSV file containing website URLs
- Parse and extract URLs from the file
- Navigate through websites using Next and Previous buttons
- Display websites directly inside the application to simulate a real website experience
- Open websites in a new browser tab
- Simple and user-friendly interface

---

## Submission Guidelines

- Keep the Previous and Next buttons below the website viewer for a better navigation experience.
- Render websites directly on the page rather than inside a card-style container.
- Add screenshots and a demo video when submitting the assignment.

---

## Tech Stack

Frontend:
- React.js
- Axios

Backend:
- Node.js
- Express.js

Other:
- Multer (for file upload handling)
- CSV parsing utilities

---

## Project Structure


MERN-Website-Navigator/
│
├── backend/
│ ├── controllers/
│ ├── routes/
│ ├── utils/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ ├── public/
│ └── package.json
│
└── README.md


---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

---

## Backend Setup

1. Navigate to backend folder:

cd backend


2. Install dependencies:

npm install


3. Start the server:

node server.js


Server will run on:

http://localhost:5000


---

## Frontend Setup

1. Navigate to frontend folder:

cd frontend


2. Install dependencies:

npm install


3. Start the React app:

npm start


Frontend will run on:

http://localhost:3000


---

## Deployment

Backend is deployed on Render.

Frontend is deployed on Vercel.

Make sure to update the API base URL in the frontend before deploying:

https://your-backend-url.onrender.com/api


---

## How It Works

1. User uploads a CSV file.
2. Backend processes the file and extracts URLs.
3. URLs are sent to the frontend.
4. User navigates through websites using controls.
5. Selected website is displayed in an iframe.

---

## Future Improvements

- Add authentication
- Improve UI/UX design
- Support more file formats
- Add validation for URLs
- Store history of uploaded files

---

## Live Links

Frontend: https://mern-website-navigator.vercel.app/  
Backend API: https://mern-website-navigator.onrender.com/api 

> Note: Add screenshot files and a demo video link or attachment before final assignment submission to follow the submission guidelines.

Screenshots : 
Video : 

## Author

Jayesh Phale