import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

const Home = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({
    country: "",
    city: "",
    name: "",
  });

  useEffect(() => {
    getAllcountries();
  }, []);

  const getAllcountries = async () => {
    await axios.get(process.env.REACT_APP_SELECT).then((res) => {
      setData(res.data.data);
    });
  };

  const selectCountry = (e) => {
    const value = e.target.value;
    setSelectedCountry(value);
    if (value !== "") {
      const selectedCountry = data.filter((item) => item.country === value);
      setCity(selectedCountry[0].cities);
      setErrors({ ...errors, country: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCountry === "") {
      setErrors({ ...errors, country: "Please select country" });
    } else if (selectedCity === "") {
      setErrors({ ...errors, city: "Please select city" });
    } else if (
      firstName === "" ||
      firstName.trim().length === 0 ||
      firstName.trim() === ""
    ) {
      setErrors({ ...errors, name: "Please write your name" });
    } else {
      setOpen(true);
    }
  };

  return (
    <section className="home">
      <Modal
        open={open}
        setOpen={setOpen}
        firstName={firstName}
        country={selectedCountry}
        city={selectedCity}
      />
      <div className="container">
        <div className="row">
          <h1 className="title">Hello World !</h1>
          <form className="form">
            <div className="selects">
              <div className="box">
                <label htmlFor="country" className={errors.country && "error"}>
                  Select country
                </label>
                <select
                  id="country"
                  name="country"
                  onChange={selectCountry}
                  className={errors.country && "error"}
                >
                  <option value="">Select here...</option>
                  {data.map((item, index) => (
                    <option value={item.country} key={index}>
                      {item.country}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <span className="err">{errors.country}</span>
                )}
              </div>
              <div className="box">
                <label htmlFor="city" className={errors.city && "error"}>
                  Select city
                </label>
                <select
                  className={errors.city && "error"}
                  id="city"
                  name="city"
                  disabled={city.length === 0 ? true : false}
                  onChange={(e) => {
                    setSelectedCity(e.target.value);
                    setErrors({ ...errors, city: "" });
                  }}
                >
                  <option value="">Select here...</option>
                  {city?.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors.city && <span className="err">{errors.city}</span>}
              </div>
              <div className="box">
                <label htmlFor="name" className={errors.name && "error"}>
                  Write your name
                </label>
                <input
                  className={errors.name && "error"}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Write here..."
                  disabled={selectedCity ? false : true}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setErrors({ ...errors, name: "" });
                  }}
                />
                {errors.name && <span className="err">{errors.name}</span>}
              </div>
            </div>
            <button
              className={
                errors.country || errors.city || errors.name
                  ? "btn error"
                  : "btn"
              }
              onClick={handleSubmit}
            >
              Complete
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Home;
