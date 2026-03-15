# Deployment Guide - Ujjwal Rai Portfolio

## Prerequisites
- Node.js installed
- MySQL installed and running
- Git

## Local Development

### 1. Database Setup
1. Open your MySQL client (Workbench, Command Line, etc.)
2. Run the SQL script located in `server/schema.sql`:
   ```sql
   CREATE DATABASE IF NOT EXISTS portfolio_db;
   USE portfolio_db;
   CREATE TABLE IF NOT EXISTS contacts (...);
   ```
3. Update `server/.env` with your DB credentials:
   ```
   DB_USER=root
   DB_PASSWORD=your_password
   ```

### 2. Backend Setup
1. Navigate to server folder: `cd server`
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`
   - Server runs on http://localhost:5000

### 3. Frontend Setup
1. Navigate to client folder: `cd client`
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
   - Client runs on http://localhost:5173

## Deployment (Production)

### Frontend (Vercel/Netlify)
1. Push code to GitHub.
2. Import repository in Vercel/Netlify.
3. Set Build Command: `npm run build`
4. Set Output Directory: `dist`
5. Deploy.

### Backend (Render/Heroku/Railway)
1. Push code to GitHub.
2. Import repository in Render/Railway.
3. Set Build Command: `npm install`
4. Set Start Command: `node server.js`
5. Add Environment Variables from `.env` (DB_HOST, DB_USER, etc.).
   - **Note**: You will need a cloud MySQL database (e.g., Aiven, PlanetScale, or Railway MySQL).

### Connecting Frontend to Backend
1. Update `client/src/components/Contact.jsx` to use the production API URL instead of `localhost:5000`.
   - You can use an environment variable in Vite: `import.meta.env.VITE_API_URL`.
   - Create `.env` in client: `VITE_API_URL=https://your-backend-url.com/api/contact`.

## Project Structure
- `client/`: React Frontend
- `server/`: Node.js Express Backend & Database

## Contact
For issues, contact: ur3707615@gmail.com
