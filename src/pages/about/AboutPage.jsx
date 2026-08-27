import { useSelector } from "react-redux";
import { FaLaptopCode, FaChalkboardTeacher, FaCertificate } from "react-icons/fa";
import "./AboutPage.css";

const points = [
  {
    icon: <FaLaptopCode />,
    title: "آموزش پروژه‌محور",
    text: "هر دوره حول ساخت یک پروژهٔ واقعی طراحی شده تا خروجی قابل ارائه داشته باشید.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "مدرسان فعال در صنعت",
    text: "دوره‌ها را کسانی تدریس می‌کنند که هر روز با همین ابزارها کار می‌کنند.",
  },
  {
    icon: <FaCertificate />,
    title: "گواهی پایان دوره",
    text: "پس از تکمیل هر دوره و تحویل پروژهٔ پایانی، گواهی صادر می‌شود.",
  },
];

function AboutPage() {
  const { theme } = useSelector((store) => store.global);

  return (
    <div className={`aboutPage ${theme}`}>
      <div className="container">
        <h1>دربارهٔ ما</h1>

        <p className="lead">
          ما یک پلتفرم آموزش برنامه‌نویسی هستیم که روی مسیر یادگیری فرانت‌اند و
          بک‌اند تمرکز دارد. هدفمان این است که هر کسی بعد از پایان دوره، به‌جای
          یک گواهی خالی، یک پروژهٔ قابل نمایش در دست داشته باشد.
        </p>

        <div className="aboutGrid">
          {points.map((point) => (
            <div className="aboutCard" key={point.title}>
              <span className="aboutIcon">{point.icon}</span>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </div>
          ))}
        </div>

        <p className="note">
          این پروژه یک نمونه‌کار است؛ دوره‌ها، مدرسان و قیمت‌ها واقعی نیستند و
          صرفاً برای نمایش عملکرد اپلیکیشن استفاده شده‌اند.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
