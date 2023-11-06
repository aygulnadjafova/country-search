import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import axios from "axios";

const Search = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    getAllcountries();
    }, []);
  
  const getAllcountries = async () => {
    await axios
      .get(process.env.REACT_APP_ALL_COUNTRIES)
      .then((res) => {
        setData(res.data);
        setFilteredCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearch(search);
    const filteredCountries = data.filter((data) => {
      return data.name.common.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredCountries(filteredCountries);
  };
  return (
    <section className="search">
      <div className="container">
        <div className="row">
          <h1 className="title">Country List</h1>
          <form className="searchForm">
            <div className="box">
              <input
                type="text"
                name="searchCountry"
                placeholder="Search here..."
                onChange={handleSearch}
              />
            </div>
          </form>
          <div className="countries">
            {filteredCountries.map((data, index) => (
              <CountryCard key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
