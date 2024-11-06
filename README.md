
# Mock eCommerce Website

A mock eCommerce website that replicates the functionality of an online store like Amazon, with features including product listing, detail views, cart management, address input, and mock payment processing. This project consists of a **frontend** (React) and **backend** (Node/Express) to demonstrate a full eCommerce flow.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

---

## Features

- **Homepage** with product listings
- **Product Detail Page** with quantity selection
- **Cart** to manage selected items
- **Checkout Page** to input address and select payment method
- **Mock Payment Processing** with success/failure statuses
- **Autofill Options** for quick demo purposes

---

## Tech Stack

- **Frontend**: React, React Router
- **Backend**: Node.js, Express
- **Styling**: Tailwind CSS
- **Mock API**: JSON data for products and payment processing

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v12+)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- Git

### Clone the Repository

```bash
git clone https://github.com/username/ecommerce-project.git
cd ecommerce-project
```

### Frontend

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

The frontend should now be running on `http://localhost:3000`.

### Backend

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the backend directory.
   - Add the following variables (customize as needed):
     ```env
     PORT=5000
     ```

4. **Start the server**:
   ```bash
   npm start
   ```

The backend server should now be running on `http://localhost:5000`.

---

## Usage

1. **Run Frontend**:
   - Open [http://localhost:3000](http://localhost:3000) in the browser to access the frontend.

2. **Run Backend**:
   - The backend API will be available at `http://localhost:5000`.

3. **Demo User Flow**:
   - Browse products on the homepage.
   - Select a product to view details and add to cart.
   - Go to the cart, proceed to checkout, and input the address.
   - Choose a payment method and complete the transaction.
   - View the payment success/failure page based on the simulated outcome.

---

## Project Structure

```markdown
ecommerce-project/
│
├── frontend/               # Frontend (React)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # Context for global state (CartContext)
│   │   ├── pages/          # Main pages (Home, ProductDetail, Checkout, PaymentStatus)
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/                # Backend (Node/Express)
│   ├── controllers/        # Business logic for orders, products, payments
│   ├── models/             # Mongoose schemas for Order and Product
│   ├── routes/             # Route handlers for API endpoints
│   ├── server.js           # Express app setup
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## Contributing

Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add a new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

Project developed by [Karan Joshi](mailto:karan.joshi.dev@gmail.com). Feel free to reach out for any questions.
