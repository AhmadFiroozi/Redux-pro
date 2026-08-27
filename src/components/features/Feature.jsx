import "./Feature.css";
import { useSelector } from "react-redux";

function Feature({ icon, title, desc }) {
  const { theme } = useSelector((store) => store.global);

  return (
    <div className={`featureContainer ${theme}`}>
      <p className="icon">{icon}</p>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default Feature;
