import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import mixpanel from "mixpanel-browser";
import './index.css'
import posthog from 'posthog-js'; 
import { PostHogProvider } from '@posthog/react' // +
import { LDProvider } from 'launchdarkly-react-client-sdk';
// Here the App component is being rendered in the browser and we have most of the functionality in the App component


posthog.init('phc_1wEyra80RwWY5khoZFIguVohlSnZxnYImYgS2bCiYus', { // +
  api_host: 'https://us.i.posthog.com', // +
  defaults: '2026-01-30', // +
}); // +


// Add the code below to the root of your React app.
// A "context" is a data object representing users, devices, organizations, and other entities.
const context = {
  kind: 'user',
  key: '1',
  email: 'rohan.shorey@thatoptimisticguy.com',
};

 
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
    <LDProvider clientSideID="66ec03c575d43c104d4e47d1" context={context}>
    <PostHogProvider client={posthog}>
      <App />
      </PostHogProvider>
      </LDProvider>
    </BrowserRouter>
  </React.StrictMode>
);
