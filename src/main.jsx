import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Here the App component is being rendered in the browser and we have most of the functionality in the App component

// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import posthog from 'posthog-js'; 
import { PostHogProvider } from '@posthog/react' // +

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_TOKEN, { // +
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST, // +
  defaults: '2026-01-30', // +
}); // +

import mixpanel from "mixpanel-browser";
 
// Near entry of your product, init Mixpanel
mixpanel.init("6a1edb579d0a5434b319c56eb434184f", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
  record_sessions_percent: 100, //records 100% of all sessions
  record_heatmap_data: true,
});
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <PostHogProvider client={posthog}> // +
//       <App />
//     </PostHogProvider> // +
//   </StrictMode>,
// )

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiVYmRvGAYKB77SAgi6pgN4HAEtR-tKIc",
  authDomain: "dummy-daraz-6afbb.firebaseapp.com",
  projectId: "dummy-daraz-6afbb",
  storageBucket: "dummy-daraz-6afbb.firebasestorage.app",
  messagingSenderId: "1024358285139",
  appId: "1:1024358285139:web:615826257979b0ab576ba6",
  measurementId: "G-RJYJV9J13R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <PostHogProvider client={posthog}>
      <App />
      </PostHogProvider>
    </BrowserRouter>
  </React.StrictMode>
);
