import Data from "../Data/Data";
import "./places.css";

const Places = () => {
  return (
    <section>
      
      <div>
        {Data.map((place, index) => (
          <div key={index}>
            <img src={place.image} alt={place.title} width="250" height="300" />
            <h3>{place.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Places;
