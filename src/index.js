import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { ClerkProvider, initializeClerk } from '@clerk/clerk-react';
// import { process } from 'dotenv';
import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
// process.env = Object.assign(process.env, dotenv.config().parsed);
// const clerkFrontEndApi = initializeClerk();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <App />
      </ClerkProvider>
  </React.StrictMode>
);

