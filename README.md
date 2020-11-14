# Product Management

This repository contains the backend and frontend of a product management application. The frontend is written in Javascript, using the React Library. The backend services are written in Java. Both must be running for the application to run successfully.

## Quick Start

- Run the backend application, and it should be running at `localhost:8080`.
- Run the front end application using `yarn start`, this will open the application at `localhost:3000`

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Frontend

The frontend is written in JavaScript using the React Library. The frotend uses Axios to retreive data from the backend. This application runs most successfully in Chrome or Firefox.

## Backend

The backend is written in Java, using Spring Boot using the Model View Controller design pattern. There are corresponsing tests for each of the services and controllers, with a high level of coverage.

## Data

The data for this application is loaded from two CSV files. This is done via a `@PostConstruct` annotation that runs only once when the applcication starts. To improve the application this could be repalced with a database.
