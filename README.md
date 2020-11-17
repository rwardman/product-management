# Product Management

This repository contains the backend and frontend of a product management application. The frontend is written in Javascript, using the React Library. The backend services are written in Java. Both must be running for the application to run successfully.

## Quick Start

- Run the backend application, and it should be running at `localhost:8080`.
- Run the front end application using `yarn start` when inside the ui folder, this run the frontend and it should open the application at `localhost:3000`

Open [http://localhost:3000](http://localhost:3000) to view the application.


## Backend

The backend is written in Java, using Spring Boot using the Model View Controller design pattern. There are corresponding tests for each of the services and controllers, with a high level of coverage.

### Improvements
- Add new functionality such as a search service
- Functionality to modify and delete data, using POST, PUT and DELETE methods

## Data

The data for this application is loaded from two CSV files. This is done via a `@PostConstruct` annotation that runs only once when the application starts.

### Improvements
- The data source should be replaced with a database. 

## Frontend

The frontend is written in JavaScript using the React Library. The frontend uses Axios to retreive data from the backend. The application is styled using styled components.

This application runs most successfully in Chrome or Firefox.

### Improvements
 
 - A greater focus on accessibility
 - New features: Search, display a single product, and allow editing
 - Routing
 - Improved state management, such as React Context

### The Design

The design of the frontend is based on the principles of responsive, mobile first design. Initial designs are s similar to the below.

![App Design](./AppDesign.png)
