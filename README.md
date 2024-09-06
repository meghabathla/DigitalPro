# DigitalPro

DigitalPro is a modern e-commerce platform built using React with Vite for fast development, Supabase for backend services (authentication and database), and Styled Component for styling. This is a responsive e-commerce website with features like product listing, shopping cart, wishlist and user authentication.

## Tech Stack

Frontend: React (with Vite)
Backend: Supabase (for database and authentication)
Styling: Styled Component
OAuth: Google Login via Supabase

## Features

👉 Authentication

- Sign in/Sign up/Sign out: Secure and seamless authentication using Supabase.
- Password Recovery: Robust password recovery to ensure users can reset their passwords easily.
- Google Login: Quick and easy authentication via Google using Supabase's OAuth integration.

👉 User Profile

- User Page: It displays user details including avatar and profile information.

👉 Home Page

- Product Highlights: Features a swiper for showcasing highlighted products.

👉 Store Page

- Product Listing: Displays products with a dynamic sidebar filter. The filter updates the product listings based on parameters visible in the URL, allowing easy sharing and bookmarking of filtered views. You can add the products here and get a snackbar message confirming the action.

👉 Product Description Page

- Product Details: Includes detailed product information and highlights.
- Wishlist & Cart: Add items to the wishlist or cart with a snackbar message confirming the action.

👉 Wishlist Page

- Manage Wishlist: Allows authenticated users to add, remove, and move products from the wishlist to the cart.

👉 Cart

- View Cart: Displays cart items with options to remove items or proceed to checkout.

👉 Checkout Page

- Shipping Address & Payment: Users can add their address and choose a payment option to complete the purchase.

### Installation and Setup

Install the project dependencies using npm:

`npm install`

Running the Project

`npm run dev`
