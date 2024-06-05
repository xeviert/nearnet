# NearNet

NearNet is a modern web application designed to facilitate neighborhood interactions and foster a sense of community among residents. Inspired by platforms like Nextdoor, NearNet allows users to connect, share, and engage with their local community through various features such as posting favors, profile management, and real-time updates.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**
  - Login and Registration with session-based authentication using cookies.
- **Profile Management**
  - User profiles displaying personal information.
- **Posting Favors**
  - Users can post favors (tasks or requests for help) with details such as title, payment, and description.
  - Real-time updates ensuring the most recent posts are displayed at the top of the feed.
- **Feed**
  - Displays all favors posted by users in reverse chronological order.
- **Responsive Design**
  - Adaptable navigation bar based on user authentication status.
  - Fully responsive and mobile-friendly design.
- **Persistent State**
  - User sessions and posts stored in session storage, ensuring data persistence across page reloads within the same session.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and building static websites.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **js-cookie**: A lightweight JavaScript library for handling cookies.
- **bcryptjs**: A library for hashing passwords to ensure secure storage of user credentials.

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/nearnet.git
   cd nearnet
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Application

1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser and navigate to http://localhost:3000 to see the application in action.

## File Structure
  ```arduino
nearnet/
├── public/
│ ├── images/
│ │  └── community.jpg
│ └── favicon.ico
├── src/
│ ├── components/
│ │  ├── Footer.js
│ │  ├── NavBar.js
│ │  ├── StatusContainer.js
│ │  └── StatusUpdater.js
│ ├── context/
│ │   ├── FavorContext.js
│ │   └── UserContext.js
│ ├── helpers/
│ │ └── authMiddleware.js
│ ├── pages/
│ │ ├── api/
│ │ │ ├── auth.js
│ │ │ ├── login.js
│ │ │ ├── logout.js
│ │ │ └── register.js
│ │ ├── about.js
│ │ ├── feed.js
│ │ ├── index.js
│ │ ├── login.js
│ │ ├── profile.js
│ │ └── register.js
│ ├── favorsStore.js
│ └── userStore.js
├── .gitignore
├── .eslintrc.json
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License
This project is licensed under the MIT License.
