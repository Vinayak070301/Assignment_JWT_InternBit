# Assignment_JWT_InternBit

GIT Repository : https://github.com/Vinayak070301/Assignment_JWT_InternBit

🔐 Authentication with JWT
This app uses JSON Web Tokens (JWT) for secure user authentication.

🚀 1. User Signup (POST /api/auth/signup)
Registers a new user with hashed password and returns a JWT token.

Request Body:
json
Copy
Edit
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "yourPassword123"
}
Sample Response:
json
Copy
Edit
{
  "message": "User registered successfully",
  "token": "JWT_TOKEN_HERE",
  "user": {
    "id": "USER_ID_HERE",
    "fullName": "John Doe",
    "email": "john@example.com"
  }
}
🔑 2. User Login (POST /api/auth/login)
Authenticates the user and returns a JWT token.

Request Body:
json
Copy
Edit
{
  "email": "john@example.com",
  "password": "yourPassword123"
}
Sample Response:
json
Copy
Edit
{
  "message": "Login successful",
  "token": "JWT_TOKEN_HERE",
  "user": {
    "id": "USER_ID_HERE",
    "fullName": "John Doe",
    "email": "john@example.com"
  }
}
👤 3. Get User Info (GET /api/auth/user)
Fetches authenticated user details using the token.

Headers:
makefile
Copy
Edit
Authorization: Bearer JWT_TOKEN_HERE
Sample Response:
json
Copy
Edit
{
  "user": {
    "_id": "USER_ID_HERE",
    "fullName": "John Doe",
    "email": "john@example.com",
    "__v": 0
  }
}
🔧 How It Works
Passwords are securely hashed using bcrypt before storage.

Tokens are signed with a secret (process.env.JWT_SECRET) and expire in 7d.

Protected routes require a valid JWT in the Authorization header.