# FoodApp - A Manifest-Powered Application

This is a full-stack food discovery application built with React and powered exclusively by a Manifest backend. It provides a platform for restaurant owners to list their establishments and for customers to browse them.

## Features

- **User Authentication**: Secure sign-up and login for users.
- **Restaurant Management**: Authenticated users can create, view, update, and delete their own restaurant listings.
- **Menu Management**: Owners can add and manage menu items for their restaurants.
- **Public Browsing**: All visitors can view the list of restaurants.
- **Role-Based Access**: Clear distinction between customers, owners, and admins, with permissions managed by Manifest policies.
- **Fully SDK-Driven**: The frontend uses the `@mnfst/sdk` for all backend communication, with zero direct API calls.
- **Health Check**: A simple status indicator shows if the frontend is connected to the Manifest backend.

## Tech Stack

- **Backend**: Manifest (YAML-based backend-as-a-service)
- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Communication**: Manifest SDK

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- A running Manifest backend instance.

### Frontend Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root of the project and add your Manifest backend URL and App ID:
    ```
    VITE_BACKEND_URL=https://your-manifest-backend-url.com
    VITE_APP_ID=your-app-id
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

### Backend Setup

The backend is defined entirely by the `manifest.yml` file. When deployed via the Manifest platform, it automatically provisions the database, API endpoints, and an admin panel.

- **Admin Panel**: Access the auto-generated admin panel at `https://your-manifest-backend-url.com/admin`.
- **Default Admin**: Login with `admin@manifest.build` / `admin`.