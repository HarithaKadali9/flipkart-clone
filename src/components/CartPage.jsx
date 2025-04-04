import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom"; 
const CartPage = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="justify-items-center">
      <h2>Cart Page</h2>
      <p>Total Items: {totalQuantity}</p>
      <ul className="flex flex-wrap justify-between p-4 m-4 rounded">
        {items.map((item, index) => (
            <li key={index} className="border border-black rounded-lg p-4 m-4 shadow-md">
            <img className="h-20 w-20 rounded" src={item.image} alt={item.name}/>
            <h1>{item.name}</h1>
            <h3>Rs. {item.rupees}/-</h3>
            <h3>Quantity: {item.quantity}</h3>
            <button className="border bg-green-500 text-white px-2 mx-2" 
            onClick={()=>dispatch(addItem(item))}>
              +
            </button>
            <button className="border bg-red-500 text-white px-2 mx-2" 
            onClick={()=>dispatch(removeItem(item))}>
              -
            </button>
          </li>
        ))}
      </ul>
      <p className="text-bold">Total Price: {totalPrice}/-</p>
      <button className='border bg-green-400 text-white rounded p-2'
      onClick={()=>{
        navigate("/proceedtopayment");
      }}
      >Proceed to payment</button>
      <button className='border bg-red-500 text-white rounded p-2' onClick={()=>{
        navigate("/");
      }}
      >Cancel</button>
    </div>
  );
};

export default CartPage;
