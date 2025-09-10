export default function Search({setSearchItem}) {
  
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        onChange={(e) => setSearchItem(e.target.value)}
        className="search"
        id="search"
        placeholder="Search the countries..."
      />
    </div>
  );
}
