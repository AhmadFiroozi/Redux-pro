import { MdDelete } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseCount,
  decreaseCount,
} from "../../Redux/slices/cart";
import "./CartItem.css";

function CartItem({ id, image, title, price, count }) {
  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <div className="right">
        <img src={image} alt={title} />
        <p>{title}</p>
      </div>

      <div className="left">
        <div className="qtyControl">
          <button
            onClick={() => dispatch(increaseCount(id))}
            aria-label="افزایش تعداد"
          >
            <FiPlus />
          </button>
          <span>{count.toLocaleString("fa-IR")}</span>
          <button
            onClick={() => dispatch(decreaseCount(id))}
            aria-label="کاهش تعداد"
          >
            <FiMinus />
          </button>
        </div>

        <p>{(price * count).toLocaleString("fa-IR")} تومان</p>

        <button
          className="removeBtn"
          onClick={() => dispatch(removeFromCart(id))}
          aria-label="حذف از سبد خرید"
        >
          <MdDelete size="25px" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
