import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import Qty from "./Qty";

const CartItem = ({ item }) => {
  const { removeFromCart , amount} = useContext(CartContext);

  console.log(amount)
  
  return (
    <div className="flex gap-x-8">
      <Link to={`product/${item.id}`} className="w-[70px] h-[70px] ">
        <img
          src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
          alt=""
        />
      </Link>
      <div className="flex-1">
        {/* title and remove icon */}
        <div className="flex gap-x-4 mb-3">
          <Link to={`product/${item.id}`}>{item.attributes.title}</Link>
          <div 
          onClick={() => removeFromCart(item.id)}
          className="cursor-pointer text-[24px] hover:text-accent transition-all">
            <IoClose />
          </div>
        </div>
        <div>
          {/* Quantity */}
          <div className="flex justify-between">
            {/* <div className="flex items-center justify-center gap-3">
            <span 
            className="w-6 h-6 flex items-center justify-center bg-accent text-center text-primary text-[18px] rounded-lg cursor-pointer ">-</span>
            <span className="text-lg">{item.amount}</span>
            <span 
            className="w-6 h-6 flex items-center justify-center bg-accent text-center text-primary text-[18px] rounded-lg cursor-pointer ">+</span>
            </div> */}
            <Qty item={item}/>
            <h3 className="text-lg font-medium text-accent">Totol: $ {item.attributes.price * item.amount}</h3>
          </div>
          {/* price */}
          <div className="mt-2">
            <span className="mt-2 text-accent">
            Per plece : ${item.attributes.price} 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
