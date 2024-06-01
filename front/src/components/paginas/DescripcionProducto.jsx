/*import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/DescripcionProducto.css';

const DescripcionProducto = () => {
    const { id } = useParams();
    const product = products.find((product) => product.id === id);
  
    if (!product) {
      return <div>Producto no encontrado</div>;
    }

    return(
        <main className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <img src={product.imageUrl} alt={product.name} className="w-full" />
            </div>
            <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-2xl my-4">{product.price}</p>
                <p className="mb-4">{product.description}</p>
                <button className="bg-black text-white px-6 py-2 mb-4">Añadir al carrito</button>
            </div>
        </main>
        <section className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Productos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {product.relatedProducts.map((relatedProduct, index) => (
                <div key={index} className="text-center">
                    <img src={relatedProduct.imageUrl} alt={relatedProduct.name} className="w-full" />
                    <p className="mt-2">{relatedProduct.name}</p>
                    <p className="text-gray-500">{relatedProduct.description}</p>
                    <p className="font-bold">{relatedProduct.price}</p>
                </div>
                ))}
            </div>
        </section>
    );
};
return DescripcionProducto;
*/