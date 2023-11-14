# Kanban Board App
A simple Kanban board app built with React.js, Firebase, Tailwind CSS, and React Beautiful DnD.

## Table of Contents
* [Overview](#overview)
* [Technologies](#technologies)
* [Key Features](#key-features)
* [Getting Started](#getting-started)
* [Acknowledgements](#acknowledgements)


## Overview
Kanban is a dynamic and adaptable tool crafted to streamline task management. Featuring an intuitive user interface and a drag-and-drop functionality, this app empowers users to efficiently organize and prioritize their tasks using the Kanban methodology. Users have the flexibility to create boards with customized colors, add and rearrange tasks based on their status, and easily delete both boards and tasks accordingly. Users can also access additional information for each individual board, namely creation and last update timestamps, for a comprehensive view of their task management history.

## Technologies
* React (v18)
* React Beautiful DnD (v14)
* React Router DOM (v6)
* React Toastify (v9)
* Firebase (v10)
* Tailwind CSS (v3)

## Key Features
* Authentication and Authorization:
  - Utilizes Firebase Auth Email and password-based authentication for seamless account creation and login functionality.
  - Ensures a safe and personalized experience, allowing users to securely save and access their data with confidence.
  - Implements route guards to enforce authorization rules, restricting content and navigating users to the appropriate parts of the application based on authentication status. 
* Boards and Task Management:
  - Uses Cloud Functions and Firestore triggers for seamless synchronization between user-specific collections.
  - Uses React Toastify to provide user-friendly visual cues for real-time updates and interactions within the application.
* Drag-and-Drop Functionality:
  - Leverages React Beautiful DnD to empower users to effortlessly rearrange tasks based on priority and status.
  - Responsive layout designed to adapt seamlessly to various screens and mobile devices.

## Getting Started
### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
### Installation
1. Clone the repository to your local machine:
```
git clone https://github.com/juls-codes/kanban/
```
2. Navigate to the project directory:
```
cd kanban
```
3. Install the dependencies:
```
npm install
```
### Firebase Configuration
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. On the Firebase Build Tab, navigate to Firestore Database to set up Firestore for your project.
3. Register Firebase to your web app and obtain the Firebase SDK.
4. Create a firebase.js file inside the `src` folder and paste the Firebase SDK you have been provided.
4. Log in to Firebase on the terminal using this command:
```
firebase login
```
5. After successful authentication, you can now initialize Firebase for this project by:
```
firebase init
```

### Run the App
1. Start the development server:
```
npm run dev
```
2. Open your browser and go to http://localhost:XXXX/ to see the app in action. Make sure the port (XXXX) in the URL matches the port where your development server is running.

## Acknowledgments
A tutorial by [Desi Codes](https://www.youtube.com/@desicodes) was used as valuable reference to this project. A special thanks to [Desi Codes](https://www.youtube.com/@desicodes) for sharing their knowledge and contributing to the developer community.

[Back to Top](#kanban-board-app)
