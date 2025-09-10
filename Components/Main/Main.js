import { data } from "react-router";
import Data from "../../CountriesData.js";
import Card from "./Card.js";
import CountryCardShimmer from "./CountryCardShimmer.jsx";

export default function Main({ searchItem }) {
  return (
    <div className="countries-container">
      {Data.length === 0 ? (
        <CountryCardShimmer />
      ) : (
        Data.filter((country) => {
          return (
            country.name.common.toLowerCase().includes(searchItem.toLowerCase()) ||
            country.region.toLowerCase().includes(searchItem.toLowerCase())
          );
        }).map((country, key) => {
          return (
            <Card
              key={key}
              CountryName={country.name.common}
              Image={country.flags.png}
              Capital={country.capital}
              Population={country.population.toLocaleString("en-IN")}
              Region={country.region}
            />
          );
        })
      )}
    </div>
  );
}
