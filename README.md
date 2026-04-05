# ✈️ AI Travel Planner

> An AI-powered full-stack web application that generates personalized travel itineraries based on your destination, budget, and preferences.

---

## What This Project Does

You enter a destination, number of days, and budget — the app generates a complete day-by-day travel itinerary with hotel recommendations, places to visit, and travel tips. User trips are saved to their account so they can access them anytime.

---

## Features

- AI-generated personalized travel itineraries
- Hotel recommendations based on budget and location
- Google Places integration for real location data and photos
- Google OAuth authentication — sign in with your Google account
- Save and view all your past trips
- Responsive UI works on desktop and mobile

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Vite, Tailwind CSS |
| AI | Google Gemini API |
| Places & Photos | Google Places API |
| Authentication | Google OAuth (Firebase Auth) |
| Database | Firebase Firestore |

---

## Prerequisites

- Node.js 18 or higher — https://nodejs.org
- A Google account
- Access to Google Cloud Console — https://console.cloud.google.com
- A Firebase project — https://console.firebase.google.com

---

## API Keys Required

This project needs four API keys. Follow the steps below to get each one.

### 1. Google Gemini API Key
1. Go to https://aistudio.google.com/app/apikey
2. Click **Create API Key**
3. Copy the key

### 2. Google Places API Key
1. Go to https://console.cloud.google.com
2. Create a new project or select existing
3. Go to **APIs & Services → Enable APIs**
4. Search and enable **Places API**
5. Go to **APIs & Services → Credentials**
6. Click **Create Credentials → API Key**
7. Copy the key

### 3. Firebase Configuration
1. Go to https://console.firebase.google.com
2. Click **Add Project**, follow the steps
3. Click **Add App → Web App**
4. Copy the entire Firebase config object — it contains:
   - apiKey
   - authDomain
   - projectId
   - storageBucket
   - messagingSenderId
   - appId

### 4. Enable Google Auth in Firebase
1. In Firebase Console go to **Authentication → Sign-in method**
2. Click **Google → Enable → Save**

### 5. Enable Firestore
1. In Firebase Console go to **Firestore Database**
2. Click **Create Database**
3. Select **Start in test mode**
4. Choose your region and click **Enable**

---

## Configuration

Create a file called `.env` inside the project root folder and add the following:

```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_GOOGLE_PLACE_API_KEY=your_google_places_api_key_here
VITE_GOOGLE_AUTH_CLIENT_ID=your_google_oauth_client_id_here
VITE_FIREBASE_API_KEY=your_firebase_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Replace every value with your actual keys from the steps above.

> Never share this file or commit it to GitHub. It contains your private API keys.

---

## Installation and Setup

Clone the repository:
```
git clone https://github.com/AdarshSingh1103/AI-Travel-Planner.git
cd AI-Travel-Planner
```

Install dependencies:
```
npm install
```

Create and fill in the `.env` file as shown above.

Start the development server:
```
npm run dev
```

Open your browser at:
```
http://localhost:5173
```

---

## How to Use

1. Sign in with your Google account
2. Click **Create Trip**
3. Enter your destination, number of days, budget, and travel preference
4. Click **Generate Trip**
5. View your AI-generated itinerary with hotels and daily plans
6. All your trips are saved under **My Trips**

---

## Troubleshooting

**Sign in not working**
Make sure Google Auth is enabled in Firebase Console under Authentication → Sign-in method.

**Places or photos not loading**
Check that Places API is enabled in Google Cloud Console and your `VITE_GOOGLE_PLACE_API_KEY` is correct.

**Itinerary not generating**
Verify your `VITE_GEMINI_API_KEY` is valid and has not exceeded its quota.

**Firestore permission error**
Make sure Firestore is created in test mode. Go to Firebase Console → Firestore → Rules and check the rules allow read/write.
