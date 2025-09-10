import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import CountryDetailsShimmer from "./CountryDetailsShimmer";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function CountryDetails() {
  const params = useParams();

  const countryName = params.country;

  console.log(countryName)
  const [countryData, setCountryData] = useState([]);
  const [loadingError, setLoadingError] = useState(false);

  const [darkMode, setDarkMode] = useContext(ThemeContext);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          name: data?.name.common || data?.name,
          nativeName: data?.name.official,
          population: data?.population.toLocaleString("en-IN"),
          languages: data?.languages || {},
          capital: data?.capital[0],
          region: data?.region,
          subregion: data?.subregion,
          currencies: Object.values(data?.currencies || {}),
          image: data?.flags.png,
          border: [],
        });

        data.borders.length > 0 &&
          Promise.all(
            data.borders.map((borders) => {
              return fetch(`https://restcountries.com/v3.1/alpha/${borders}`)
                .then((res) => res.json())
                .then(([data]) => {
                  return data.name.common;
                });
            })
          ).then((allBorderCountries) => {
            setCountryData((prevData) => {
              return { ...prevData, border: allBorderCountries };
            });
          });
      })
      .catch((error) => {
        setLoadingError(true);
        console.log(error);
      });
  }, [countryName]);

  return countryData.length === 0 ? (
    <CountryDetailsShimmer />
  ) : (
    <div className={`main-container ${darkMode ? "dark-mode" : ""}`}>
      {" "}
      
      <span
        className="button-back"
        onClick={() => {
          history.back();
        }}
      >
        <i className="fa-solid fa-arrow-left"></i> Back
      </span>
      <div className="main-content">
        <img src={countryData.image} alt="Flag Image" className="flag-image" />
        <div className="country-details">
          <h1>{countryData.name}</h1>
          <div className="details-text">
            <p>
              <b>Native Name :</b>
              <span className="native-name">{countryData.nativeName}</span>
            </p>
            <p>
              <b>Population :</b>
              <span className="population">{countryData.population}</span>
            </p>
            <p>
              <b>Region : </b>
              <span className="region">{countryData.region}</span>
            </p>
            <p>
              <b>SubRegion : </b>
              <span className="subregion">{countryData.subregion}</span>
            </p>
            <p>
              <b>Capital : </b>
              <span className="capital">{countryData.capital}</span>
            </p>
            <p>
              <b>Top Level Domain : </b>
              <span className="top-level-domain">.gr</span>
            </p>
            <p>
              <b>Currencies : </b>
              <span className="currencies">
                {Object.values(countryData.currencies || {})
                  .map((currency) => currency.name)
                  .join(", ")}
              </span>
            </p>
            <p>
              <b>Languages : </b>

              <span className="languages">
                {Object.values(countryData.languages || {}).join(", ")}
              </span>
            </p>
          </div>
          {countryData.border.length > 0 && (
            <div className="border-countries-list">
              <p>
                <b>Borders: </b>
                {countryData.border.map((border, key) => {
                  return (
                    <Link key={key} to={`/${border}`}>
                      {border}
                    </Link>
                  );
                })}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
