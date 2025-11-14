# ACMS - Ananda College Mathematics Society Website

## Overview
Official website for the Ananda College Mathematics Society (ACMS). This is a simple Express.js web application that serves static HTML, CSS, and JavaScript files.

**Project Status**: Successfully configured for Replit environment (November 14, 2025)

## Project Architecture

### Technology Stack
- **Backend**: Node.js with Express.js
- **Frontend**: HTML5, CSS3, vanilla JavaScript
- **Server**: Express static file server
- **Port**: 5000 (bound to 0.0.0.0 for Replit compatibility)

### Project Structure
```
.
├── app.js                 # Main Express server
├── frontend/
│   └── index.html        # Main HTML page
├── public/
│   ├── logo.png          # ACMS logo
│   ├── script.js         # Client-side navigation logic
│   └── style.css         # Styling
├── package.json          # Node.js dependencies
└── package-lock.json     # Locked dependencies
```

### Key Features
- Static website with navigation menu
- Responsive design with mobile menu toggle
- Health check endpoint at `/health`
- Echo API endpoint at `/echo` (POST)
- 404 and error handling

### API Endpoints
- `GET /` - Serves main HTML page
- `GET /health` - Server health check (returns status, uptime, timestamp)
- `POST /echo` - Echo endpoint (returns received JSON body)
- Static files served from `/public`

## Configuration

### Dependencies
- express: ^5.1.0
- body-parser: ^2.2.0
- nodemon: ^3.1.11 (dev dependency)

### Environment Variables
- `PORT`: Server port (default: 5000)

### Workflow
The project uses a single workflow:
- **Name**: ACMS Website
- **Command**: `npm test` (runs `nodemon app.js`)
- **Port**: 5000
- **Output**: Webview (website preview)

## Development

### Running the Project
The server automatically starts via the workflow and watches for file changes using nodemon.

### Making Changes
Any changes to `.js`, `.json`, `.html`, or `.css` files will automatically restart the server thanks to nodemon.

## Recent Changes
- **2025-11-14**: Initial Replit setup
  - Changed server port from 3000 to 5000
  - Configured server to bind to 0.0.0.0 for Replit proxy compatibility
  - Installed nodemon dependency
  - Set up ACMS Website workflow with webview output
  - Configured deployment settings

## User Preferences
None specified yet.
