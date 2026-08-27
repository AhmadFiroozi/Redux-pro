import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import { fetchCourses } from "../../Redux/slices/courses";
import "./CoursesSection.css";

function CoursesSection() {
  const { theme } = useSelector((store) => store.global);
  const { data, loading, errorMessage } = useSelector((store) => store.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div className="coursesSectionContainer">
      <div className="container">
        <h2 className={`iransans newestCourses ${theme}`}>
          جدیدترین دوره‌های آموزشی
        </h2>

        <div className="row">
          {loading ? (
            // اسکلت به‌جای متن خالی، تا جابه‌جایی چیدمان نداشته باشیم
            Array.from({ length: 8 }).map((_, i) => (
              <div className="col" key={i}>
                <div className={`courseSkeleton ${theme}`} />
              </div>
            ))
          ) : errorMessage ? (
            <div className={`coursesError ${theme}`}>
              <p>{errorMessage}</p>
              <button onClick={() => dispatch(fetchCourses())}>
                تلاش دوباره
              </button>
            </div>
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
