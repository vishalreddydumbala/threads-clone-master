# Thread

This project is a simplified clone of a thread application, developed using React for the frontend and Node.js for the backend.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Thread Creation**: Users can create new threads to start discussions.
- **Commenting**: Users can comment on existing threads to participate in discussions.
- **Authentication**: User authentication is implemented to ensure secure access to the application.
- **Responsive Design**: The frontend is designed to be responsive, providing a seamless experience across different devices.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine. You can download it from [here](https://nodejs.org/).
- npm (Node Package Manager) installed with Node.js.

## Installation

To install the dependencies, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/vishalreddydumbala/threads-clone-master.git
    ```

2. Navigate to the project directory:

    ```bash
    cd threads-clone-master
    ```

3. Install the necessary dependencies for both the frontend and backend:

    ```bash
    # Build the project
    npm run build
    ```

## Usage

To start the application, follow these steps:

1. Create a .env file in project directory with below variables:
    ```bash
    # Port for the server
    PORT=
    # Mongo db connection uri
    MONGO_URI=
    # Random jwt secret
    JWT_SECRET=
    # Cloudinary for storing post images
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=
    ```

2. Start the project:

    ```bash
    # Navigate to the project directory
    npm start
    ```

3. Access the application in your web browser by visiting `http://localhost:5000`.
