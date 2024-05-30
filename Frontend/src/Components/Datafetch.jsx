import React, { useState } from "react";
import Product from "./Product";
 

const Datafetch = () => {
    const [response, setResponse] = useState([]);
    const [displayCount, setDisplayCount] = useState(10);
    const [page, setPage] = useState(1);

    const handleSortByPrice = () => {
        const sortedData = [...Product].sort((a, b) => a.price - b.price);
        setResponse(sortedData);
    };

    const handleDisplayCountChange = (e) => {
        setDisplayCount(Number(e.target.value));
        setPage(1);
    };

    const paginatedData = Product.slice((page - 1) * displayCount, page * displayCount);

    return (
        <div className="container">
            <button className="sort-button" onClick={handleSortByPrice}>Sort by Price</button>
            <select className="select-box" onChange={handleDisplayCountChange} value={displayCount}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={40}>40</option>
            </select>
            <input 
                className="input-box" 
                type="number" 
                value={displayCount} 
                onChange={e => setDisplayCount(Number(e.target.value))} 
                placeholder="Enter number of products" 
            />
            <div>
                {paginatedData.map((data, index) => (
                    <div key={index} className="product-card">
                        <img src="Laptop.jpg" alt="" className="img"/>
                        <h1 className="product-name">{data.productName}</h1>
                        <p className="product-details">Price: ${data.price}</p>
                        <p className="product-details">Rating: {data.rating}</p>
                        <p className="product-details">Discount: {data.discount}%</p>
                        <p className="product-details">Availability: {data.availability}</p>
                    </div>
                ))}
            </div>
            {displayCount > 10 && (
                <div>
                    <button className="pagination-button" onClick={() => setPage(prev => Math.max(prev - 1, 1))}>Previous</button>
                    <button className="pagination-button" onClick={() => setPage(prev => prev + 1)}>Next</button>
                </div>
            )}
        </div>
    );
};

export default Datafetch;
