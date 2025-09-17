//import './productsCard.css';
import {useCart } from "../contex/CartContext"
const ProductsCard = ({product}) => {
const {addToCart}=useCart()
  return (
    <div
      
      className="bg-white rounded-lg shadow p-4 flex flex-col"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-40 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-500 text-sm mb-2">{product.description}</p>
      <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
      <button 
      onClick={()=>addToCart(product)}
      className="bg-blue-600 text-white mt-3 px-4 py-5
      hover:bg-green-700
      ">
Add To Cart
      </button>
    </div>
  );
};

export default ProductsCard;