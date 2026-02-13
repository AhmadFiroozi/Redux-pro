import "./Feature.css";
import { useSelector } from "react-redux";
function Feature({ icon, title }) {
  const { theme } = useSelector((store) => store.global);
  return (
    <div className={`featureContainer ${theme}`}>
      <p className="icon">{icon}</p>
      <h2>{title}</h2>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد
      </p>
    </div>
  );
}

export default Feature;
