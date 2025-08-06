import Data from "../../CountriesData.js";
import Card from "./Card.js";

export default function Main({ searchItem, filterValue }) {
  const searchData = Data.filter((country) => {
    return country.name.common.toLowerCase().includes(searchItem.toLowerCase());
  });
  const filterData = Data.filter((country) => {
    return country.region.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <div className="countries-container">
      {searchData.length === 0
        ? Data.map((country, key) => {
            return (
              <a key={key} href="">
                <Card
                  key={key}
                  CountryName={country.name.common}
                  Image={country.flags.png}
                  Capital={country.capital}
                  Population={country.population.toLocaleString("en-IN")}
                  Region={country.region}
                />
              </a>
            );
          })
        : searchData.map((country, key) => {
            return (
              <a key={key} href="">
                <Card
                  key={key}
                  CountryName={country.name.common}
                  Image={country.flags.png}
                  Capital={country.capital}
                  Population={country.population.toLocaleString("en-IN")}
                  Region={country.region}
                />
              </a>
            );
          })}
    </div>
  );
}
