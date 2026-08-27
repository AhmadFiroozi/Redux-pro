import Feature from "./Feature";
import "./FeatureList.css";
import { BiSupport } from "react-icons/bi";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { RxUpdate } from "react-icons/rx";
import { useSelector } from "react-redux";

const featureList = [
  {
    id: 1,
    title: "پشتیبانی واقعی",
    icon: <BiSupport />,
    desc: "سؤال‌های فنی‌تان در بخش پرسش و پاسخ هر درس پاسخ داده می‌شود، نه با یک پیام خودکار.",
  },
  {
    id: 2,
    title: "رضایت دانشجویان",
    icon: <FaRegFaceSmileBeam />,
    desc: "میانگین امتیاز دوره‌ها بر پایهٔ نظر کسانی است که پروژهٔ پایانی را تحویل داده‌اند.",
  },
  {
    id: 3,
    title: "به‌روزرسانی مداوم",
    icon: <RxUpdate />,
    desc: "با انتشار نسخه‌های جدید ابزارها، درس‌های مرتبط بازنویسی و دوباره ضبط می‌شوند.",
  },
];

function FeatureList() {
  const { theme } = useSelector((store) => store.global);

  return (
    <div className={`featureListContainer ${theme}`}>
      <div className="container">
        <h2>چرا ما؟</h2>
        <div className="featuresList">
          {featureList.map((feature) => (
            <Feature key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureList;
