import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import CartItem from "../../components/cart/CartItem";
import {
  selectCartItems,
  selectCartCount,
  selectCartTotal,
} from "../../Redux/slices/cart";
import "./CartPage.css";

function CartPage() {
  const items = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);
  const { theme } = useSelector((store) => store.global);

  return (
    <div className={`cartPageContainer ${theme}`}>
      <div className="cartPage">
        {items.length === 0 ? (
          <div className="emptyCart">
            <BsCart4 size="80px" />
            <h1>سبد خرید خالی است</h1>
            <p>هنوز دوره‌ای انتخاب نکرده‌اید.</p>
            <Link to="/">مشاهدهٔ دوره‌ها</Link>
          </div>
        ) : (
          <div className="notEmptyCart">
            <div className="itemsContainer">
              {items.map((course) => (
                <div className="item" key={course.id}>
                  <CartItem {...course} />
                </div>
              ))}
            </div>

            <div className="totalCart">
              <span>
                <p>تعداد دوره: {cartCount.toLocaleString("fa-IR")}</p>
                <p>مجموع سبد خرید</p>
                <b>{total.toLocaleString("fa-IR")} تومان</b>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
