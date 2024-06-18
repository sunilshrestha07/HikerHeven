# Hiker Heaven

Hiker Heaven is a hiking website built using the MERN stack with TypeScript and Tailwind CSS. The platform allows users to explore various hikes, view details without logging in, and requires authentication for posting reviews or saving hikes. Firebase is used for authentication, enabling users to log in with Google. Administrators have the capability to post new hikes and manage user reviews.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description
Hiker Heaven is a comprehensive hiking platform designed for outdoor enthusiasts. Users can browse and explore hikes without the need for an account. To engage further by posting reviews or saving favorite hikes, users must log in through Google authentication. Administrators have exclusive rights to add new hikes and moderate user reviews, ensuring the platform remains informative and user-friendly.

## Features
- Browse and view hikes without logging in.
- Log in with Google to post reviews and save hikes.
- Administrators can add new hikes and manage user reviews.
- Persistent storage using user persist store to manage state and retain user data.
- User-friendly interface styled with Tailwind CSS.

## Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** Firebase (Google login)
- **State Management:** Redux with user persist store

## Installation
Follow these steps to set up the project locally:

### Prerequisites
- Node.js and npm installed
- MongoDB instance running
- Firebase project setup

### Backend Setup
1. Clone the repository:
    ```bash
    https://github.com/sunilshrestha07/HikerHeven.git
    cd hiker-heaven
    ```

2. Install backend dependencies:
    ```bash
    cd server
    npm install
    ```

3. Create a `.env` file in the `server` directory and add the following:
    ```env
    MONGODB_URI=your_mongodb_uri
    FIREBASE_API_KEY=your_firebase_api_key
    FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    FIREBASE_PROJECT_ID=your_firebase_project_id
    ```

4. Start the backend server:
    ```bash
    npm run dev
    ```

### Frontend Setup
1. Install frontend dependencies:
    ```bash
    cd ../client
    npm install
    ```

2. Create a `.env` file in the `client` directory and add the following:
    ```env
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_BASE_URL=http://localhost:5000
    ```

3. Start the frontend server:
    ```bash
    npm start
    ```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Browse and explore available hikes.
3. Log in with your Google account to post reviews and save your favorite hikes.
4. Admin users can post new hikes and manage user reviews from the admin panel.

## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy Hiking! Enjoy exploring and contributing to Hiker Heaven.
