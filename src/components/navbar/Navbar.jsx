import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import "./Navbar.css";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Redux/slices/global";

function Navbar() {
  const { theme } = useSelector((store) => store.global);
  const { addedToCart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const chengTheme = () => {
    dispatch(toggleTheme(theme));
  };
  return (
    <div className={`navabarContainer ${theme}`}>
      <div className="navbar container">
        <ul>
          <li>
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link to="/about">درباره ما</Link>
          </li>
          <li>
            <Link to="/contact">تماس با ما</Link>
          </li>
        </ul>
        <div className="icons">
          <span className="cartIcon">
            <Link to="/cart">
              <BsCart size="25px" />
            </Link>
            {addedToCart > 0 ? <span>{addedToCart}</span> : ""}
          </span>
          <span className="darkModeIcon">
            {theme == "ligth" ? (
              <MdOutlineDarkMode size="25px" onClick={chengTheme} />
            ) : (
              <MdOutlineLightMode size="25px" onClick={chengTheme} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
