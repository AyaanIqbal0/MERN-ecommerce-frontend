import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { server } from "../redux/store";
import {  CartItem as CartItemType } from "../types/types";



type CartItemProps = {
  cartItem: CartItemType;
  increamentHandler: (cartItem: CartItemType) => void;
  decreamentHandler: (cartItem: CartItemType) => void;
  removeHandler: (id: string) => void;
};

const CartItem = ({
  cartItem,
  increamentHandler,
  decreamentHandler,
  removeHandler,
}: CartItemProps) => {
  const { photo, productId, name, price, quantity } = cartItem;
  return (
    <div className="cart-item">
      <img src={`${server}/${photo}`} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span> ₹ {price}</span>
      </article>
      <div>
        <button onClick={() => decreamentHandler(cartItem)}>-</button>
        <p>{quantity}</p>
        <button onClick={() => increamentHandler(cartItem)}>+</button>
      </div>
      <button onClick={() => removeHandler(productId)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
