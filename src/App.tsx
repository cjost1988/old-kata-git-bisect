import React from 'react';
import './App.css';

const products: Array<Product> = [
    {
        id: 12,
        title: 'Schotter',
        price: 13.37,
    },
    {
        id: 13,
        title: 'Sand',
        price: 73.31,
    },
    {
        id: 14,
        title: 'Kies',
        price: 71.37,
    },
    {
        id: 15,
        title: 'RCL',
        price: 99.99,
    },
];

function App() {
  return (
    <div className="App">
        <ul>
            {products.map((product: Product) => <li>
                {product.title}
            </li>)}
        </ul>
    </div>
  );
}

export default App;
