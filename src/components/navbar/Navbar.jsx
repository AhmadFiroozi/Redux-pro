import { Link, NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Redux/slices/global";
import { selectCartCount } from "../../Redux/slices/cart";
import "./Navbar.css";

function Navbar() {
  const { theme } = useSelector((store) => store.global);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const changeTheme = () => dispatch(toggleTheme());

  const links = [
    { to: "/", label: "صفحه اصلی" },
    { to: "/about", label: "درباره ما" },
    { to: "/contact", label: "تماس با ما" },
  ];

  return (
    <div className={`navabarContainer ${theme}`}>
      <div className="navbar container">
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="icons">
          <span className="cartIcon">
            <Link to="/cart" aria-label="سبد خرید">
              <BsCart size="25px" />
            </Link>
            {cartCount > 0 && <span>{cartCount}</span>}
          </span>

          <span className="darkModeIcon">
            <button
              type="button"
              onClick={changeTheme}
              aria-label={theme === "light" ? "حالت تیره" : "حالت روشن"}
            >
              {theme === "light" ? (
                <MdOutlineDarkMode size="25px" />
              ) : (
                <MdOutlineLightMode size="25px" />
              )}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
