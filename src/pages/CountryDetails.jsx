import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = ({ data }) => {
  const { name } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const getSingleData = async () => {
      await axios
        .get(`${process.env.REACT_APP_SEARCH_BY_NAME}/${name}`)
        .then((res) => {
          setDetails(res.data[0]);
        });
    };
    getSingleData();
  });

  return (
    <div
      className="countryDetails"
      style={{ backgroundImage: `url(${details?.flags?.png})` }}
    >
      <div className="container">
        <div className="row">
          <div className="info">
            <h2 className="name">{details?.name?.common}</h2>
            <p className="text">
              Official name: <span>{details?.name?.official}</span>
            </p>
            <p className="text">
              Area: <span>{details?.area}km²</span>
            </p>
            <p className="text">
              Borders:{" "}
              <span>
                {" "}
                {details?.borders
                  ? details?.borders?.map((item, index, array) =>
                      index === array.length - 1 ? item : item + ", "
                    )
                  : "No border countries"}
              </span>
            </p>
            <p className="text">
              Capital: <span>{details?.capital}</span>
            </p>
            <p className="text">
              Continents:{" "}
              <span>
                {" "}
                {details?.continents?.map((item, index, array) =>
                  index === array.length - 1 ? item : item + ", "
                )}{" "}
              </span>
            </p>
            <p className="text">
              Currencies:{" "}
              <span>
                {details.currencies
                  ? details.currencies[Object.keys(details.currencies)[0]].name
                  : "No currency found"}
              </span>
            </p>
            <p className="text">
              Independency: <span>{details.independent ? "Yes" : "No"}</span>
            </p>{" "}
            <p className="text">
              Landlocked: <span>{details.landlocked ? "Yes" : "No"}</span>
            </p>
            <p className="text">
              Languages:{" "}
              {/* {details.languages === Object
                ? Object.values(details?.languages).join(", ")
                : "ol"} */}
            </p>
            <p className="text">
              Population: <span>{details?.population}</span>
            </p>
            <p className="text">
              Region: <span>{details?.region}</span>
            </p>
            <p className="text">
              Start of the week: <span>{details?.startOfWeek}</span>{" "}
            </p>
            <p className="text">
              Status: <span>{details?.status}</span>{" "}
            </p>
            <p className="text">
              Subregion: <span>{details?.subregion}</span>{" "}
            </p>
            <p className="text">
              Time zone: <span>{details?.timezones}</span>{" "}
            </p>
            <p className="text">
              Location:{" "}
              <Link to={details.maps?.googleMaps} target="_blank">
                Click here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;

// borders

// {
//   data.name.common;
// }
// {
//   data.capital;
// }
// {
//   data.continents;
// }
// {
//   data.currencies;
// }
// {
//   data.languages;
// }
// {
//   data.population;
// }
// {
//   data.timezones;
// }
