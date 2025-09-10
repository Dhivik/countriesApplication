import {Link} from "react-router-dom";
export default function Card({ Image, CountryName, Capital, Population, Region }) {
  return (
    <Link className="country-card" to={`/${CountryName}`}>
      <img src={Image} alt={CountryName} />
      <div className="card-text">
        <h3 className="card-title">{CountryName}</h3>
        <p>
          <b>Population: </b>
          {Population}
        </p>
        <p>
          <b>Region: </b>
          {Region}
        </p>
        <p>
          <b>Capital: </b>
          {Capital}
        </p>
      </div>
    </Link>
  );
}
