import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Card = ({ card }) => {
  const { icon, description, title, bgClass } = card;

  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);
  return (
    <div
      data-aos="flip-left"
      className={`text-white card p-6 card-side  shadow-xl ${bgClass}`}
    >
      <figure>
        <img src={icon} alt="icon" />
      </figure>
      <div className="card-body bgClass">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
