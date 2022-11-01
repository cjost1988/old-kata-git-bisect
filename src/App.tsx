import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {FormattedNumber} from "react-intl";

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
    const [search, setSearch] = useState('');
    return (
        <div className="App">
            <b>Search:</b> <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}/>
            <div className="product-list">
                {products
                    .filter((product: Product) => (new RegExp(search, 'i')).test(product.title))
                    .map((product: Product) => [
                        <div key={'id' + product.id}>#{product.id}</div>,
                        <div key={'title' + product.id}>{product.title}</div>,
                        <div key={'price' + product.id} className="product-list-item-price">
                            <FormattedNumber value={product.price} style="currency" currency="USD"/>
                        </div>,
                    ])
                }
            </div>
        </div>
    );
}

export default App;
