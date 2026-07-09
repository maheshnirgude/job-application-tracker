# Job Application Tracker

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## Overview

The Job Application Tracker is a modern, single-page application built with React and Vite, designed to streamline the process of monitoring job applications. Users can effortlessly track applications across various status columns, leveraging React's component-based architecture, hooks for state management, and derived state for a responsive user experience. All application data is persistently stored in the browser's local storage.

<!-- Add a screenshot of the application here -->
<!-- Example: ![Job Application Tracker Screenshot](docs/screenshot.png) -->

## Features

*   **Status-based Tracking**: Organize job applications into distinct status columns (e.g., "Applied", "Interviewing", "Offer", "Rejected").
*   **Application Management**: Easily add new applications with company, position, and other relevant details.
*   **Persistent Storage**: All application data is automatically saved to and loaded from `localStorage`, ensuring data persists across browser sessions.
*   **Dynamic UI**: A responsive and intuitive user interface built using a component-driven React architecture.
*   **State Management with Hooks**: Leverages React Hooks (`useState`, `useEffect`) for efficient and predictable state management.
*   **Derived State**: Optimizes performance and data consistency by deriving display data from core application state.

## Tech Stack

| Technology   | Description                                                     |
| :----------- | :-------------------------------------------------------------- |
| **React**    | A JavaScript library for building user interfaces.              |
| **JavaScript** | The core programming language for dynamic web content.          |
| **HTML**     | Standard markup language for structuring web pages.             |
| **CSS**      | Stylesheet language used for styling web page elements.         |
| **Vite**     | A fast development build tool that provides an efficient dev server. |

## Installation

To get a local copy of this project up and running, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/job-application-tracker.git
    cd job-application-tracker
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```

    The application will typically be accessible at `http://localhost:5173`.

## Usage

Once the development server is running, open your web browser and navigate to the local address provided by Vite (e.g., `http://localhost:5173`).

*   **Add Applications**: Use the provided form to input details for new job applications.
*   **Track Status**: New applications will appear in a default status column.
*   **Update Progress**: You can move application cards between different status columns to reflect their current stage in the hiring process.
*   **Persistence**: All changes are automatically saved and reloaded, ensuring your application data is always up-to-date even after closing and reopening your browser.

## Project Structure

.
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ApplicationForm.jsx     # Component for adding new job applications
│   │   └── StatusColumn.jsx        # Component for displaying applications in a specific status
│   ├── App.jsx                     # Main application component, manages overall state
│   ├── main.jsx                    # Entry point for the React application
│   └── styles.css                  # Global styles for the application
├── index.html                      # Main HTML file
├── package.json                    # Project dependencies and scripts
├── vite.config.js                  # Vite configuration file
└── README.md                       # Project README file

## Interview Q&A

Here are some realistic questions a recruiter might ask about this project, along with strong answers:

### Q1: This project utilizes `localStorage` for data persistence. What are the advantages and disadvantages of using `localStorage` compared to a server-side database or a client-side state management library like Redux?

**A**: "Using `localStorage` offers simplicity and offline availability, making it ideal for small, client-side applications like this one where data doesn't need to be shared across devices or users. It's easy to implement and provides instant persistence without requiring a backend. However, its disadvantages include limited storage capacity (typically 5-10MB), being synchronous (which can block the main thread for large operations), and lacking complex querying or relationship capabilities. It's also browser-specific and vulnerable to cross-site scripting (XSS) attacks if not handled carefully. For larger, more complex applications requiring data synchronization, user authentication, or advanced querying, a server-side database coupled with a robust API or a more sophisticated client-side state management solution would be necessary."

### Q2: The description mentions 'derived state'. Can you explain what derived state is in the context of this React application and provide an example of where you might have used it?

**A**: "Derived state refers to state that can be computed from existing state or props, rather than being stored directly in its own `useState` hook. It helps keep your state minimal, reduces redundancy, and avoids inconsistencies. In this Job Application Tracker, an example of derived state would be calculating the *total number of applications* or the *number of applications in a specific status column*. Instead of having a separate `applicationsCount` state, I would simply map or filter the primary `applications` array (which holds all application objects) and then get its `.length` property. This ensures the count is always accurate and reflects the current `applications` state without needing to manually update a separate counter every time an application is added, deleted, or its status changes."

### Q3: How did you structure your React components (`ApplicationForm.jsx`, `StatusColumn.jsx`, `App.jsx`) to manage the application's state and facilitate communication between them, particularly when moving applications between columns?

**A**: "In this project, `App.jsx` serves as the main container, holding the central state for all job applications (likely an array of application objects). This state is managed using the `useState` hook. `ApplicationForm.jsx` is a presentational component responsible for collecting new application details. When a new application is submitted, it calls a function passed down as a prop from `App.jsx` to update the central application state. Similarly, `StatusColumn.jsx` components receive a filtered subset of applications (based on their specific status) as props. To facilitate moving applications, `StatusColumn.jsx` components expose an event handler (e.g., `onMoveApplication`), also passed down as a prop from `App.jsx`. When an application is dragged and dropped, this handler is triggered, receiving the application's ID and its new status. `App.jsx` then updates its central state accordingly, causing a re-render that reflects the application in its new column. This pattern of lifting state up and passing callback functions as props ensures a single source of truth for application data while allowing child components to trigger necessary state changes."

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
