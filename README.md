# E-Commerce Product Listing Page

A fully responsive e-commerce product listing page built with React and plain CSS. Features real-time product filtering, sorting, and a modern UI design.

## Features

- 📱 Fully responsive design (Desktop, Tablet, Mobile)
- 🔍 Product filtering by category
- 📊 Multiple sorting options (Price, Rating, Newest, Popular)
- ❤️ Favorites/Wishlist functionality
- 🎨 Clean UI with expandable/collapsible filters
- 🌐 Real-time data fetching from FakeStore API

## Tech Stack

- **React** - UI library
- **Axios** - HTTP client for API calls
- **CSS3** - Styling with media queries for responsiveness
- **FakeStore API** - Product data source

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone 
cd product-listing-page
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Open your browser**
Navigate to `http://localhost:3000`

## Usage

- **Filter Products**: Use the sidebar to filter by category, price and rating
- **Sort Products**: Click the sort dropdown to organize products by price, popularity, or date
- **Toggle Filters**: Click "HIDE/SHOW FILTER" to expand/collapse the sidebar
- **Add to Favorites**: Click the heart icon on product cards

## Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 767px

## API Reference

This project uses the [FakeStore API](https://fakestoreapi.com/)

**Endpoint**: `https://fakestoreapi.com/products`