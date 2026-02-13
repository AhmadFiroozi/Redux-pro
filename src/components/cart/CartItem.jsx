import { MdDelete } from "react-icons/md";

import "./CartItem.css";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/slices/cart";
function CartItem({ id, image, title, price }) {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeFromCart({ id, price }));
  };
  return (
    <div className="cartItem">
      <div className="right">
        <img src={image} />
        <p>{title}</p>
      </div>
      <div className="left">
        <MdDelete size="25px" onClick={removeHandler} />
        <p>{price.toLocaleString()} تومان</p>
      </div>
    </div>
  );
}
export default CartItem;
