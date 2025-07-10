# Library Management System(Backend)
A scalable backend API for managing a library system. Built with ``TypeScript``, ``Express``, and ``MongoDB``, this application supports book management, borrowing operations, and insightful summaries using **Mongoose's** aggregation framework.

---
## Features
### Book Management
- Create a new book record
- Get all books with:
  - Filtering by genre (`FICTION`, `NON_FICTION`, `SCIENCE`, `HISTORY`, `BIOGRAPHY`, `FANTASY`)
  - Limit the number of returned books (default limit 10)
- Get a single book by bookID
- Update book details
- Delete a book

### Borrowing System
- Borrow a book by providing:
  - Book title
  - Quantity
  - Due date (return date)
- Automatically decrease book copies after borrow (via static method)
- Borrow record is saved with:
  - Book title
  - Quantity
  - Due date
---
## Tech Stack
- **Language**: TypeScript
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Tools**: 
  - CORS
  - `dotenv` for environment variables
  - `ts-node-dev` for development
  - ESLint for code quality
---
## Getting Started
### Prerequisites
- [Node.js](https://nodejs.org/) v22.15.0
- [MongoDB](https://www.mongodb.com/) v8.0.10
- [Git](https://git-scm.com/)

### Clone the Repository
**1. Clone the Repository**
<pre><code>
https://github.com/Ridoy5315/L2-Library-Management-server.git
</code></pre>
**2. Install Dependencies**
<pre><code>
npm install
</code></pre>
**3. Environment Variables**
<pre><code>
NODE_ENV=development
PORT=8000
DATABASE_URL=mongodb+srv://library-management:PwMdYPuONoDhrk0u@cluster0.oggyj.mongodb.net/library-management?retryWrites=true&w=majority&appName=Cluster0
</code></pre>
**4. Run**
<pre><code>
npm run dev
</code></pre>
---
## API Endpoints
### Book Routes 
|  Method   |     Endpoint     |
|-----------|------------------|
|   POST    |    /api/books    |
|    GET    | /api/books?page=${page} |
|    GET    |  /api/books/:id  |
|   PATCH   |  /api/books/edit-book/${id}  |
|   DELETE  |  /api/books/delete-book/${id}  |

### Borrow Routes 
|  Method   |     Endpoint     |
|-----------|------------------|
|   POST    |    /api/borrow   |
|    GET    |    /api/borrow-summary   |

### Testing
You can use Postman, Insomnia or others app to test the API endpoints manually. But i am used Postman to test the API.

### Author
**MD MAHBUBUL ISLAM RIDOY**

Software Engineering Student – Donghua University