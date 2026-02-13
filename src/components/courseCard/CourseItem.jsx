import "./CourseItem.css";
import { FaRegSmile } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/slices/cart";
import toast, { Toaster } from "react-hot-toast";

function CourseItem({ id, title, image, price, teacher, studentCount }) {
  const { theme } = useSelector((store) => store.global);
  const { data } = useSelector((store) => store.courses);
  const { addedProducts } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const clickHandler = () => {
    if (isProductExistInCart() == true) {
      toast.error("دوره قبلا به سبد خرید اضافه شده");
    } else {
      const courseInfo = data.find((course) => course.id == id);
      dispatch(addToCart(courseInfo));
      toast.success("دوره با موفقیت به سبد خرید اضافه شد");
    }
  };
  const isProductExistInCart = () => {
    return addedProducts.some((product) => product.id == id);
  };
  return (
    <>
      <Toaster position="top" />
      <div className={`courseCard ${theme}`}>
        <div className="cardHeader">
          <img src={image} />
        </div>
        <div className="cardBody">
          <h4 className="courseTitle">{title}</h4>
          <p className="courseDesc">
            متن تستی کوتاه برای توضیات مختصر در مورد دوره آموزشی
          </p>
          <div className="courseInfo">
            <div className="courseTeacher">
              <span>
                <FaRegSmile />
              </span>
              <p>{teacher}</p>
            </div>
            <div className="courseStudent">
              <p>{studentCount}</p>
              <span>
                <FaUsers />
              </span>
            </div>
          </div>
        </div>
        <div className="cardFooter">
          <button onClick={clickHandler}>ثبت نام</button>
          <span className="price">{price.toLocaleString()}</span>
        </div>
      </div>
    </>
  );
}

export default CourseItem;
