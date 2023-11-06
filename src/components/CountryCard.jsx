import CountryDetails from "../pages/CountryDetails";
import { Link } from "react-router-dom";
const CountryCard = ({ data }) => {
  return (
    <div className="countryCard">
      <Link
        to={`/search/details/${data.name.common}`}
        element={<CountryDetails />}
      >
        <div className="flag">
          <img src={data.flags.png} alt="flag-img" />
        </div>
        <div className="info">
          <h2 className="name">{data.name.common}</h2>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
