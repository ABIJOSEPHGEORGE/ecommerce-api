
# eCommerce Project

This is an eCommerce project that implements basic functionalities such as user authentication (login and signup), product listing, order creation, order history, and single product view.

## Features

- User Authentication:
- Product Listing:
- Product Creation
- Order Creation:
- Order History:
- Single Product View:

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT) for authentication
- Postman for API testing

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/ecommerce-project.git
```

2. Install the dependencies:

```bash
npm install
```

3. Set up the environment variables:
   - Create a `.env` file in the project's root directory.
   - Specify the required environment variables such as the database connection URL, JWT secret key, etc.

4. Start the development server:

```bash
npm start
```

5. Access the application in your browser at `http://localhost:3000` (or the specified port).

## API Endpoints

- `/auth/signup` - user signup
- `/auth/login` - user login
- `/admin/login` - Admin login
- `/admin/product/create/` - create new product
- `/products` - Get all products
- `/product/:id` - Get single product
- `/user/orders` - Get order history for the current user
- `/user/order` - generating new order
