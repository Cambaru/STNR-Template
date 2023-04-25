# Typescript Node.js and React App with shared Types

TypeScript Node.js template app with Socket.io and a React.js TypeScript frontend. It allows users to easily start developing their own Socket.io application.

## Project Structure

```bash
├── frontend/ # The React.js frontend
├── backend/ # The Node.js backend
└── shared/ # Shared types for both frontend and backend
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/my-awesome-app.git
cd my-awesome-app
````

2. Install the project by running the `./boostrap.sh` file

3. Build the backend and frontend by running `npm run build`

4. Start the development server:

```bash
npm run dev
```

5. Open http://localhost:3002 in your browser.

## Configuration

The app uses environment variables to configure its behavior. The following environment variables can be set:

- `PORT`: the port number for the server to listen on (default: `3000`)
- `NODE_ENV`: the environment mode for the app (`development` or `production`, default: `development`)

## Scripts

### Backend

- `npm run build`: builds the TypeScript code in the `src` folder and outputs it to the `dist` folder.
- `npm start`: starts the server using the `dist/server.js` file.

### Frontend

- `npm start`: starts the development server on port 3002.
- `npm run build`: builds the app for production to the `build`

## Dependencies

### Backend

- Node.js v16.x.x or later
- TypeScript v5.1.x or later
- Express v4.18.x or later
- Socket.io v4.6.x or later

#### Dev Dependencies

- @types/express v4.17.x or later
- @types/node v18.15.x or later

### Frontend

- Node.js v16.x.x or later
- TypeScript v4.9.x or later
- React v18.2.x or later
- React Router v5.x.x or later
- React Redux v7.x.x or later
- Redux Toolkit v1.6.x or later
- Axios v0.24.x or later
- Bootstrap v5.2.x or later
- React Bootstrap v2.7.x or later
- Socket.io-client v4.6.x or later

#### Dev Dependencies

- @testing-library/jest-dom v5.16.x or later
- @testing-library/react v13.4.x or later
- @testing-library/user-event v13.5.x or later
- @types/jest v27.5.x or later
- @types/node v16.18.x or later
- @types/react v18.0.x or later
- @types/react-dom v18.0.x or later
- TypeScript v4.9.x or later
- Web Vitals v2.1.x or later

### Root

- Node.js v16.x.x or later
- TypeScript v5.0.x or later
- Concurrently v8.0.x or later
- Prettier v2.8.x or later
- Nodemon v2.0.x or later
- Sass v1.60.x or later

#### Dev Dependencies

- Ts-loader v9.4.x or later
