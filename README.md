
# Location API

## Description

Location API is a RESTful service developed using NestJS. It allows users to manage location data hierarchically, supporting operations to create, update, retrieve, and delete location entries with a focus on maintaining relationships between parent and child locations.

## Features

- Create, update, retrieve, and delete locations.
- Manage hierarchical location relationships.
- Validation of location data.
- Swagger documentation for easy API testing.
- Docker support for easy deployment and scalability.

## Technology Stack

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeORM**: An ORM that can run in Node.js and can be used with TypeScript and JavaScript (ES5, ES6, ES7, ES8).
- **PostgreSQL**: A powerful, open source object-relational database system.
- **Docker**: A set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v14.x or higher)
- npm (v6.x or higher)
- Docker (if running with Docker)
- PostgreSQL database

## Setup and Installation

### Install Dependencies

Before you begin, make sure you have Node.js and npm installed. Then, install the necessary dependencies by running the following command in your project directory:

```bash
npm install
```

### Set Up the Database

To set up your database:

1. **Ensure PostgreSQL is Installed**: Make sure that PostgreSQL is installed on your machine and that the PostgreSQL service is running. You can download it from [PostgreSQL Official Site](https://www.postgresql.org/download/).

2. **Create a Database**:
   - Open your PostgreSQL command line client and create a new database named `location_db`:
   
   ```sql
   CREATE DATABASE location_db;
   ```

3. **Configure Database Credentials**:
   - Edit the `.env` file in your project directory to include your database credentials:

   ```plaintext
   # .env
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USERNAME=your_username
   DATABASE_PASSWORD=your_password
   DATABASE_NAME=location_db
   ```

### Run Migrations

After setting up the database and ensuring all configurations are correct in the `.env` file, run the migrations to set up your database tables:

```bash
npm run db:run
```

This will apply all migrations to your database, setting up the necessary tables and relationships for the application to function correctly.

## Usage

Access the API through the base URL `http://localhost:3000/api`. For API documentation and interactive testing, visit `http://localhost:3000/api/apidoc`.

## API Endpoints

- `POST /location`: Create a new location.
- `GET /location/{id}`: Retrieve location details by ID.
- `PUT /location/{id}`: Update an existing location.
- `DELETE /location/{id}`: Delete a location.

## Development

- To contribute to the project, create a branch from `main`, make changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
