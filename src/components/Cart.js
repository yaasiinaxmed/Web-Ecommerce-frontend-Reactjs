import React, { useContext } from "react";
import { IoArrowForward, IoCartOutline, IoClose } from "react-icons/io5";
import CartItem from "./CartItem.js";
import { CartContext } from "../context/CartContext.js";

const Cart = () => {
  const { setIsOpen , cart, total, clearCart} = useContext(CartContext);
  return (
    <div className="w-full h-full px-4 text-white">
      <div className="overflow-y-auto overflow-x-hidden h-[75vh]">
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="text-4xl w-20 h-[98px] flex justify-start
      items-center cursor-pointer "
        >
          <IoClose />
        </div>
        <div className=" flex flex-col gap-y-4">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      </div>
      {cart.length >= 1 && (
        <div className="flex flex-col">
          <div className="flex justify-between text-lg">
            <h3>Subtotal:</h3>
            <span>${total}</span>
          </div>
          <div className="flex justify-between text-2xl">
            <h3>Total:</h3>
            <span>${total}</span>
          </div>
        </div>
      )}

      {/* buttons */}
      <div className="py-6">
        {cart.length >= 1 ? (
          <div className="flex justify-between gap-x-4">
            <button 
            onClick={clearCart}
            className="btn btn-accent hover:bg-accent-hover text-primary">
              Clear Cart
            </button>
            <button className="btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2">
              Checkout
              <IoArrowForward className="text-lg"/>
            </button>
          </div>
        ) : (
          <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center -z-10 flex-col text-white/30">
            <h2 className="text-2xl">Your cart is Empty</h2>
            <span className="text-6xl">
            <IoCartOutline/>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
