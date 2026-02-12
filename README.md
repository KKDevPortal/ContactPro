# ContactPro

ContactPro is a simple Contact Management (CRUD) application built using **Node.js**, **React.js**, **Tailwind CSS**, and **PostgreSQL**.

It allows users to manage contacts by creating, viewing, updating, and deleting contact information.

------

## Features

- Add new contacts
- View all contacts
- Update contact details
- Delete contacts
- Mark contacts as favourite
- Store structured contact information

------

## Tech Stack

**Frontend**

- React.js
- Tailwind CSS

**Backend**

- Node.js
- Express.js

**Database**

- PostgreSQL

------

## Contact Model

```json
{
  "username": "",
  "email": "",
  "mobilenumbers": {
    "primaryNumber": "",
    "secondaryNumber": "",
    "telephoneNumber": "",
    "others": ""
  },
  "address": {
    "city": "",
    "state": "",
    "pincode": "",
    "country": ""
  },
  "isFavourite": ""
}
```

------

## Project Structure (Example)

```
contactpro
│
├── client/        # React + Tailwind frontend
├── server/        # Node.js + Express backend
└── database/      # PostgreSQL schema & configuration
```

------

## Requirements

- Node.js (v16+ recommended)
- PostgreSQL
- npm or yarn

------

## Setup Instructions

### 1. Clone the repository

```
git clone <repository-url>
cd contactpro
```

### 2. Backend Setup

```
cd server
npm install
```

Create a `.env` file and configure:

```
PORT=5000
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=contactpro
DB_PORT=5432
```

Run the backend:

```
npm start
```

### 3. Frontend Setup

```
cd client
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

Backend runs on:

```
http://localhost:5000
```

------

## API Endpoints (Example)

- `GET /contacts` – Get all contacts
- `GET /contacts/:id` – Get single contact
- `POST /contacts` – Create contact
- `PUT /contacts/:id` – Update contact
- `DELETE /contacts/:id` – Delete contact

------

## Future Improvements

- Authentication & user login
- Search and filter contacts
- Pagination
- Docker support
- Deployment setup

------

