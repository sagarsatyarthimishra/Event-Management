import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './common/Navbar';
import services from '../utils/servicesData';
import './Listings.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// Helper to get price as a number
const getPriceValue = (priceStr) => Number(priceStr.replace(/[^0-9.-]+/g,""));

const priceRanges = [
  { label: '1 - 1,000', min: 1, max: 1000 },
  { label: '1,001 - 2,000', min: 1001, max: 2000 },
  { label: '2,001 - 5,000', min: 2001, max: 5000 },
  { label: '5,001 - 10,000', min: 5001, max: 10000 },
  { label: '10,001+', min: 10001, max: Infinity },
];

const Listings = () => {
  const query = useQuery();
  const category = query.get('category');
  const service = services.find(s => s.name === category);

  // State for price filter and sort
  const [selectedRange, setSelectedRange] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  if (!service) {
    return (
      <div className="service-listing-container">
        <Navbar />
        <h2>No service found for "{category}"</h2>
      </div>
    );
  }

  // Filter images by price range
  let filteredImages = service.images;
  if (selectedRange) {
    filteredImages = filteredImages.filter(img => {
      const price = getPriceValue(img.price);
      return price >= selectedRange.min && price <= selectedRange.max;
    });
  }

  // Sort images by price
  filteredImages = filteredImages.sort((a, b) => {
    const priceA = getPriceValue(a.price);
    const priceB = getPriceValue(b.price);
    return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
  });

  return (
    <div>
      <Navbar />
      <div className="listings-layout">
        {/* Sidebar */}
        <aside className="filter-sidebar">
          <h3>Filter</h3>
          <div>
            <strong>Price Range</strong>
            <ul>
              {priceRanges.map((range, idx) => (
                <li key={idx}>
                  <label>
                    <input
                      type="radio"
                      name="price"
                      checked={selectedRange === range}
                      onChange={() => setSelectedRange(range)}
                    />
                    {range.label}
                  </label>
                </li>
              ))}
              <li>
                <label>
                  <input
                    type="radio"
                    name="price"
                    checked={selectedRange === null}
                    onChange={() => setSelectedRange(null)}
                  />
                  All
                </label>
              </li>
            </ul>
          </div>
          <div>
            <strong>Sort by Price</strong>
            <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </aside>
        {/* Main Content */}
        <main className="service-listing-container">
          <h2>{service.name}</h2>
          <div className="service-images-list">
            {filteredImages.length === 0 ? (
              <div>No images in this price range.</div>
            ) : (
              filteredImages.map((img, i) => (
                <div key={i} className="service-image-block">
                  <img src={img.src} alt={`${service.name} ${i + 1}`} className="service-image" />
                  <div className="service-image-description">{img.description}</div>
                  <div className="service-image-price">{img.price}</div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Listings;