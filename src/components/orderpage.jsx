import React, { useState } from 'react';

const items = [
  { id: 1, name: 'Apple', category: 'Groceries', price: 100 },
  { id: 2, name: 'Laptop', category: 'Electronics', price: 50000 },
  { id: 3, name: 'Milk', category: 'Groceries', price: 50 },
  { id: 4, name: 'Phone', category: 'Electronics', price: 20000 },
  { id: 5, name: 'Headphones', category: 'Electronics', price: 2000 },
  { id: 6, name: 'Bread', category: 'Groceries', price: 30 },
];

function OrderPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceFilter, setPriceFilter] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceFilter(Number(event.target.value));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const filteredItems = items.filter((item) => {
    return (
      (selectedCategory === 'All' || item.category === selectedCategory) &&
      item.price >= priceFilter &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      {/* Filters */}
      <div>
        <label>
          Category:
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="All">All</option>
            <option value="Groceries">Groceries</option>
            <option value="Electronics">Electronics</option>
          </select>
        </label>

        <label>
          Minimum Price:
          <input
            type="number"
            value={priceFilter}
            onChange={handlePriceChange}
            placeholder="Enter minimum price"
          />
        </label>

        <label>
          Search:
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by name"
          />
        </label>
      </div>

      {/* Item List */}
      <div>
        <h2>Items</h2>
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.category} - ₹{item.price}{' '}
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Cart */}
      <div>
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
        <h3>
          Total: ₹
          {cart.reduce((total, item) => total + item.price, 0)}
        </h3>
      </div>
    </div>
  );
}

export default OrderPage;
