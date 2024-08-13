// components/BillDetails.js
import React, { useState } from 'react';

const BillDetails = ({ onAddItem }) => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddItem = () => {
        // Validation
        if (!item.trim()) {
            setErrorMessage('Please input data in the Item section.');
            return;
        }

        // Check if the item contains only alphabetical characters
        if (!/^[a-zA-Z\s]+$/.test(item)) {
            setErrorMessage('Item should only contain alphabetical characters and spaces.');
            return;
        }

        // Check if quantity and price are positive numbers
        if (quantity <= 0 || price < 0) {
            setErrorMessage('Quantity should be greater than 0 and price should be non-negative.');
            return;
        }

        const newItem = { item, quantity: Number(quantity), price: Number(price) };
        onAddItem(newItem);
        setItem('');
        setQuantity(1);
        setPrice(0);
        setErrorMessage('');
    };

    return (
        <div>
            <label>Item:</label>
            <input 
                type="text" 
                value={item} 
                onChange={(e) => setItem(e.target.value)} 
            />
            <label>Quantity:</label>
            <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))} 
                min="1" // Prevents negative values
            />
            <label>Price:</label>
            <input 
                type="number" 
                value={price} 
                onChange={(e) => setPrice(Number(e.target.value))} 
                min="0" // Prevents negative values
            />
            <button onClick={handleAddItem}>Add Item</button>
            <p style={{ color: 'red' }}>{errorMessage}</p>
        </div>
    );
};

export default BillDetails;

