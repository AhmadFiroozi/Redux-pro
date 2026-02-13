import "./HomePage.css";
import CoursesIcons from "../../components/coursesIcons/CoursesIcons";
import FeatureList from "../../components/features/FeatureList";
import CoursesSection from "../../components/courseCard/CoursesSection";
function HomePage() {
  return (
    <>
      <CoursesIcons />
      <FeatureList />
      <CoursesSection />
    </>
  );
}

export default HomePage;
