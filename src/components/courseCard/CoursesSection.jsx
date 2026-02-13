import { useDispatch, useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import "./CoursesSection.css";
import { useEffect } from "react";
import { fechCourses } from "../../Redux/slices/courses";
function CoursesSection() {
  const { theme } = useSelector((store) => store.global);
  const { data, loding, errorMasage } = useSelector((store) => store.courses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fechCourses());
  }, []);
  return (
    <div className="coursesSectionContainer">
      <div className="container">
        <h2 className={`iransans newestCourses ${theme}`}>
          جدیدترین دوره های آموزشی
        </h2>
        <div className="row">
          {loding ? (
            <h2>در حال دریافت اطلاعات</h2>
          ) : errorMasage ? (
            <h2>دریافت اطلاعات با خطا مواجه شد</h2>
          ) : (
            data.map((course) => (
              <div className="col" key={course.id}>
                <CourseItem {...course} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default CoursesSection;
