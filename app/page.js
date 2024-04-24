'UseClient';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const IndexPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch meal categories from the API
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => {
        setCategories(data.categories);
      })
      .catch(error => {
        console.error('Error fetching meal categories:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Meal Categories</h1>
      <ul>
        {categories.map(category => (
          <li key={category.idCategory}>
            <Link href={`/category/${category.strCategory}`}>
              <a>{category.strCategory}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
