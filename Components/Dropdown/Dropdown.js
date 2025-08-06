export default function Dropdown({ setFilterValue }) {
  return (
    <select
      name="Filter"
      id="Filter"
      className="filter"
      onChange={(e) => setFilterValue(e.target.value)}
    >
      <option value="All">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="antarctic">Antarctic</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
    </select>
  );
  setFilterValue(e.target.value);
}
