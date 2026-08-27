import "./CourseItem.css";
import { FaRegSmile, FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, selectCartItems } from "../../Redux/slices/cart";

function CourseItem({ id, title, desc, image, price, teacher, studentCount }) {
  const { theme } = useSelector((store) => store.global);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const isInCart = cartItems.some((item) => item.id === id);

  const clickHandler = () => {
    if (isInCart) {
      toast.error("این دوره قبلاً به سبد خرید اضافه شده است");
      return;
    }

    dispatch(addToCart({ id, title, image, price, teacher }));
    toast.success("دوره با موفقیت به سبد خرید اضافه شد");
  };

  return (
    <div className={`courseCard ${theme}`}>
      <div className="cardHeader">
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className="cardBody">
        <h4 className="courseTitle">{title}</h4>
        <p className="courseDesc">{desc}</p>

        <div className="courseInfo">
          <div className="courseTeacher">
            <span>
              <FaRegSmile />
            </span>
            <p>{teacher}</p>
          </div>
          <div className="courseStudent">
            <p>{studentCount.toLocaleString("fa-IR")}</p>
            <span>
              <FaUsers />
            </span>
          </div>
        </div>
      </div>

      <div className="cardFooter">
        <button onClick={clickHandler} disabled={isInCart}>
          {isInCart ? "در سبد خرید" : "ثبت نام"}
        </button>
        <span className="price">{price.toLocaleString("fa-IR")} تومان</span>
      </div>
    </div>
  );
}

export default CourseItem;
