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

## Usage Instructions

1. **Upload CSV File**: Click on the upload area and select a CSV file containing website URLs.
2. **CSV Format**: File should contain one URL per row (headers optional). Example:
   ```
   url
   https://www.google.com
   https://www.github.com
   https://www.stackoverflow.com
   ```
3. **Wait for Processing**: The app will parse the URLs and prepare them for browsing.
4. **Navigate**: Use "Previous" and "Next" buttons below the viewer to browse between websites.
5. **View Details**: See current site number, total websites, and progress percentage.
6. **Open in New Tab**: Click "Open" button to view any website in a new browser tab.

---

## API Endpoints

### Backend Routes

**POST** `/api/upload` - Upload and parse CSV file
- **Request**: FormData with file
- **Response**:
  ```json
  {
    "success": true,
    "count": 3,
    "urls": ["https://google.com", "https://github.com", "https://stackoverflow.com"]
  }
  ```

---

## CSV File Format Requirements

- **Supported Formats**: CSV files only
- **Required**: URLs must start with `http://` or `https://`
- **Optional**: First row can contain headers
- **Example**:
  ```
  Website URLs
  https://example.com
  https://another-site.com
  ```

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## How It Works

1. User uploads a CSV file.
2. Backend processes the file and extracts URLs.
3. URLs are sent to the frontend.
4. User navigates through websites using controls.
5. Selected website is displayed in an iframe.

---

## Live Links

Frontend: https://mern-website-navigator.vercel.app/  
Backend API: https://mern-website-navigator.onrender.com/api 
Github : https://github.com/jayeshphale/MERN-Website-Navigator

> Note: Add screenshot files and a demo video link or attachment before final assignment submission to follow the submission guidelines.

Screenshots : https://docs.google.com/document/d/1EAwUSZP4yhtGJklFaYmANuCiT_JFHj1odk_fhSj8CTc/edit?usp=sharing
Video : https://www.loom.com/share/e0533d60ab58418f8235bf23e15325c9

---

## Author

**Jayesh Phale**