# Backend API Documentation

## Overview
This backend application provides APIs for user authentication, including registering new users, logging in, and other user-related functionalities. Below is the detailed documentation of each route, including prerequisites and expected responses.

## Prerequisites
Before you start using the API, ensure you have the following:
- **Base URL:** `http://<your-server-domain>:<port>`
- **Authentication:** Some routes may require an authentication token.
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: Bearer <token>` (for protected routes)

## Routes

### Root Route
- **URL:** `/`
- **Method:** `GET`
- **Description:** Returns a welcome message to indicate the backend is running.
- **Response:**
  ```json
  {
    "message": "welcome to Backend"
  }
  ```

---

### Authentication Routes
#### Register User
- **URL:** `/auth/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  - **201 Created:**
    ```json
    {
      "message": "User created successfully"
    }
    ```
  - **400 Bad Request:**
    ```json
    {
      "message": "User already exists"
    }
    ```
  - **Error:**
    ```json
    {
      "message": "something went wrong with server",
      "error": "<error-message>"
    }
    ```

#### Login User
- **URL:** `/auth/login`
- **Method:** `POST`
- **Description:** Logs in an existing user.
- **Request Body:**
  ```json
  {
    "email": "johndoe@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  - **200 OK:**
    ```json
    {
      "message": "Logged in successfully",
      "token": "<JWT-token>"
    }
    ```
  - **404 Not Found:**
    ```json
    {
      "message": "User not found"
    }
    ```
  - **400 Bad Request:**
    ```json
    {
      "message": "Invalid credentials"
    }
    ```

---

### User Routes
#### Get User Information
- **URL:** `/auth/user`
- **Method:** `GET`
- **Description:** Retrieves the user's details.
- **Headers:**
  ```
  Authorization: Bearer <token>
  ```
- **Response:**
  - **200 OK:**
    ```json
    {
      "user": {
        "_id": "<user-id>",
        "firstname": "John",
        "lastname": "Doe",
        "email": "johndoe@example.com"
      }
    }
    ```
  - **401 Unauthorized:**
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Update User
- **URL:** `/auth/user`
- **Method:** `PUT`
- **Description:** Updates the user's information.
- **Headers:**
  ```
  Authorization: Bearer <token>
  ```
- **Request Body:**
  ```json
  {
    "firstname": "John",
    "lastname": "Smith"
  }
  ```
- **Response:**
  - **200 OK:**
    ```json
    {
      "message": "User updated successfully"
    }
    ```
  - **400 Bad Request:**
    ```json
    {
      "message": "Invalid data"
    }
    ```

---

## Advanced Features
### Versioning
Ensure APIs are versioned to support future updates without breaking existing integrations. E.g., `/v1/auth/register`.

### Pagination
For routes returning lists, implement pagination to handle large datasets efficiently.
- Query Parameters: `?page=1&limit=10`

### Rate Limiting
Implement rate limiting to prevent abuse. For example, limit to 100 requests per minute per user.

### Error Handling
Provide clear error messages and HTTP status codes for every API.

### Security
- Use HTTPS to secure API communication.
- Use JWT tokens for authentication.
- Validate and sanitize input to prevent injection attacks.

---

## Conclusion
This documentation provides a comprehensive overview of the backend API. By following the guidelines, developers can easily integrate with and use the APIs to build reliable and scalable applications.

