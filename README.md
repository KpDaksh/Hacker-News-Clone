Hacker News Clone
This project is a clone of the Hacker News Algolia website, built with React and Redux. The app includes features like live search, pagination, user login, and more, to provide a complete user experience similar to the original site.

Table of Contents
Overview
Features
Getting Started
Installation
Usage
Deployment
Built With
Overview
This is a React app that replicates the functionality of the Hacker News Algolia website, including dynamic searching, pagination, and user login. This app demonstrates my skills in React, Redux, and API integration while mimicking the UI and UX of the original Hacker News Algolia website.

Features
User Login: Users must log in with a username and password to access the app. Once logged in, the username is displayed in the dashboard's top left corner.
Live Search: The search bar updates results dynamically as the user types, fetching data from the Hacker News API in real time.
Pagination: Users can navigate through pages of results with buttons at the bottom of the screen, which fetches data for each page.
Search History in URL: The app maintains search terms in the URL, allowing users to share or bookmark search results.
Local Storage: User data and search history are saved to the browser's local storage.
Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites
You’ll need Node.js and npm installed on your machine. You can download them from Node.js.

Installation
Clone the repository:

bash
Copy code
git clone <https://github.com/KpDaksh/Hacker-News-Clone>


bash
Copy code
cd hacker-news-clone
Install the dependencies:

bash
Copy code
npm install
Usage
To start the development server:

Deployment
The app is deployed on Netlify. You can access the live version of the project here.

Built With
React - For building the user interface.
Redux Toolkit - For managing state.
React Router - For routing between the login page and dashboard.
Axios - For making API requests to the Hacker News API.
Vite - For a faster development build tool.
Netlify - For deployment and hosting.
