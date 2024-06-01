/* import React from 'react';
import '../styles/Productos.css';
import Pagination from './Pagination.jsx';
import {useState} from 'react';

const itemsPerPage = 6;

const Productos = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const currentProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {currentProducts.map(product => (
                <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-4 text-center">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-gray-800 font-bold">{product.price}</p>
                </div>
                ))}
            </div>
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={setCurrentPage} 
            />
        </div>
    );
};
return Productos;
 */
