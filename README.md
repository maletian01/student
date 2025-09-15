# Student Management System

This project is a simple Student Management System built with TypeScript. It provides functionalities to manage student records, including adding, retrieving, updating, and deleting student information.

## Project Structure

```
student-management-system
├── src
│   ├── app.ts                  # Entry point of the application
│   ├── controllers
│   │   └── studentController.ts # Handles student-related operations
│   ├── models
│   │   └── student.ts          # Defines the Student model
│   ├── routes
│   │   └── studentRoutes.ts     # Sets up student-related routes
│   └── types
│       └── index.ts            # Defines TypeScript types and interfaces
├── package.json                 # npm configuration file
├── tsconfig.json                # TypeScript configuration file
└── README.md                    # Project documentation
```

## Features

- Add a new student
- Retrieve student information
- Update existing student details
- Delete a student record

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd student-management-system
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```

## License

This project is licensed under the MIT License.